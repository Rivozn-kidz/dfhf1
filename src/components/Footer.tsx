import { Mail, MapPin, Phone, Youtube, Instagram, Facebook, Linkedin, Twitter, Github } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Add your real social profile links here
  const socialLinks = [
    { icon: Youtube, url: "https://youtube.com/@mawrldtechinc" },
    { icon: Instagram, url: "https://instagram.com/mawrldtechinc" },
    { icon: Facebook, url: "https://facebook.com/mawrldtechinc" },
    { icon: Linkedin, url: "https://linkedin.com/company/mawrldtechinc" },
    { icon: Twitter, url: "https://x.com/mawrldtechinc" },
    { icon: Github, url: "https://github.com/mawrldtechinc" },
  ];

  return (
    <footer className="relative border-t border-border bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">

          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">
              <span>Mawrld</span>{" "}
              <span className="text-primary">Tech Inc</span>
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
            <ul className="space-y-2">

              <li>
                <a
                  href="/services/web-development"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Web Development
                </a>
              </li>

              <li>
                <a
                  href="/services/3d-solutions"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  3D Solutions
                </a>
              </li>

              <li>
                <a
                  href="/services/ui-ux-design"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  UI/UX Design
                </a>
              </li>

              <li>
                <a
                  href="/services/digital-innovation"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Digital Innovation
                </a>
              </li>

              <li>
                <a
                  href="/services/consulting"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Consulting
                </a>
              </li>

            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                <span>Katosi, Mukono, Uganda</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                <span>+256742634089</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                <span>mawrldtechinc@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Mawrld Tech Inc. All rights reserved.
            </p>

            <div className="flex gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
    </footer>
  );
};

export default Footer;
