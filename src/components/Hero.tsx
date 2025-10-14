import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full gradient-bg opacity-20 blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full gradient-bg opacity-20 blur-3xl animate-float" style={{ animationDelay: "3s" }} />
      </div>

      <div className="max-w-5xl w-full text-center relative z-10 animate-slide-up">
        <div className="mb-6 inline-block">
          <span className="px-4 py-2 rounded-full glass-card text-sm font-mono text-secondary">
            👋 Available for opportunities
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
          Hi, I'm{" "}
          <span className="gradient-text text-glow">Bhuvan</span>
        </h1>

        <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8 font-light">
          ML Engineer & Computer Science Student
        </p>

        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
          Designing intelligent systems through predictive modeling, deep learning, and data-driven innovation. 
          Transforming complex data into scalable insights at <span className="text-secondary font-semibold">University of Alberta</span>.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Button
            onClick={() => scrollToSection("projects")}
            size="lg"
            className="gradient-bg text-white font-semibold hover:opacity-90 transition-opacity"
          >
            View My Work
          </Button>
          <Button
            onClick={() => scrollToSection("contact")}
            variant="outline"
            size="lg"
            className="border-primary/30 hover:border-primary hover:bg-primary/10"
          >
            Get In Touch
          </Button>
        </div>

        <div className="flex justify-center gap-6">
          <a
            href="https://github.com/bhuvanveeravalli"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-secondary transition-colors"
            aria-label="GitHub Profile"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com/in/bhuvana-chandar-veeravalli-8431362a7"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:bhuvanac@ualberta.ca"
            className="text-muted-foreground hover:text-secondary transition-colors"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>

        <button
          onClick={() => scrollToSection("about")}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-secondary transition-colors animate-bounce"
          aria-label="Scroll to About Section"
        >
          <ArrowDown className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
