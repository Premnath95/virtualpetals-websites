import { NextResponse } from "next/server";

interface ContactRequestBody {
  fullName: string;
  email: string;
  companyName: string;
  phone?: string;
  service: string;
  message: string;
  honeypot?: string; // Anti-spam trap
}

export async function POST(request: Request) {
  try {
    const body: ContactRequestBody = await request.json();

    // 1. Spam protection: Honeypot check
    if (body.honeypot && body.honeypot.trim() !== "") {
      // Quietly reject bots without alerting them
      return NextResponse.json({ success: true, message: "Enquiry received." });
    }

    // 2. Server-side Validation
    const { fullName, email, companyName, phone, service, message } = body;

    if (!fullName || fullName.trim().length < 2) {
      return NextResponse.json(
        { error: "Please enter your full name (at least 2 characters)." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid business email address." },
        { status: 400 }
      );
    }

    if (!companyName || companyName.trim().length < 2) {
      return NextResponse.json(
        { error: "Please enter your company or organization name." },
        { status: 400 }
      );
    }

    if (!service || service.trim().length === 0) {
      return NextResponse.json(
        { error: "Please select the service you are interested in." },
        { status: 400 }
      );
    }

    if (!message || message.trim().length < 10) {
      return NextResponse.json(
        { error: "Please provide a brief description of your requirements (at least 10 characters)." },
        { status: 400 }
      );
    }

    // 3. Log lead data securely on the backend
    const enquiryRecord = {
      timestamp: new Date().toISOString(),
      fullName: fullName.trim(),
      email: email.trim().toLowerCase(),
      companyName: companyName.trim(),
      phone: (phone || "").trim(),
      service: service.trim(),
      message: message.trim(),
    };

    console.log("[Virtual Petals Backend Lead Record]", JSON.stringify(enquiryRecord, null, 2));

    // If an external SMTP or webhook URL is configured via environment variables (e.g. SLACK_WEBHOOK_URL or SENDGRID_API_KEY),
    // it can be forwarded here.
    if (process.env.LEAD_WEBHOOK_URL) {
      try {
        await fetch(process.env.LEAD_WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(enquiryRecord),
        });
      } catch (err) {
        console.error("Failed to forward lead to webhook:", err);
      }
    }

    return NextResponse.json(
      {
        success: true,
        message:
          "Thank you for reaching out to Virtual Petals. Our enterprise technology team has received your enquiry and will respond within one business day.",
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error processing contact submission:", error);
    return NextResponse.json(
      {
        error:
          "An unexpected error occurred while processing your request. Please try again or email us directly at contactus@virtualpetals.com.",
      },
      { status: 500 }
    );
  }
}
