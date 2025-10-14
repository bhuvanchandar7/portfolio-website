import { Card } from "@/components/ui/card";
import { Brain, Code, Database, TrendingUp } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Brain,
      title: "Machine Learning",
      description: "Deep learning, neural networks, and predictive modeling",
    },
    {
      icon: Database,
      title: "Data Analytics",
      description: "Statistical analysis and data-driven decision making",
    },
    {
      icon: Code,
      title: "Full-Stack Dev",
      description: "Building scalable applications with modern frameworks",
    },
    {
      icon: TrendingUp,
      title: "Research",
      description: "(soon)",
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
              with a passion for building intelligent systems that solve real-world problems.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Currently working as an <span className="text-secondary font-semibold">Undergraduate Research Assistant</span> in 
              the Renewable Thermal Energy Lab, where I've achieved R² = 0.98 accuracy in thermal storage prediction using 
              multi-head attention LSTM architectures.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With a <span className="text-primary font-semibold">3.8 GPA</span>, I combine strong academic performance with 
              practical experience in machine learning, data analytics, and full-stack development.
            </p>
            <div className="flex gap-4 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">3.8</div>
                <div className="text-sm text-muted-foreground">GPA</div>
              </div>
              <div className="w-px bg-border" />
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">2027</div>
                <div className="text-sm text-muted-foreground">Expected Grad</div>
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
