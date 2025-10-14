import { Card } from "@/components/ui/card";
import { Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      role: "Undergraduate Research Assistant",
      organization: "Renewable Thermal Energy Lab",
      location: "University of Alberta, Edmonton, AB",
      period: "Jan 2025 – Present",
      achievements: [
        "Achieved R² = 0.98 and MAE < 0.5°C by engineering multi-head attention LSTM for thermal storage prediction",
        "Increased model validation speed by 40% through automated data ingestion and visualization pipelines",
        "Improved diagnostic precision via adaptive error-tracking across 150+ experimental runs",
      ],
    },
    {
      role: "Undergraduate Teaching Assistant",
      organization: "STAT 252: Applied Statistics II",
      location: "University of Alberta, Edmonton, AB",
      period: "Sep 2025 – Present",
      achievements: [
        "Assessed 250+ student submissions with consistent evaluation metrics",
        "Enhanced student understanding of regression and hypothesis testing through one-on-one support",
        "Demonstrated exceptional time management coordinating tutorials under tight academic timelines",
      ],
    },
  ];

  const certifications = [
    {
      title: "Generative AI for Software Development",
      issuer: "DeepLearning.AI",
      date: "Oct 2025",
    },
    {
      title: "Google Cloud Data Analytics Certificate",
      issuer: "Google",
      date: "Sep 2025",
      expires: "Sep 2028",
    },
    {
      title: "Introduction to Data Analytics",
      issuer: "IBM",
      date: "Jul 2025",
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Experience</span> & Certifications
          </h2>
          <div className="w-20 h-1 gradient-bg mx-auto rounded-full" />
        </div>

        <div className="space-y-8 mb-16">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="glass-card p-6 hover:glow-effect transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold mb-1 gradient-text">{exp.role}</h3>
                  <p className="text-lg font-semibold text-foreground mb-2">
                    {exp.organization}
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </span>
                  </div>
                </div>
              </div>

              <ul className="space-y-2">
                {exp.achievements.map((achievement, achIndex) => (
                  <li
                    key={achIndex}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <span className="text-primary mt-1.5">▸</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-6 text-center">
            <span className="gradient-text">Certifications</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className="glass-card p-6 hover:border-primary/50 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h4 className="font-semibold mb-2 text-foreground">{cert.title}</h4>
                <p className="text-sm text-muted-foreground mb-1">{cert.issuer}</p>
                <p className="text-xs text-secondary font-mono">
                  {cert.date}
                  {cert.expires && ` • Expires ${cert.expires}`}
                </p>
              </Card>
            ))}
          </div>
        </div>

        <Card className="glass-card p-8 mt-12 text-center gradient-bg">
          <h3 className="text-2xl font-bold text-white mb-2">🏆 NSERC Award Winner</h3>
          <p className="text-white/90">
            Undergraduate Student Research Award • April 2025
          </p>
        </Card>
      </div>
    </section>
  );
};

export default Experience;
