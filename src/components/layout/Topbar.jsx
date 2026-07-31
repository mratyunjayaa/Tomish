import { MapPin, Mail, Phone } from "lucide-react";

export function TopBar() {
  return (
    <div className="hidden border-b border-slate-700/50 bg-[#0B2246] px-4 py-2 text-xs text-white md:block">
      <div className="mx-auto flex max-w-5xl items-center justify-between">
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4 fill-[#FFC107] text-[#0B2246]" />
          <span>
            <strong className="font-semibold text-white">Address:</strong> Lucknow - 226010
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Mail className="h-4 w-4 fill-[#FFC107] text-[#0B2246]" />
          <span>
            <strong className="font-semibold text-white">Email:</strong> info@tomish.in
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Phone className="h-4 w-4 fill-[#FFC107] text-[#0B2246]" />
          <span>
            <strong className="font-semibold text-white">Contact:</strong> +91 - 9569264746
          </span>
        </div>
      </div>
    </div>
  );
}