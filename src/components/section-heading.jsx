export default function SectionHeading({ title, aside }) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-2 border-b border-rule pb-3">
      <h2 className="text-[clamp(28px,3vw,44px)] font-medium uppercase leading-[0.95] tracking-[-0.035em] text-ink">
        {title}
      </h2>
      {aside && <span className="eyebrow">{aside}</span>}
    </div>
  );
}
