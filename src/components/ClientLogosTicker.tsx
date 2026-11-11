import React from "react";
import Image from "next/image";

const CLIENTS = [
  { name: "AHOY LLC", location: "Dubai, UAE", logo: "/clients/ahoy.png" },
  { name: "Flux IT", location: "Australia", logo: "/clients/flux.png" },
  { name: "Wippli", location: "Australia", logo: "/clients/wippli.webp" },
  { name: "DULSCO", location: "Dubai, UAE", logo: "/clients/dulsco.webp" },
  { name: "AD Ports Group", location: "UAE", logo: "/clients/adports.webp" },
  { name: "Octane Systems", location: "Australia", logo: "/clients/octane.webp" },
  { name: "Data Force Research", location: "United States", logo: "/clients/dataforce.webp" },
  { name: "Bamboo Body", location: "Australia", logo: "/clients/bamboo-body.png" },
];

export default function ClientLogosTicker() {
  return (
    <section className="py-8 border-y border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 bg-slate-950/40 dark:bg-slate-950/40 light:bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-bold text-slate-400 dark:text-slate-400 light:text-slate-500 tracking-wider uppercase mb-6">
          Trusted by Businesses Across the UAE, Australia, United States &amp; Beyond
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 lg:gap-8">
          {CLIENTS.map((client) => (
            <div
              key={client.name}
              className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-slate-900/80 dark:bg-slate-900/80 light:bg-white border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 shadow-sm hover:border-slate-700 transition-colors"
            >
              <div className="w-6 h-6 rounded-full overflow-hidden flex items-center justify-center bg-white p-0.5 shrink-0">
                <Image
                  src={client.logo}
                  alt={`${client.name} logo`}
                  width={24}
                  height={24}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-white dark:text-white light:text-slate-900 leading-tight">
                  {client.name}
                </span>
                <span className="text-[10px] text-slate-400 dark:text-slate-400 light:text-slate-500 font-medium leading-tight">
                  {client.location}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
