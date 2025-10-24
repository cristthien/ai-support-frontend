"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const logoSrc = "/EduAsitant-logo.png"; // ảnh phải nằm trong thư mục public

export default function LoginPage() {
  const router = useRouter();
  const [identifier, setIdentifier] = useState(""); // email hoặc số điện thoại
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function validate() {
    if (!identifier.trim()) {
      setError("Vui lòng nhập email hoặc số điện thoại.");
      return false;
    }
    if (!password) {
      setError("Vui lòng nhập mật khẩu.");
      return false;
    }
    // basic email-like check (optional)
    // if (identifier.includes("@") && !/^\S+@\S+\.\S+$/.test(identifier)) {
    //   setError("Email không hợp lệ.");
    //   return false;
    // }
    setError("");
    return true;
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setError("");
    try {
      // Thay chỗ này bằng call API thật của dự án
      await new Promise((res) => setTimeout(res, 800));

      // ví dụ: nếu mật khẩu là "password" thì login thành công (demo)
      if (password === "password") {
        // lưu remember (demo)
        if (remember) localStorage.setItem("edu_remember", identifier);
        // chuyển hướng về trang chính
        router.push("/");
      } else {
        setError("Thông tin đăng nhập không đúng. (demo mật khẩu: password)");
      }
    } catch (err) {
      setError("Có lỗi xảy ra. Vui lòng thử lại.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#E8F0FE] via-[#F9FBFF] to-[#FFF8E1] flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white/80 backdrop-blur-sm border border-[#BBDEFB]/60 rounded-2xl shadow-md p-6">
        {/* Header (logo + title) */}
        <div className="flex flex-col items-center mb-4">
          <Image
            src={logoSrc}
            alt="Edu Assistant"
            width={150}
            height={200}
            className="object-contain"
          />
          <p className="text-sm text-gray-600 mt-2 text-center">
            Đăng nhập để tiếp tục — lập lộ trình, tra cứu môn học và nhận gợi ý nghề nghiệp.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={onSubmit} className="space-y-4">
          {error && (
            <div className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-md p-2">
              {error}
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email hoặc SĐT
            </label>
            <input
              type="text"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              placeholder="ví dụ: han@example.com hoặc 0912345678"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1E88E5] bg-white text-sm"
              disabled={loading}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Mật khẩu
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Nhập mật khẩu"
                className="w-full rounded-lg border border-gray-300 px-4 py-2 pr-12 focus:outline-none focus:ring-2 focus:ring-[#1E88E5] bg-white text-sm"
                disabled={loading}
              />
              <button
                type="button"
                onClick={() => setShowPassword((s) => !s)}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-sm px-2 py-1 rounded focus:outline-none"
                aria-label={showPassword ? "Ẩn mật khẩu" : "Hiện mật khẩu"}
              >
                <span className="text-[#1976D2]">{showPassword ? "Ẩn" : "Hiện"}</span>
              </button>
            </div>
            <div className="flex justify-between items-center mt-2 text-sm">
              <label className="inline-flex items-center gap-2 text-gray-600">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                  disabled={loading}
                  className="w-4 h-4 rounded border-gray-300"
                />
                Ghi nhớ đăng nhập
              </label>
              <Link href="/forgot" className="text-sm text-[#1976D2] hover:underline">
                Quên mật khẩu?
              </Link>
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full rounded-full bg-[#1E88E5] hover:bg-[#1565C0] text-white font-semibold py-2 disabled:opacity-60 transition"
              disabled={loading}
            >
              {loading ? "Đang xử lý..." : "Đăng nhập"}
            </button>
          </div>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-3 my-4">
          <div className="flex-1 h-px bg-gray-200" />
          <div className="text-xs text-gray-500">hoặc</div>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        {/* Social / Register */}
        <div className="space-y-3">
          <button
            type="button"
            onClick={() => alert("Demo: đăng nhập Google")}
            className="w-full rounded-full border border-gray-200 py-2 bg-white text-sm hover:shadow-sm"
          >
            Đăng nhập với Google
          </button>

          <div className="text-center text-sm text-gray-600">
            Chưa có tài khoản?{" "}
            <Link href="/signup" className="text-[#1976D2] hover:underline">
              Đăng ký
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
