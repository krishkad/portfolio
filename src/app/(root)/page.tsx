import Hero from "@/components/shared/home";
import Navbar from "@/components/shared/navbar";
import Optimization from "@/components/shared/optimization";

export default function Home() {
  return (
    <main className="w-full">
      <Navbar />
      <Hero />
      <Optimization />
    </main>
  );
}
