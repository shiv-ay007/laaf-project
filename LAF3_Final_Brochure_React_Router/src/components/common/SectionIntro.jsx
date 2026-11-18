export default function SectionIntro({ eyebrow, title, description, align = 'left', className = '' }) {
  const centered = align === 'center';
  return (
    <div className={`${centered ? 'mx-auto text-center' : ''} max-w-[860px] ${className}`}>
      <p className="eyebrow mb-5">{eyebrow}</p>
      <h2 className="heading text-balance">{title}</h2>
      {description && (
        <p className={`mt-6 max-w-[760px] text-[17px] leading-[1.85] text-muted sm:text-[19px] ${centered ? 'mx-auto' : ''}`}>
          {description}
        </p>
      )}
    </div>
  );
}
