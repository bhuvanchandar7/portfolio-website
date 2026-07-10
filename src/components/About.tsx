import SectionHeading from "@/components/SectionHeading";

const About = () => {
  const highlights = [
    {
      title: "Backend Systems",
      description: "Database design, APIs, and scalable architecture",
    },
    {
      title: "Machine Learning",
      description: "Deep learning, neural networks, and predictive modeling",
    },
    {
      title: "Full-Stack Dev",
      description: "Building end-to-end applications with modern tech",
    },
    {
      title: "Research",
      description: "Publishing work in thermal energy optimization (soon)",
    },
  ];

  const stats = [
    { label: "Cumulative GPA", value: "3.8" },
    { label: "Expected Grad", value: "2027" },
    { label: "Research Award", value: "NSERC" },
  ];

  return (
    <section id="about" className="border-b border-line px-5 py-24 md:px-10">
      <SectionHeading index="01" title="About" note="model.summary()" />

      <div className="grid grid-cols-12 gap-x-8 gap-y-12">
        <div className="col-span-12 space-y-5 lg:col-span-7">
          <p className="text-lg font-light leading-relaxed text-bone/80">
            I'm a <span className="text-bone">Computer Science student</span> at the University
            of Alberta specializing in backend development, database architecture, and machine
            learning systems.
          </p>
          <p className="text-lg font-light leading-relaxed text-bone/70">
            With a <span className="font-mono text-base text-signal">3.8 GPA</span>, I design
            scalable backend solutions with expertise in SQL databases, RESTful APIs, and
            production-ready machine learning deployments.
          </p>
          <p className="text-lg font-light leading-relaxed text-bone/70">
            Currently working as a{" "}
            <span className="text-signal">Research and Teaching Assistant</span> at the
            University of Alberta, building data pipelines and ML systems for renewable energy
            optimization.
          </p>
        </div>

        <div className="col-span-12 lg:col-span-5">
          <div className="grid grid-cols-3 border-l border-t border-line">
            {stats.map((stat, index) => (
              <div key={index} className="border-b border-r border-line bg-panel p-5">
                <div className="font-sans text-2xl font-bold md:text-3xl">{stat.value}</div>
                <div className="mt-1.5 font-mono text-[9px] uppercase tracking-[0.2em] text-dim">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-dim">
            <span className="text-signal">//</span> eval_metrics
          </p>
        </div>

        <div className="col-span-12">
          <div className="grid grid-cols-1 border-l border-t border-line md:grid-cols-2">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="group border-b border-r border-line p-6 transition-colors hover:bg-panel"
              >
                <span className="font-mono text-[10px] tracking-[0.2em] text-signal">
                  CAP.{String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-sans text-xl font-bold uppercase tracking-wide">
                  {item.title}
                </h3>
                <p className="mt-2 font-mono text-xs leading-relaxed text-dim">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
