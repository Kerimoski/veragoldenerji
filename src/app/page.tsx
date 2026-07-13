import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { B2BServices } from "@/components/B2BServices";
import { Arsenal } from "@/components/Arsenal";
import { InteractiveMap } from "@/components/InteractiveMap";
import { StatsCounter } from "@/components/StatsCounter";
import { QuoteForm } from "@/components/QuoteForm";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <Hero />
        <B2BServices />
        <Arsenal />
        <InteractiveMap />
        <StatsCounter />
        <QuoteForm />
      </main>
      <Footer />
    </>
  );
}

