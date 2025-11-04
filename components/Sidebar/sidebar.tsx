"use client";

import Image from "next/image";
import { Compass, BookOpen, BarChart } from "lucide-react";
import NavItem from "./navitem";

export default function Sidebar() {
  return (
    <aside
      className="
        group fixed left-0 top-0 h-screen z-50
        bg-background border-r shadow-sm
        w-16 hover:w-64
        transition-all duration-300 ease-in-out
        overflow-hidden
        flex flex-col
      "
    >
      {/* Logo luôn hiển thị */}
      <div className="flex items-end gap-3 p-4 mb-6">
  <Image
    src="/4.png"
    alt="Logo"
    width={32}
    height={32}
    className="rounded-md"
  />
  <span
    className="
      text-sm font-medium text-neutral-600 italic
      opacity-0 group-hover:opacity-100
      transition-opacity duration-300
      whitespace-nowrap ml-[-20px] mb-[2px]
    "
  >
    EduAssist  </span>
</div>


      {/* Danh sách nav item */}
      <nav className="space-y-1 flex-1 px-2">
        <NavItem icon={<Compass />} label="Travel" />
        <NavItem icon={<BookOpen />} label="Academic" />
        <NavItem icon={<BarChart />} label="Sports" />
      </nav>
    </aside>
  );
}
