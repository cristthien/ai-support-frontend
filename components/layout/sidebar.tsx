"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { title: "Trang chủ", path: "/" },
  { title: "Lộ trình học", path: "/roadmap" },
  { title: "Danh sách môn", path: "/courses" },
  { title: "Gợi ý nghề nghiệp", path: "/career" },
  { title: "Liên hệ", path: "/contact" },
  { title: "Tìm kiếm thông tin với AI", path: "/chat" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-72 bg-[#E3F2FD] border-r border-gray-200 p-5 flex flex-col gap-6">
      <ul className="space-y-2">
        {menuItems.map((item) => {
          const active = pathname === item.path;
          return (
            <li key={item.path}>
              <Link
                href={item.path}
                className={`block p-2 rounded-lg font-medium text-center transition ${
                  active
                    ? "bg-yellow-400 text-white shadow-md"
                    : "hover:bg-yellow-200 hover:text-[#0D47A1] text-[#1E88E5]"
                }`}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
