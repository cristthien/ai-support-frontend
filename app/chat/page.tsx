import { Chat } from "@/components/chat/chat";

export default function ChatPage() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-2xl font-semibold mb-4">RAG Chat</h1>
      <Chat />
    </main>
  );
}
