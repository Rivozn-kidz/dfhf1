import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ["Services", "Portfolio", "Team", "About", "Contact"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="text-2xl font-bold">
            <span className="text-foreground">mawrld</span>{" "}
            <span className="text-primary">tech</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {link}
              </a>
            ))}
            <Button className="bg-primary hover:bg-primary/90">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 animate-fade-in">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="block text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                {link}
              </a>
            ))}
            <Button className="w-full bg-primary hover:bg-primary/90 mt-4">
              Get Started
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
