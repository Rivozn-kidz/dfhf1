import { Card, CardContent } from "@/components/ui/card";
import { Instagram, Twitter, Github } from "lucide-react";

const teamMembers = [
  {
    name: "Ridz Coder",
    role: "CEO & Founder",
    image: "https://files.catbox.moe/5lfgp0.jpg?w=400&h=400&fit=crop",
    instagram: "https://instagram.com/Ridz-coder01",
    twitter: "https://x.com/Ridz-coder01",
    github: "https://github.com/Ridz-coder01",
  },
  {
    name: "Kelvin Tech",
    role: "Head of Design",
    image: "https://files.catbox.moe/uw1n4n.jpg?w=400&h=400&fit=crop",
    instagram: "https://linkedin.com/in/rivonz",
    twitter: "https://x.com/rivonz",
    github: "https://github.com/rivonzdev",
  },
  {
    name: "Terri Dev",
    role: "Lead Developer",
    image: "https://files.catbox.moe/e40lb2.jpg?w=400&h=400&fit=crop",
    instagram: "https://instagram.com/verondev",
    twitter: "https://x.com/veron-dev",
    github: "https://github.com/veron-dev",
  },
  {
    name: "King Orman",
    role: "CTO",
    image: "https://files.catbox.moe/wb09ti.jpg?w=400&h=400&fit=crop",
    instagram: "https://www.instagram.com/p/C_rJpCWIVVzbu0srddrU_mnPatKIgvZtvTrDCo0/?igsh=M3lxcGo1NGo2Ym1l",
    twitter: "https://x.com/OKubuya42277",
    github: "https://github.com/Orman87",
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
            A diverse group of innovators passionate about creating exceptional
            digital experiences
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

                  {/* Hover Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Social Icons */}
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {member.instagram && (
                      <a
                        href={member.instagram}
                        target="_blank"
                        className="w-10 h-10 rounded-full bg-card/90 backdrop-blur-sm flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        <Instagram className="w-4 h-4" />
                      </a>
                    )}
                    {member.twitter && (
                      <a
                        href={member.twitter}
                        target="_blank"
                        className="w-10 h-10 rounded-full bg-card/90 backdrop-blur-sm flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        <Twitter className="w-4 h-4" />
                      </a>
                    )}
                    {member.github && (
                      <a
                        href={member.github}
                        target="_blank"
                        className="w-10 h-10 rounded-full bg-card/90 backdrop-blur-sm flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
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