import React from "react";
import { MapPin, Mail, Phone } from "lucide-react";

export default function Topbar() {
  return (
    <div className="hidden border-b border-slate-700/50 bg-[#0B2246] px-4 py-2 text-xs text-white md:block font-sans">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4 fill-[#FFC107] text-[#0B2246] shrink-0" />
          <span>
            <strong className="font-semibold text-white">Address:</strong> Lucknow - 226010
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Mail className="h-4 w-4 fill-[#FFC107] text-[#0B2246] shrink-0" />
          <span>
            <strong className="font-semibold text-white">Email:</strong>{" "}
            <a
              href="mailto:info@tomish.in"
              className="hover:text-[var(--color-secondary,#b9d7ea)] transition-colors"
            >
              info@tomish.in
            </a>
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Phone className="h-4 w-4 fill-[#FFC107] text-[#0B2246] shrink-0" />
          <span>
            <strong className="font-semibold text-white">Contact:</strong>{" "}
            <a
              href="tel:+919569264746"
              className="hover:text-[var(--color-secondary,#b9d7ea)] transition-colors"
            >
              +91 - 9569264746
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}