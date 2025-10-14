import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "FlightPredict",
      subtitle: "Flight Delay Prediction System",
      description:
        "Achieved >85% accuracy in flight delay predictions using PyTorch MLP trained on integrated BTS and weather datasets. Deployed dual-service architecture with sub-500ms latency.",
      tech: ["Python", "PyTorch", "FastAPI", "Spring Boot", "Docker", "AWS"],
      period: "2025 – Present",
      color: "from-primary to-purple-600",
      github: "https://github.com/Roshan1299/Flight-Delay-Predictor",
    },
    {
      title: "Thermal Energy Prediction",
      subtitle: "Research - LSTM Architecture",
      description:
        "Engineered multi-head attention LSTM achieving R² = 0.98 and MAE < 0.5°C for predicting 10-point thermal storage temperature profiles. Automated validation pipelines across 150+ runs.",
      tech: ["Python", "TensorFlow", "LSTM", "Data Analytics"],
      period: "Jan 2025 – Present",
      color: "from-secondary to-blue-600",
    },
    {
      title: "Android Mood Tracker",
      subtitle: "Mobile Application",
      description:
        "Built offline-first Android app for mood tracking with geolocation and media integration. Implemented Firebase authentication and real-time synchronization for multi-device access.",
      tech: ["Android SDK", "Firebase", "Java"],
      period: "Jan – Apr 2025",
      color: "from-purple-600 to-pink-600",
      github: "https://github.com/cmput301-w25/project-impostersyndrome",
    },
    {
      title: "Ray Tracer",
      subtitle: "3D Graphics Rendering Engine",
      description:
        "Implemented a high-performance ray tracer in C with support for realistic lighting, shadows, reflections, and refractions. Optimized rendering algorithms for complex scenes with multiple objects and light sources.",
      tech: ["C", "Computer Graphics", "Algorithms"],
      period: "2024",
      color: "from-amber-500 to-orange-600",
      github: "https://github.com/bhuvanchandar7/Ray-Tracer",
    },
    {
      title: "Credit Card Fraud Detection",
      subtitle: "Machine Learning Classification",
      description:
        "Improved fraud detection precision by 15% through feature selection and hyperparameter tuning. Optimized binary classifiers for high-volume financial datasets.",
      tech: ["Python", "scikit-learn", "NumPy"],
      period: "Nov 2024 – Jan 2025",
      color: "from-cyan-500 to-secondary",
      github: "https://github.com/bhuvanchandar7/Credit-card-fraud-detection",
    },
    {
      title: "Lane Line Detection",
      subtitle: "Computer Vision System",
      description:
        "Designed real-time lane detection using edge detection and contour mapping. Enhanced processing efficiency by 30% through optimized filtering pipelines.",
      tech: ["Python", "OpenCV", "Computer Vision"],
      period: "Sep – Dec 2024",
      color: "from-pink-600 to-red-600",
      github: "https://github.com/bhuvanchandar7/lane-line-detection",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 gradient-bg mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A showcase of my work in machine learning, data analytics, and software development
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="glass-card p-6 hover:glow-effect transition-all duration-300 group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className={`inline-block px-3 py-1 rounded-full text-xs font-mono mb-3 bg-gradient-to-r ${project.color} text-white`}>
                    {project.period}
                  </div>
                  <h3 className="text-2xl font-bold mb-1 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">{project.subtitle}</p>
                </div>
              </div>

              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <Badge key={techIndex} variant="outline" className="border-primary/30">
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="flex gap-3 pt-2">
                {project.github && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-primary/30 hover:border-primary hover:bg-primary/10"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
