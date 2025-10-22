"use client";
import React, { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import chatApiRequest from "@/apiRequests/chat";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";

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
      body = QaRequestSchema.parse({ message: text });
    } catch (err: any) {
      const errMsg = err?.errors?.[0]?.message ?? String(err);
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
    <div className="max-w-3xl mx-auto p-4 flex flex-col h-[80vh]">
      <div className="border rounded-md p-4 mb-4 flex-1 overflow-auto flex flex-col gap-3">
        {messages.length === 0 ? (
          <div className="text-sm text-muted-foreground">
            No messages yet. Ask something about the project.
          </div>
        ) : (
          messages.map((m, i) => (
            <div
              key={i}
              className={`self-${m.role === "user" ? "end" : "start"} ${
                m.role === "user" ? "bg-slate-200" : "bg-slate-100"
              } p-2 rounded max-w-[70%]`}
            >
              {m.isMarkdown ? (
                <ReactMarkdown
                  remarkPlugins={[remarkGfm, remarkBreaks]}
                  components={{
                    ol: ({ node, ...props }) => (
                      <ol className="list-decimal ml-6" {...props} />
                    ),
                    ul: ({ node, ...props }) => (
                      <ul className="list-disc ml-6" {...props} />
                    ),
                  }}
                >
                  {m.content}
                </ReactMarkdown>
              ) : (
                <div className="text-sm">{m.content}</div>
              )}
            </div>
          ))
        )}
        <div ref={chatEndRef} />
      </div>

      <div className="flex gap-2">
        <input
          className="flex-1 border rounded p-2"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") send();
          }}
          placeholder={
            externalUrl ? `Sending to ${externalUrl}` : "Type your question..."
          }
          disabled={loading}
        />
        <button
          className="px-4 py-2 bg-primary text-white rounded disabled:opacity-50"
          onClick={send}
          disabled={loading}
        >
          {loading ? "..." : "Send"}
        </button>
      </div>
    </div>
  );
}
