import React from "react";
import { Building2, Bot, Globe2, MapPin } from "lucide-react";

export default function StateBar() {
  const stats = [
    {
      icon: Building2,
      label: "Trusted by 50+ Schools",
    },
    {
      icon: Bot,
      label: "1000+ Students Taught",
    },
    {
      icon: Globe2,
      label: "10+ Community Programs",
    },
    {
      icon: MapPin,
      label: "Active Globally",
    },
  ];

  return (
    <div className="w-full bg-primary py-4 px-3 sm:px-8 border-y border-white/10 shadow-md">
      {/* Flex container that wraps items nicely with uniform gap spacing */}
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center sm:justify-between gap-y-4 gap-x-6 sm:gap-x-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="flex items-center justify-center gap-2 sm:gap-3 font-sans font-semibold text-white text-[11px] xs:text-xs sm:text-sm md:text-base"
            >
              <Icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-amber-400 shrink-0" />
              <span className="whitespace-nowrap tracking-wide">
                {stat.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}