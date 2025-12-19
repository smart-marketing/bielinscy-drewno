import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import ForWhom from "@/components/ForWhom";
import HowWeWork from "@/components/HowWeWork";
import Products from "@/components/Products";
import ServiceArea from "@/components/ServiceArea";
import FinalCTA from "@/components/FinalCTA";
import StickyMobileCTA from "@/components/StickyMobileCTA";

export default function Home() {
  return (
    <>
      <main className="overflow-hidden">
        <Hero />
        <ProblemSolution />
        <ForWhom />
        <HowWeWork />
        <Products />
        <ServiceArea />
        <FinalCTA />
      </main>
      <StickyMobileCTA />
    </>
  );
}
