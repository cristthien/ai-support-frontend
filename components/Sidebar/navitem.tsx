import React from "react";

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
}

export default function NavItem({ icon, label }: NavItemProps) {
  return (
    <button
      className="
        flex items-center gap-3 w-full px-3 py-2 rounded-md
        hover:bg-accent transition
      "
    >
      <span className="text-muted-foreground">{icon}</span>
      <span
        className="
          opacity-0 group-hover:opacity-100
          transition-opacity duration-300
          whitespace-nowrap
        "
      >
        {label}
      </span>
    </button>
  );
}
