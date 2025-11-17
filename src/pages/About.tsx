import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Target, Eye, Award, Users } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To empower businesses through innovative technology solutions that drive growth and transformation.",
    },
    {
      icon: Eye,
      title: "Our Vision",
      description: "To be the leading technology partner trusted by businesses worldwide for digital excellence.",
    },
    {
      icon: Award,
      title: "Our Values",
      description: "Innovation, integrity, excellence, and customer-centricity guide everything we do.",
    },
    {
      icon: Users,
      title: "Our Approach",
      description: "Collaborative, agile, and results-driven methodology to deliver exceptional outcomes.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            About <span className="text-primary">Mawrld Tech</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up">
            Transforming ideas into digital reality since our inception
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-6 bg-card/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-8 text-center">Our Story</h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Mawrld Tech Inc was founded with a simple yet powerful vision: to bridge the gap between innovative 
              technology and business success. What started as a small team of passionate developers has grown into 
              a full-service technology company serving clients worldwide.
            </p>
            <p>
              We specialize in creating custom digital solutions that not only meet but exceed our clients' expectations. 
              From web and mobile applications to cloud infrastructure and cybersecurity, we bring expertise, creativity, 
              and dedication to every project.
            </p>
            <p>
              Our commitment to excellence and innovation has earned us the trust of businesses across various industries. 
              We don't just build technology—we build partnerships that drive success.
            </p>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(244,63,94,0.15)] animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
