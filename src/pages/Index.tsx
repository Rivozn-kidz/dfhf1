import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <Services />
      <Team />
      <Footer />
    </div>
  );
};

export default Index;
