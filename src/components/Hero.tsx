import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-background">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
        {/* Network Pattern Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
        <div className="absolute inset-0" style={{ 
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--tech-border)) 1px, transparent 0)`,
          backgroundSize: '50px 50px',
          opacity: 0.3
        }} />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-6 py-20 mx-auto">
        <div className="max-w-4xl animate-fade-in-up">
          <div className="inline-block mb-4 px-4 py-2 bg-card/50 backdrop-blur-sm border border-primary/30 rounded-full">
            <span className="text-sm text-primary font-medium">Welcome to the Future</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Transforming Ideas Into{" "}
            <span className="text-primary animate-glow-pulse inline-block">
              Digital Reality
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
            At Mawrld Tech Inc, we craft cutting-edge digital solutions that push the boundaries 
            of innovation. From immersive 3D experiences to revolutionary software, we turn your 
            vision into reality.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground group"
            >
              Get Started
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary/30 hover:bg-primary/10 group"
            >
              <Play className="mr-2 w-4 h-4" />
              Watch Demo
            </Button>
          </div>
        </div>
      </div>

      {/* Glow Effect */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-float" />
    </section>
  );
};

export default Hero;
