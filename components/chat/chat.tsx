"use client";
import React, { useState, useRef, useEffect } from "react";
import chatApiRequest from "@/apiRequests/chat";
import MarkdownMessage from "./MarkdownMessage";

import {
  QaRequest,
  QaRequestSchema,
  RAGResponse,
} from "@/schemaValidation/chat.schema";

type Msg = {
  role: "user" | "assistant";
  content: string;
  isMarkdown?: boolean;
};

export function Chat() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Msg[]>([]);
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const externalUrl = process.env.NEXT_PUBLIC_QA_URL || "";

  // scroll xuống cuối khi có message mới
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function send() {
    const text = input.trim();
    if (!text) return;

    const userMsg: Msg = { role: "user", content: text };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setLoading(true);

    // tạo body type-safe & validate bằng Zod
    let body: QaRequest;
    try {
      body = QaRequestSchema.parse({ question: text });
    } catch (err: any) {
      const errMsg = err?.errors?.[0]?.question ?? String(err);
      setMessages((m) => [
        ...m,
        { role: "assistant", content: `Validation Error: ${errMsg}` },
      ]);
      setLoading(false);
      return;
    }

    try {
      const data = await chatApiRequest.query(body); // await

      const assistantText: string =
        (data && data.payload.answer) || "No response";

      // Giả sử backend trả về Markdown
      const assistant: Msg = {
        role: "assistant",
        content: assistantText,
        isMarkdown: true,
      };
      setMessages((m) => [...m, assistant]);
    } catch (err: any) {
      const errMsg = err?.message ?? String(err);
      setMessages((m) => [
        ...m,
        { role: "assistant", content: `Error calling backend: ${errMsg}` },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="h-full max-h-[95vh] flex flex-col w-full max-w-3xl ">
      {/* Nội dung hội thoại */}
      <div className="flex-1 overflow-auto space-y-3 mb-2 mt-6 p-2">
        {messages.length === 0 ? (
          <h1 className="text-4xl font-extrabold text-center mb-2 drop-shadow-sm">
            <span className="bg-gradient-to-r from-[#1565C0] to-[#FFD740] text-transparent bg-clip-text">
              Hello! Where should we begin?
            </span>
          </h1>
        ) : (
          messages.map((m, i) => (
            <div
              key={i}
              className={`flex ${
                m.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`p-3 rounded-2xl max-w-[75%] text-sm leading-relaxed shadow-sm ${
                  m.role === "user"
                    ? "bg-[#1E88E5] text-white rounded-br-none"
                    : "bg-[#FFF9C4] text-gray-800 rounded-bl-none"
                }`}
              >
                {m.isMarkdown ? (
                  <MarkdownMessage content={m.content} />
                ) : (
                  m.content
                )}
              </div>
            </div>
          ))
        )}
        <div ref={chatEndRef} />
      </div>

      {/* Ô nhập chat */}
      <div className="flex items-center mb-4 gap-2 mt-auto">
        <input
          className="flex-1 bg-white border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1E88E5]"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && send()}
          placeholder="Nhập câu hỏi..."
          disabled={loading}
        />
        <button
          className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1E88E5] hover:bg-[#1565C0] text-white transition disabled:opacity-50"
          onClick={send}
          disabled={loading}
        >
          {loading ? <span className="animate-spin">⏳</span> : <span>➤</span>}
        </button>
      </div>
    </div>
  );
}
