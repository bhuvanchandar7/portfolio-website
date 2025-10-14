import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Core Areas",
      skills: [
        "Predictive Modeling",
        "Deep Learning",
        "Time-Series Forecasting",
        "Data Analytics",
        "Computer Vision",
        "Optimization",
      ],
      gradient: "from-primary to-purple-600",
    },
    {
      title: "Frameworks & Tools",
      skills: [
        "PyTorch",
        "scikit-learn",
        "OpenCV",
        "FastAPI",
        "Spring Boot",
        "Firebase",
        "Docker",
        "Git",
      ],
      gradient: "from-secondary to-blue-600",
    },
    {
      title: "Technical Concepts",
      skills: [
        "Model Evaluation",
        "Residual Analysis",
        "Multi-Target Learning",
        "Statistical Inference",
        "Feature Engineering",
      ],
      gradient: "from-purple-600 to-pink-600",
    },
    {
      title: "Soft Skills",
      skills: [
        "Analytical Thinking",
        "Collaboration",
        "Technical Communication",
        "Agile (Scrum)",
      ],
      gradient: "from-cyan-500 to-secondary",
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Skills</span> & Expertise
          </h2>
          <div className="w-20 h-1 gradient-bg mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="glass-card p-6 hover:glow-effect transition-all duration-300 animate-slide-up border-primary/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-1 h-8 rounded-full bg-gradient-to-b ${category.gradient} shadow-lg`} />
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    variant="secondary"
                    className="bg-primary/20 hover:bg-primary/30 border border-primary/40 text-white transition-all hover:scale-105"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <Card className="glass-card p-6 text-center border-primary/20 hover:border-primary/40 transition-all">
            <h4 className="text-3xl font-bold gradient-text mb-2">3+</h4>
            <p className="text-muted-foreground">Certifications</p>
          </Card>
          <Card className="glass-card p-6 text-center border-primary/20 hover:border-primary/40 transition-all">
            <h4 className="text-3xl font-bold gradient-text mb-2">4+</h4>
            <p className="text-muted-foreground">Major Projects</p>
          </Card>
          <Card className="glass-card p-6 text-center border-primary/20 hover:border-primary/40 transition-all">
            <h4 className="text-3xl font-bold gradient-text mb-2">Research</h4>
            <p className="text-muted-foreground">NSERC Award Winner</p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
