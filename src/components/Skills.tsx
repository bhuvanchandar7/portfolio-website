import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Java", "JavaScript", "Python", "C++", "C", "C#"],
      gradient: "from-violet-500 to-fuchsia-500",
    },
    {
      title: "Frontend Technologies",
      skills: ["ReactJS", "HTML", "CSS", "Tailwind CSS", "Flask"],
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      title: "Backend & APIs",
      skills: ["Spring Boot", "FastAPI", "Node.js", "Express.js", "Django", "REST APIs", "GraphQL", "Microservices", ".NET", "J2EE"],
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      title: "Databases",
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "DynamoDB", "Vector Databases"],
      gradient: "from-amber-500 to-orange-500",
    },
    {
      title: "Cloud & DevOps",
      skills: ["AWS (Lambda, S3, RDS, Cognito, Bedrock)", "Docker", "Kubernetes", "Jenkins", "CI/CD", "GCP", "Git", "GitHub", "Unix/Linux"],
      gradient: "from-sky-500 to-indigo-500",
    },
    {
      title: "AI/ML & GenAI",
      skills: ["PyTorch", "TensorFlow", "LLMs", "RAG", "LangChain", "NLP", "Embeddings", "Model Fine-tuning", "Prompt Engineering", "Claude", "Copilot", "Google Mediapipe"],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Big Data Technologies",
      skills: ["Hadoop (MapReduce)", "Spark", "Kafka", "Data Pipelines"],
      gradient: "from-rose-500 to-red-500",
    },
    {
      title: "Security & Authentication",
      skills: ["OAuth", "JWT", "AWS Cognito", "Secure API Design"],
      gradient: "from-lime-500 to-green-500",
    },
    {
      title: "Software Engineering",
      skills: ["Agile Methodology", "SDLC", "Version Control", "JIRA", "Data Structures", "Algorithms", "A/B Testing", "Performance Tuning", "Site Reliability Engineering"],
      gradient: "from-blue-500 to-cyan-500",
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
            <h4 className="text-3xl font-bold gradient-text mb-2">5+</h4>
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
