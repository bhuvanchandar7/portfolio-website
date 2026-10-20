import SectionHeading from "@/components/SectionHeading";

const Publications = () => {
  const publications = [
    {
      type: "Preprint",
      venue: "SSRN",
      date: "Jul 2026",
      title:
        "AI-Augmented Models for Thermofluid Behaviour Prediction in Cold-Climate-Specific Molten Salt Volumetric Solar Thermal Receivers with Integrated Thermal Energy Storage",
      authors: [
        { name: "R. Banisetti", equal: true },
        { name: "B. Veeravalli", equal: true, me: true },
        { name: "M. Keshiro" },
        { name: "M. T. Manzoor" },
      ],
      summary:
        "Two physics-guided models for high-temperature molten salt receivers: a Physics-Guided Neural Network (PGNN) that predicts spatiotemporal temperatures with MAE below 1.0°C, and a Physics-Guided LSTM (PG-LSTM) that forecasts vertical temperature profiles in real time with errors below 2.0°C over 60–300 s. Both use an energy-conservation loss to keep predictions physically plausible.",
      tags: ["Physics-Guided ML", "LSTM Forecasting", "Solar Thermal", "Molten Salts"],
      url: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=7123981",
    },
  ];

  return (
    <section id="publications" className="border-b border-line px-5 py-24 md:px-10">
      <SectionHeading index="04" title="Publications" note="papers.export(format='bib')" />

      <div className="divide-y divide-line border border-line">
        {publications.map((pub, index) => (
          <article key={index} className="p-6 transition-colors hover:bg-panel md:p-8">
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 font-mono text-[11px] uppercase tracking-[0.15em]">
              <span className="text-signal">
                PUB.{String(index + 1).padStart(2, "0")} — {pub.type} · {pub.venue}
              </span>
              <span className="text-dim">{pub.date}</span>
            </div>
            <h3 className="mt-4 font-sans text-xl font-bold leading-snug md:text-2xl">
              <a
                href={pub.url}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-signal"
              >
                {pub.title}
              </a>
            </h3>
            <p className="mt-3 font-mono text-xs text-dim">
              {pub.authors.map((a, i) => (
                <span key={i}>
                  <span className={a.me ? "font-bold text-bone" : undefined}>{a.name}</span>
                  {a.equal && <sup className="text-signal">*</sup>}
                  {i < pub.authors.length - 1 && ", "}
                </span>
              ))}
              <span className="ml-3 text-[10px]">
                <span className="text-signal">*</span> equal contribution
              </span>
            </p>
            <p className="mt-5 flex gap-3 font-mono text-[13px] leading-relaxed text-bone/75">
              <span className="shrink-0 text-signal">&gt;</span>
              <span>{pub.summary}</span>
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-2">
              {pub.tags.map((tag) => (
                <span
                  key={tag}
                  className="border border-line px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-dim"
                >
                  {tag}
                </span>
              ))}
              <a
                href={pub.url}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto border border-signal px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.15em] text-signal transition-colors hover:bg-signal hover:text-coal"
              >
                Read on SSRN ↗
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Publications;
