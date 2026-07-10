import profileImage from "@/assets/profile.jpeg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const readout = [
    { key: "ROLE", value: "Backend Engineer" },
    { key: "FOCUS", value: "Machine Learning" },
    { key: "EDU", value: "University of Alberta" },
    { key: "LOC", value: "Edmonton, AB" },
    { key: "BEST R²", value: "0.98 — attn-LSTM" },
    { key: "MAE", value: "< 0.5 °C" },
  ];

  return (
    <section className="relative flex min-h-screen flex-col border-b border-line px-5 md:px-10">
      {/* Status bar */}
      <header className="flex items-center justify-between gap-4 border-b border-line py-3 font-mono text-[10px] uppercase tracking-[0.2em] md:text-[11px]">
        <span>bhuvan@ualberta:~$ ./train --portfolio</span>
        <span className="hidden text-dim md:inline">model: bhuvan-v2 · ckpt: latest</span>
        <span className="flex items-center gap-2 text-signal">
          <span className="h-1.5 w-1.5 bg-signal" aria-hidden="true" />
          Open_to_work
        </span>
      </header>

      <div className="grid flex-1 grid-cols-12 items-center gap-x-8 py-14 md:py-10">
        <div className="col-span-12 lg:col-span-8">
          <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.3em] text-dim">
            <span className="text-signal">//</span> Backend Engineer & ML Developer
          </p>
          <h1 className="font-sans text-[11vw] font-bold uppercase leading-[0.9] tracking-tighter lg:text-[6.75rem] xl:text-[8rem]">
            Bhuvan
            <br />
            <span className="text-dim">Veeravalli</span>
            <span className="text-signal">.</span>
          </h1>
          <p className="mt-8 max-w-xl text-base font-light leading-relaxed text-bone/70 md:text-lg">
            Building scalable backend systems and intelligent solutions through database design,
            API development, and machine learning — transforming complex data into
            production-ready applications at the{" "}
            <span className="text-signal">University of Alberta</span>.
          </p>

          <p className="mt-10 font-mono text-[10px] uppercase tracking-[0.2em] text-dim">
            <span className="text-signal">//</span> config.yaml
          </p>
          <dl className="mt-2 grid max-w-xl grid-cols-2 border-l border-t border-line font-mono md:grid-cols-3">
            {readout.map((item, index) => (
              <div key={index} className="border-b border-r border-line px-4 py-3">
                <dt className="text-[9px] uppercase tracking-[0.25em] text-dim">{item.key}</dt>
                <dd className="mt-1 text-xs uppercase tracking-[0.1em]">{item.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-10 flex flex-wrap gap-3">
            <button
              onClick={() => scrollToSection("projects")}
              className="border border-bone bg-bone px-6 py-3 font-mono text-xs uppercase tracking-[0.15em] text-coal transition-colors hover:border-signal hover:bg-signal"
            >
              [ View_Work ]
            </button>
            <button
              onClick={() => window.open("/Bhuvan_Veeravalli_Resume.pdf", "_blank")}
              className="border border-line px-6 py-3 font-mono text-xs uppercase tracking-[0.15em] transition-colors hover:border-signal hover:text-signal"
            >
              [ Resume.pdf ↗ ]
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="border border-line px-6 py-3 font-mono text-xs uppercase tracking-[0.15em] text-dim transition-colors hover:border-bone hover:text-bone"
            >
              [ Contact ]
            </button>
          </div>
        </div>

        <div className="col-span-12 mt-14 lg:col-span-4 lg:mt-0">
          <figure className="mx-auto max-w-xs border border-line bg-panel lg:ml-auto lg:mr-0">
            <div className="flex items-center justify-between border-b border-line px-3 py-2 font-mono text-[10px] uppercase tracking-widest text-dim">
              <span>input_tensor.jpeg</span>
              <span className="flex items-center gap-1.5 text-signal">
                <span className="h-1 w-1 bg-signal" aria-hidden="true" />
                live
              </span>
            </div>
            <div className="relative">
              <img
                src={profileImage}
                alt="Bhuvan Chandar Veeravalli"
                className="aspect-[4/5] w-full object-cover grayscale"
              />
              <div className="scanlines pointer-events-none absolute inset-0" aria-hidden="true" />
            </div>
            <figcaption className="flex justify-between border-t border-line px-3 py-2 font-mono text-[10px] uppercase tracking-widest text-dim">
              <span>Subject: B. Veeravalli</span>
              <span>conf: 0.99</span>
            </figcaption>
          </figure>
        </div>
      </div>

      {/* Bottom rail: channels + scroll cue */}
      <div className="flex items-center justify-between gap-4 border-t border-line py-4">
        <nav className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-[11px] uppercase tracking-[0.18em]">
          <a
            href="https://github.com/bhuvanchandar7"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="transition-colors hover:text-signal"
          >
            GitHub ↗
          </a>
          <a
            href="https://linkedin.com/in/bhuvana-chandar-veeravalli-8431362a7"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="transition-colors hover:text-signal"
          >
            LinkedIn ↗
          </a>
          <a
            href="https://www.instagram.com/bhuvanchandar7"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram Profile"
            className="transition-colors hover:text-signal"
          >
            Instagram ↗
          </a>
          <a
            href="mailto:bhuvanac@ualberta.ca"
            aria-label="Email"
            className="transition-colors hover:text-signal"
          >
            Email ↗
          </a>
        </nav>
        <button
          onClick={() => scrollToSection("about")}
          aria-label="Scroll to About Section"
          className="shrink-0 font-mono text-[11px] uppercase tracking-[0.18em] text-dim transition-colors hover:text-signal"
        >
          Forward_pass ▼
        </button>
      </div>
    </section>
  );
};

export default Hero;
