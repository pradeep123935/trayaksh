import Hero from "@/components/Hero";
import BuyWithConfidence from "@/components/BuyWithConfidence";
import ComprehensiveServices from "@/components/ComprehensiveServices";
import WhatWeInspect from "@/components/WhatWeInspect";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import BookInspection from "@/components/BookInspection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col">
      <Hero />
      <BuyWithConfidence />
      <ComprehensiveServices />
      <WhatWeInspect />
      <WhyChooseUs />
      <Testimonials />
      <BookInspection />
      <Footer />
    </main>
  );
}
