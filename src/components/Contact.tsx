import SectionHeading from "@/components/SectionHeading";

const Contact = () => {
  const contactInfo = [
    {
      label: "Email",
      value: "bhuvanac@ualberta.ca",
      href: "mailto:bhuvanac@ualberta.ca",
    },
    {
      label: "Phone",
      value: "+1 (780) 884-5180",
      href: "tel:+17808845180",
    },
    {
      label: "Location",
      value: "Edmonton, Alberta",
      href: null,
    },
    {
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://linkedin.com/in/bhuvana-chandar-veeravalli-8431362a7",
    },
  ];

  return (
    <section id="contact" className="px-5 pt-24 md:px-10">
      <SectionHeading index="05" title="Contact" note="model.predict(collab)" />

      <div className="grid grid-cols-12 gap-x-8 gap-y-12 pb-24">
        <div className="col-span-12 lg:col-span-7">
          <h3 className="font-sans text-4xl font-bold uppercase leading-[0.95] tracking-tight md:text-6xl">
            Ready to
            <br />
            collaborate
            <span className="text-signal">_</span>
          </h3>
          <p className="mt-8 max-w-md font-mono text-[13px] leading-relaxed text-dim">
            Open to opportunities in machine learning, data science, and software development.
            Whether it's a research opportunity, internship, or project collaboration, I'd love
            to hear from you.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="mailto:bhuvanac@ualberta.ca"
              className="border border-bone bg-bone px-6 py-3 font-mono text-xs uppercase tracking-[0.15em] text-coal transition-colors hover:border-signal hover:bg-signal"
            >
              [ Send_Email ]
            </a>
            <button
              onClick={() => window.open("https://linkedin.com/in/bhuvana-chandar-veeravalli-8431362a7", "_blank")}
              className="border border-line px-6 py-3 font-mono text-xs uppercase tracking-[0.15em] transition-colors hover:border-signal hover:text-signal"
            >
              [ LinkedIn ↗ ]
            </button>
            <button
              onClick={() => window.open("https://github.com/bhuvanchandar7", "_blank")}
              className="border border-line px-6 py-3 font-mono text-xs uppercase tracking-[0.15em] transition-colors hover:border-signal hover:text-signal"
            >
              [ GitHub ↗ ]
            </button>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-5">
          <dl className="divide-y divide-line border border-line font-mono">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 px-4 py-4"
              >
                <dt className="text-[10px] uppercase tracking-[0.25em] text-dim">{item.label}</dt>
                <dd className="text-sm">
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="break-all transition-colors hover:text-signal"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p>{item.value}</p>
                  )}
                </dd>
              </div>
            ))}
          </dl>
          <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-dim">
            <span className="text-signal">//</span> channels.available
          </p>
        </div>
      </div>

      <footer className="flex flex-col items-center justify-between gap-2 border-t border-line py-6 font-mono text-[10px] uppercase tracking-[0.2em] text-dim md:flex-row">
        <p>© {new Date().getFullYear()} Bhuvan Veeravalli</p>
        <p>Set in Space Grotesk & JetBrains Mono</p>
        <p>Built with React & Tailwind — EOF</p>
      </footer>
    </section>
  );
};

export default Contact;
