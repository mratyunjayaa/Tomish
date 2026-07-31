import { ShoppingCart } from "lucide-react";

export default function CartIcon({ count = 0 }) {
  return (
    <button
      type="button"
      aria-label={`Shopping cart with ${count} items`}
      className="relative cursor-pointer p-1 group"
    >
      <ShoppingCart className="h-6 w-6 text-primary transition group-hover:text-accent" />

      {count > 0 && (
        <span className="absolute -right-2 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-secondary text-[11px] font-bold text-white">
          {count}
        </span>
      )}
    </button>
  );
}