import { Code, Cpu, Palette, Rocket } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Custom web applications built with cutting-edge technologies for optimal performance and user experience.",
  },
  {
    icon: Cpu,
    title: "3D Solutions",
    description: "Immersive 3D experiences and visualizations that bring your ideas to life with stunning realism.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces designed to captivate users and drive engagement.",
  },
  {
    icon: Rocket,
    title: "Digital Innovation",
    description: "Pioneering solutions leveraging AI, blockchain, and emerging technologies to stay ahead.",
  },
];

const Services = () => {
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-primary">Expertise</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We deliver comprehensive digital solutions tailored to your unique needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group relative bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--tech-primary)/0.2)] animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardContent>
              
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-radial opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-lg" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
