import SectionHeading from "@/components/SectionHeading";

const Projects = () => {
  const projects = [
    {
      title: "LAIrner",
      subtitle: "Socratic AI Tutoring Platform | Lead AI Systems Engineer",
      description:
        "Designed a dual-model LLM orchestration pipeline pairing GPT-4o for Socratic reasoning with a zero-shot GPT-4o-mini classifier across 14 domains at sub-200ms latency. Engineered prompt guardrails and an adaptive hint-density feedback loop — an early-stage RLHF-inspired alignment mechanism. Built a stateful Next.js 16 + Prisma + Turso backend that atomically ingests interactions, chat history, and proficiency scores in a single transaction.",
      tech: ["Next.js 16", "GPT-4o", "GPT-4o-mini", "Prisma", "Turso (libSQL)", "Prompt Engineering", "LLM Orchestration"],
      github: "",
      website: "https://la-irner.vercel.app",
    },
    {
      title: "IntelliDocs",
      subtitle: "AI-Powered Document Intelligence Platform",
      description:
        "Engineered a production-ready RAG system achieving <3s query latency and >85% answer relevance. Built hybrid retrieval combining vector similarity search with BM25 keyword matching, fine-tuned Mistral-7B with LoRA for domain-specific responses, and implemented automatic citation generation. Designed scalable architecture handling 100+ concurrent users with comprehensive monitoring via Prometheus and Grafana.",
      tech: ["Python", "FastAPI", "React", "FAISS", "Mistral-7B", "Docker", "Kubernetes"],
      github: "https://github.com/bhuvanchandar7/IntelliDocs",
    },
    {
      title: "SocialDistribution",
      subtitle: "Distributed Social Networking Platform",
      description:
        "Architected a federated social networking platform enabling cross-node communication via RESTful APIs. Implemented inbox-based activity distribution, real-time content aggregation across 5+ federated nodes, and GitHub integration for content import. Built with scalable microservices architecture supporting authentication, follows, comments, and likes across distributed systems.",
      tech: ["Django", "REST API", "PostgreSQL", "Federation", "ActivityPub-inspired", "Docker"],
      github: "https://github.com/bhuvanchandar7/SocialDistribution",
    },
    {
      title: "FlightPredict",
      subtitle: "Flight Delay Prediction System",
      description:
        "Achieved >85% accuracy in flight delay predictions using PyTorch MLP trained on integrated BTS and weather datasets. Deployed dual-service architecture with sub-500ms latency.",
      tech: ["Python", "PyTorch", "FastAPI", "Spring Boot", "Docker", "AWS"],
      github: "https://github.com/Roshan1299/Flight-Delay-Predictor",
    },
    {
      title: "Android Mood Tracker",
      subtitle: "Mobile Application",
      description:
        "Built offline-first Android app for mood tracking with geolocation and media integration. Implemented Firebase authentication and real-time synchronization for multi-device access.",
      tech: ["Android SDK", "Firebase", "Java"],
      github: "https://github.com/cmput301-w25/project-impostersyndrome",
    },
    {
      title: "Twitter Clone",
      subtitle: "Backend-Focused Social Media Platform",
      description:
        "Built modular backend architecture with relational database design using raw SQL. Implemented authentication, tweet composition, timeline generation, hashtag extraction, and favorite lists with optimized query performance.",
      tech: ["Python", "SQLite", "SQL", "Database Design", "Backend Architecture"],
      github: "https://github.com/bhuvanchandar7/Twitter-Clone",
    },
    {
      title: "Ray Tracer",
      subtitle: "3D Graphics Rendering Engine",
      description:
        "Implemented a high-performance ray tracer in C with support for realistic lighting, shadows, reflections, and refractions. Optimized rendering algorithms for complex scenes with multiple objects and light sources.",
      tech: ["C", "Computer Graphics", "Algorithms"],
      github: "https://github.com/bhuvanchandar7/Ray-Tracer",
    },
    {
      title: "Credit Card Fraud Detection",
      subtitle: "Machine Learning Classification",
      description:
        "Improved fraud detection precision by 15% through feature selection and hyperparameter tuning. Optimized binary classifiers for high-volume financial datasets.",
      tech: ["Python", "scikit-learn", "NumPy"],
      github: "https://github.com/bhuvanchandar7/Credit-card-fraud-detection",
    },
    {
      title: "Lane Line Detection",
      subtitle: "Computer Vision System",
      description:
        "Designed real-time lane detection using edge detection and contour mapping. Enhanced processing efficiency by 30% through optimized filtering pipelines.",
      tech: ["Python", "OpenCV", "Computer Vision"],
      github: "https://github.com/bhuvanchandar7/lane-line-detection",
    },
  ];

  return (
    <section id="projects" className="border-b border-line px-5 py-24 md:px-10">
      <SectionHeading index="04" title="Projects" note="ls ./outputs --sort=impact" />

      <div className="grid grid-cols-1 border-l border-t border-line md:grid-cols-2">
        {projects.map((project, index) => (
          <article
            key={index}
            className={`group flex flex-col border-b border-r border-line p-6 transition-colors hover:bg-panel md:p-8 ${
              index === 0 ? "md:col-span-2" : ""
            }`}
          >
            <div className="flex items-baseline justify-between font-mono text-[10px] uppercase tracking-[0.2em]">
              <span className="text-signal">PRJ.{String(index + 1).padStart(2, "0")}</span>
              {index === 0 && <span className="text-dim">featured</span>}
            </div>
            <h3
              className={`mt-4 font-sans font-bold uppercase tracking-tight transition-colors group-hover:text-signal ${
                index === 0 ? "text-3xl md:text-5xl" : "text-2xl md:text-3xl"
              }`}
            >
              {project.title}
            </h3>
            <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.15em] text-dim">
              {project.subtitle}
            </p>
            <p
              className={`mt-4 flex-1 text-sm font-light leading-relaxed text-bone/70 ${
                index === 0 ? "max-w-3xl" : ""
              }`}
            >
              {project.description}
            </p>
            <p className="mt-4 font-mono text-[11px] leading-relaxed text-dim">
              {project.tech.map((tech) => `[${tech}]`).join(" ")}
            </p>
            <div className="mt-5 flex gap-3 font-mono text-[11px] uppercase tracking-[0.15em]">
              {project.website && (
                <a
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-line px-3 py-1.5 transition-colors hover:border-signal hover:text-signal"
                >
                  Live_Demo ↗
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-line px-3 py-1.5 transition-colors hover:border-signal hover:text-signal"
                >
                  Source ↗
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
