import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Team from "@/components/Team";

const TeamPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Meet Our <span className="text-primary">Team</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up">
            Talented professionals dedicated to bringing your vision to life
          </p>
        </div>
      </section>

      <Team />
      
      <Footer />
    </div>
  );
};

export default TeamPage;
