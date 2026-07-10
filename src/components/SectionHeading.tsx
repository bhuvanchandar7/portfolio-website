type SectionHeadingProps = {
  index: string;
  title: string;
  note?: string;
};

const SectionHeading = ({ index, title, note }: SectionHeadingProps) => (
  <div className="mb-12 flex items-stretch border border-line font-mono">
    <span className="flex items-center border-r border-line bg-panel px-4 py-3 text-xs text-signal">
      LAYER.{index}
    </span>
    <h2 className="flex items-center px-4 py-3 font-sans text-lg font-bold uppercase tracking-[0.25em] md:text-xl">
      {title}
    </h2>
    {note && (
      <span className="ml-auto hidden items-center border-l border-line px-4 text-[10px] uppercase tracking-[0.2em] text-dim md:flex">
        {note}
      </span>
    )}
  </div>
);

export default SectionHeading;
