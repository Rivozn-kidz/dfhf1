import { 
  Mail, 
  MapPin, 
  Phone, 
  Youtube, 
  Instagram, 
  Facebook, 
  Linkedin, 
  Twitter, 
  Github 
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Youtube, url: "https://youtube.com/@sukodevscrew" },
    { icon: Instagram, url: "https://instagram.com/sukodevscrew" },
    { icon: Facebook, url: "https://facebook.com/sukodevscrew" },
    { icon: Linkedin, url: "https://linkedin.com/company/sukodevscrew" },
    { icon: Twitter, url: "https://x.com/sukodevscrew" },
    { icon: Github, url: "https://github.com/sukodevscrew" },
  ];

  return (
    <footer className="relative border-t border-border bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-12">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">

          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">
              <span>Suko</span>{" "}
              <span className="text-primary">Devs Crew</span>
            </h3>

            <p className="text-muted-foreground text-sm leading-relaxed">
              Transforming ideas into digital reality through innovative technology solutions and cutting-edge design.
            </p>

            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, url }, idx) => (
                <a
                  key={idx}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Web Development</li>
              <li>3D Solutions</li>
              <li>UI/UX Design</li>
              <li>Digital Innovation</li>
              <li>Consulting</li>
              <li>Api Development</li>
              <li>Cloud Solutions</li>
              <li>Cyber Security</li>
              <li>Mobile Apps</li>
              <li>Data Analytics</li>
              <li>Tg & Wa Bot Development</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 text-primary" />
                <span>Kampala, Uganda</span>
              </li>

              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary" />
                <span>sukodevscrew@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            ©2024 - {currentYear} Suko Devs Crew . All rights reserved.
          </p>

        </div>
      </div>

      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
    </footer>
  );
};

export default Footer;