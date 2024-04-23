import Hero from "@/components/shared/home";
import Navbar from "@/components/shared/navbar";
import Optimization from "@/components/shared/optimization";
import WhatIDo from "@/components/shared/what-i-do";
import Work from "@/components/shared/work";

export default function Home() {
  return (
    <main className="w-full">
      <Navbar />
      <Hero />
      <Optimization />
      <WhatIDo />
      <Work />
    </main>
  );
}
