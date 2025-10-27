"use client";

import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";

type MarkdownMessageProps = {
  content: string;
};

export default function MarkdownMessage({ content }: MarkdownMessageProps) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm, remarkBreaks]}
      components={{
        h1: ({ node, ...props }) => (
          <h1
            className="text-xl font-bold text-[#1565C0] mb-2 border-b border-blue-200 pb-1"
            {...props}
          />
        ),
        h2: ({ node, ...props }) => (
          <h2
            className="text-lg font-semibold text-[#1976D2] mb-1"
            {...props}
          />
        ),
        h3: ({ node, ...props }) => (
          <h3 className="text-base font-semibold text-[#1E88E5]" {...props} />
        ),
        p: ({ node, ...props }) => (
          <p className="mb-2 leading-relaxed text-gray-800" {...props} />
        ),
        ul: ({ node, ...props }) => (
          <ul className="list-disc list-inside mb-2 text-gray-800" {...props} />
        ),
        ol: ({ node, ...props }) => (
          <ol
            className="list-decimal list-inside mb-2 text-gray-800"
            {...props}
          />
        ),
        li: ({ node, ...props }) => (
          <li className="ml-3 mb-1 marker:text-[#1E88E5]" {...props} />
        ),
        blockquote: ({ node, ...props }) => (
          <blockquote
            className="border-l-4 border-[#1E88E5] bg-[#E3F2FD] px-3 py-1 my-2 italic text-gray-700 rounded-r-lg"
            {...props}
          />
        ),
        a: ({ node, ...props }) => (
          <a
            className="text-[#1565C0] underline hover:text-[#0D47A1] transition"
            target="_blank"
            rel="noopener noreferrer"
            {...props}
          />
        ),
        table: ({ node, ...props }) => (
          <div className="overflow-x-auto my-2">
            <table
              className="min-w-full border border-gray-300 text-sm text-left rounded-lg overflow-hidden"
              {...props}
            />
          </div>
        ),
        th: ({ node, ...props }) => (
          <th
            className="bg-[#E3F2FD] font-semibold border border-gray-300 px-3 py-2 text-gray-900"
            {...props}
          />
        ),
        td: ({ node, ...props }) => (
          <td
            className="border border-gray-300 px-3 py-2 text-gray-800"
            {...props}
          />
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
