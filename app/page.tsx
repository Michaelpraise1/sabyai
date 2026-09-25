import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Integrations from "./components/Integrations";
import Workflows from "./components/Workflows";
import Stats from "./components/Stats";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import CTABanner from "./components/CTABanner";
import Footer from "./components/Footer";
import AnimateOnScroll from "./components/AnimateOnScroll";

export default function Home() {
  return (
    <main className="flex flex-col flex-1 bg-[#EFEFEF]">
      <Navbar />
      <Hero />
      <AnimateOnScroll>
        <Features />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <Integrations />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <Workflows />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <Stats />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <Pricing />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <FAQ />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <CTABanner />
      </AnimateOnScroll>
      <Footer />
    </main>
  );
}
