import SectionHeading from "@/components/SectionHeading";

const Experience = () => {
  const experiences = [
    {
      role: "FES Summer Intern",
      organization: "Renewable Thermal Energy Lab — URI Stipend Awardee",
      location: "University of Alberta, Edmonton, AB",
      period: "May 2026 – Aug 2026",
      achievements: [
        "Awarded URI Stipend funded by Future Energy Systems for the project ‘Predicting Three-Dimensional Thermal Dynamics in Molten Salt Energy Storage Using Infrared Imaging and Spatiotemporal Deep Learning’",
        "Developing spatiotemporal deep learning models on infrared imaging data to forecast 3D thermal dynamics in molten salt storage systems",
        "Building end-to-end data pipelines for IR sensor ingestion, preprocessing, and model evaluation under Dr. Taha Manzoor",
      ],
    },
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
      title: "URI Stipend Award (Future Energy Systems)",
      issuer: "University of Alberta — Undergraduate Research Initiative",
      date: "Mar 2026",
    },
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
    <section id="experience" className="border-b border-line px-5 py-24 md:px-10">
      <SectionHeading index="03" title="Experience" note="training_history.log" />

      <div className="divide-y divide-line border border-line">
        {experiences.map((exp, index) => (
          <article key={index} className="p-6 transition-colors hover:bg-panel md:p-8">
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 font-mono text-[11px] uppercase tracking-[0.15em]">
              <span className="text-signal">
                EXP.{String(index + 1).padStart(2, "0")} — {exp.period}
              </span>
              <span className="text-dim">{exp.location}</span>
            </div>
            <h3 className="mt-4 font-sans text-2xl font-bold uppercase tracking-tight md:text-3xl">
              {exp.role}
            </h3>
            <p className="mt-1 font-mono text-xs text-dim">{exp.organization}</p>
            <ul className="mt-5 space-y-2.5">
              {exp.achievements.map((achievement, achIndex) => (
                <li
                  key={achIndex}
                  className="flex gap-3 font-mono text-[13px] leading-relaxed text-bone/75"
                >
                  <span className="shrink-0 text-signal">&gt;</span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="mt-12">
        <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-dim">
          <span className="text-signal">//</span> certifications & awards
        </p>
        <div className="grid grid-cols-1 border-l border-t border-line sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="flex min-h-[10rem] flex-col border-b border-r border-line p-5 transition-colors hover:bg-panel"
            >
              <span className="font-mono text-[10px] tracking-[0.2em] text-signal">
                CRT.{String(index + 1).padStart(2, "0")}
              </span>
              <h4 className="mt-3 flex-1 font-sans text-base font-bold leading-snug">
                {cert.title}
              </h4>
              <p className="mt-3 font-mono text-[11px] text-dim">{cert.issuer}</p>
              <p className="mt-1.5 font-mono text-[10px] uppercase tracking-widest text-dim">
                {cert.date}
                {cert.expires && ` — exp. ${cert.expires}`}
              </p>
            </div>
          ))}
        </div>
      </div>

      <aside className="mt-8 flex flex-col justify-between gap-2 border border-signal bg-signal px-6 py-6 text-coal md:flex-row md:items-center md:px-10">
        <h3 className="font-sans text-xl font-bold uppercase tracking-[0.08em] md:text-2xl">
          ★ NSERC Award Winner
        </h3>
        <p className="font-mono text-[11px] uppercase tracking-[0.2em]">
          Undergraduate Student Research Award — April 2025
        </p>
      </aside>
    </section>
  );
};

export default Experience;
