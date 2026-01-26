import About from "@/components/About";
import Awards from "@/components/Awards";
import CTABanner from "@/components/CTABanner";
import FAQ from "@/components/FAQ";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import Venues from "@/components/Venues";

const Index = () => {
  return (
    <main  className="overflow-x-hidden">
      <Hero />
      <Stats />
      <About />
      <CTABanner />
      <Services />
      <Testimonials />
      <Awards />
      <Venues />
      <Gallery />
      <FAQ />
    </main>
  );
};

export default Index;
