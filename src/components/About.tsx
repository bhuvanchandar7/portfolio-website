import { Card } from "@/components/ui/card";
import { Brain, Code, Database, TrendingUp } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Database,
      title: "Backend Systems",
      description: "Database design, APIs, and scalable architecture",
    },
    {
      icon: Brain,
      title: "Machine Learning",
      description: "Deep learning, neural networks, and predictive modeling",
    },
    {
      icon: Code,
      title: "Full-Stack Dev",
      description: "Building end-to-end applications with modern tech",
    },
    {
      icon: TrendingUp,
      title: "Research",
      description: "Publishing work in thermal energy optimization (soon)",
    },
  ];

  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 gradient-bg mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6 animate-slide-up">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a <span className="text-foreground font-semibold">Computer Science student</span> at the University of Alberta 
              specializing in backend development, database architecture, and machine learning systems.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With a <span className="text-primary font-semibold">3.8 GPA</span>, I design scalable backend solutions with expertise in 
              SQL databases, RESTful APIs, and production-ready machine learning deployments.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Currently working as a <span className="text-secondary font-semibold">Research and Teaching Assistant</span> at the University of Alberta, building data pipelines and ML systems for renewable energy optimization.
            </p>
            <div className="flex gap-6 pt-4 items-center justify-evenly w-full max-w-2xl mx-auto">
              <div className="text-center flex-1">
                <div className="text-2xl md:text-3xl font-bold gradient-text">3.8</div>
                <div className="text-xs md:text-sm text-muted-foreground whitespace-nowrap">GPA</div>
              </div>
              <div className="w-px h-12 bg-border flex-shrink-0" />
              <div className="text-center flex-1">
                <div className="text-2xl md:text-3xl font-bold gradient-text">2027</div>
                <div className="text-xs md:text-sm text-muted-foreground whitespace-nowrap">Expected Grad</div>
              </div>
              <div className="w-px h-12 bg-border flex-shrink-0" />
              <div className="text-center flex-1">
                <div className="text-2xl md:text-3xl font-bold gradient-text">NSERC</div>
                <div className="text-xs md:text-sm text-muted-foreground whitespace-nowrap">Awardee</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <Card
                key={index}
                className="glass-card p-6 hover:glow-effect transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <item.icon className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
