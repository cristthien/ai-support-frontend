import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Button } from "@/components/ui/button";
import Link from "next/link"

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Advisor",
  description: "Hỗ trợ sinh viên lập kế hoạch học tập thông minh",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body className="min-h-screen bg-white text-gray-800 flex flex-col font-sans">
        <div className="flex flex-1">
          <main className="flex-1 p-8 bg-gradient-to-br from-white via-[#E3F2FD]/30 to-yellow-50">
              <Button asChild className="fixed top-2 right-2" variant="outline"  size="sm">
                <Link href="/login">Login</Link>
              </Button>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
