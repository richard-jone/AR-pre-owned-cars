export default function SectionHeading({eyebrow, title, text, center=false}) {
  return <div className={`${center ? 'text-center mx-auto' : ''} max-w-2xl mb-10`}>
    {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
    <h2 className="section-title text-[#102d53]">{title}</h2>
    {text && <p className="text-slate-500 mt-4 leading-7">{text}</p>}
  </div>
}
