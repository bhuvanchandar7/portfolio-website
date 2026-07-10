import SectionHeading from "@/components/SectionHeading";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Java", "JavaScript", "Python", "C++", "C", "C#"],
    },
    {
      title: "Frontend Technologies",
      skills: ["ReactJS", "HTML", "CSS", "Tailwind CSS", "Flask"],
    },
    {
      title: "Backend & APIs",
      skills: ["Spring Boot", "FastAPI", "Node.js", "Express.js", "Django", "REST APIs", "GraphQL", "Microservices", ".NET", "J2EE"],
    },
    {
      title: "Databases",
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "DynamoDB", "Vector Databases"],
    },
    {
      title: "Cloud & DevOps",
      skills: ["AWS (Lambda, S3, RDS, Cognito, Bedrock)", "Docker", "Kubernetes", "Jenkins", "CI/CD", "GCP", "Git", "GitHub", "Unix/Linux"],
    },
    {
      title: "AI/ML & GenAI",
      skills: ["PyTorch", "TensorFlow", "LLMs", "RAG", "LangChain", "NLP", "Embeddings", "Model Fine-tuning", "Prompt Engineering", "Claude", "Copilot", "Google Mediapipe"],
    },
    {
      title: "Big Data Technologies",
      skills: ["Hadoop (MapReduce)", "Spark", "Kafka", "Data Pipelines"],
    },
    {
      title: "Security & Authentication",
      skills: ["OAuth", "JWT", "AWS Cognito", "Secure API Design"],
    },
    {
      title: "Software Engineering",
      skills: ["Agile Methodology", "SDLC", "Version Control", "JIRA", "Data Structures", "Algorithms", "A/B Testing", "Performance Tuning", "Site Reliability Engineering"],
    },
  ];

  const stats = [
    { value: "3+", label: "Certifications" },
    { value: "5+", label: "Major Projects" },
    { value: "NSERC", label: "Research Award" },
  ];

  return (
    <section id="skills" className="border-b border-line px-5 py-24 md:px-10">
      <SectionHeading index="02" title="Skills" note="feature_space --list" />

      <div className="border border-line">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className="grid grid-cols-12 gap-y-3 border-b border-line p-5 transition-colors last:border-b-0 hover:bg-panel md:gap-x-6"
          >
            <div className="col-span-12 flex flex-wrap items-baseline gap-x-3 md:col-span-4">
              <span className="font-mono text-[10px] text-signal">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="font-sans text-base font-bold uppercase tracking-[0.12em]">
                {category.title}
              </h3>
              <span className="font-mono text-[10px] text-dim">
                ({String(category.skills.length).padStart(2, "0")})
              </span>
            </div>
            <div className="col-span-12 flex flex-wrap gap-1.5 md:col-span-8">
              {category.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="cursor-default border border-line px-2.5 py-1 font-mono text-[11px] text-dim transition-colors hover:border-signal hover:text-signal"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-3 border-l border-t border-line">
        {stats.map((stat, index) => (
          <div key={index} className="border-b border-r border-line bg-panel p-6 text-center md:p-8">
            <div className="font-sans text-3xl font-bold md:text-4xl">{stat.value}</div>
            <div className="mt-2 font-mono text-[9px] uppercase tracking-[0.2em] text-dim md:text-[10px]">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
