import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { NAV_LINKS } from "../../constants/navigation";

const itemVariants = {
  closed: { opacity: 0, y: -8 },
  open: { opacity: 1, y: 0, transition: { duration: 0.2 } },
};

export default function NavLinks({ mobile = false, onItemClick }) {
  if (mobile) {
    return (
      <div className="flex flex-col space-y-1 py-1">
        {NAV_LINKS.map((link, index) => (
          <motion.div key={link.label} variants={itemVariants}>
            <NavLink
              to={link.path || link.href}
              onClick={onItemClick}
              className={({ isActive }) =>
                `group flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition-all ${
                  isActive
                    ? "bg-primary text-white shadow-sm"
                    : "text-slate-700 hover:bg-slate-100/80 hover:text-slate-900 active:bg-slate-100"
                }`
              }
            >
              <span>{link.label}</span>
              <span className="text-xs font-mono text-slate-400 group-hover:text-accent transition-colors">
                0{index + 1}
              </span>
            </NavLink>
          </motion.div>
        ))}
      </div>
    );
  }

  return (
    <>
      {NAV_LINKS.map((link) => (
        <NavLink
          key={link.label}
          to={link.path || link.href}
          onClick={onItemClick}
          className={({ isActive }) =>
            isActive
              ? "rounded-lg bg-primary px-4 py-2 font-semibold text-white shadow-xs"
              : "px-3 py-2 text-slate-700 transition hover:text-accent font-medium"
          }
        >
          {link.label}
        </NavLink>
      ))}
    </>
  );
}