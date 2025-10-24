"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const logoSrc = "/EduAsitant-logo.png"; // ảnh nằm trong thư mục public

export default function SignupPage() {
  const router = useRouter();
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function validate() {
    if (!fullname.trim()) {
      setError("Vui lòng nhập họ tên.");
      return false;
    }
    if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) {
      setError("Vui lòng nhập email hợp lệ.");
      return false;
    }
    if (!phone.trim() || !/^0\d{9,10}$/.test(phone)) {
      setError("Số điện thoại không hợp lệ.");
      return false;
    }
    if (password.length < 6) {
      setError("Mật khẩu phải có ít nhất 6 ký tự.");
      return false;
    }
    if (password !== confirm) {
      setError("Mật khẩu nhập lại không khớp.");
      return false;
    }
    setError("");
    return true;
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    try {
      // Giả lập gọi API (demo)
      await new Promise((res) => setTimeout(res, 800));
      alert("Đăng ký thành công (demo)");
      router.push("/login");
    } catch (err) {
      setError("Có lỗi xảy ra. Vui lòng thử lại.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#E8F0FE] via-[#F9FBFF] to-[#FFF8E1] flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white/80 backdrop-blur-sm border border-[#BBDEFB]/60 rounded-2xl shadow-md p-6">
        {/* Header */}
        <div className="flex flex-col items-center mb-4">
          <Image
            src={logoSrc}
            alt="Edu Assistant"
            width={150}
            height={200}
            className="object-contain"
          />
          <p className="text-sm text-gray-600 mt-2 text-center">
            Tạo tài khoản để khám phá lộ trình học tập và công cụ hỗ trợ.
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
              Họ tên
            </label>
            <input
              type="text"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              placeholder="Nguyễn Văn A"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1E88E5] bg-white text-sm"
              disabled={loading}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="han@example.com"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1E88E5] bg-white text-sm"
              disabled={loading}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Số điện thoại
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="0912345678"
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
                placeholder="Tối thiểu 6 ký tự"
                className="w-full rounded-lg border border-gray-300 px-4 py-2 pr-12 focus:outline-none focus:ring-2 focus:ring-[#1E88E5] bg-white text-sm"
                disabled={loading}
              />
              <button
                type="button"
                onClick={() => setShowPassword((s) => !s)}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-sm text-[#1976D2]"
              >
                {showPassword ? "Ẩn" : "Hiện"}
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nhập lại mật khẩu
            </label>
            <input
              type={showPassword ? "text" : "password"}
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              placeholder="Nhập lại mật khẩu"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1E88E5] bg-white text-sm"
              disabled={loading}
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-full bg-[#1E88E5] hover:bg-[#1565C0] text-white font-semibold py-2 disabled:opacity-60 transition"
            disabled={loading}
          >
            {loading ? "Đang xử lý..." : "Đăng ký"}
          </button>
        </form>

        {/* Footer */}
        <div className="text-center text-sm text-gray-600 mt-4">
          Đã có tài khoản?{" "}
          <Link href="/login" className="text-[#1976D2] hover:underline">
            Đăng nhập
          </Link>
        </div>
      </div>
    </main>
  );
}
