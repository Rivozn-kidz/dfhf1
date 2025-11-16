import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Twitter, Github } from "lucide-react";

const teamMembers = [
  {
    name: "Alex Rivera",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
  },
  {
    name: "Sarah Chen",
    role: "Head of Design",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
  },
  {
    name: "Marcus Johnson",
    role: "Lead Developer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
  },
  {
    name: "Emily Foster",
    role: "CTO",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
  },
];

const Team = () => {
  return (
    <section className="py-20 px-6 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Meet Our <span className="text-primary">Team</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A diverse group of innovators passionate about creating exceptional digital experiences
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="group relative bg-card border-border hover:border-primary/50 transition-all duration-300 overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden aspect-square">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Social Links */}
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-card/90 backdrop-blur-sm flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-card/90 backdrop-blur-sm flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Twitter className="w-4 h-4" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-card/90 backdrop-blur-sm flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary text-sm">{member.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
