import { Chat } from "@/components/chat/chat";

export default function ChatPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#E3F2FD] via-[#F9FBFF] to-[#FFF8E1] flex flex-col items-center p-10">
  <h1 className="text-4xl font-extrabold text-center mb-8 drop-shadow-sm">
    <span className="bg-gradient-to-r from-[#1565C0] to-[#FFD740] text-transparent bg-clip-text">
      EDU ASSISTANT
    </span>
  </h1>


    <Chat />
</main>


  );
}
