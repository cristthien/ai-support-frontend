import Sidebar from "@/components/Sidebar/sidebar";
import SearchBox from "@/components/SearchBox/searchbox";

export default function HomePage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-semibold mb-8">perplexity</h1>
        <SearchBox />
      </main>
    </div>
  );
}