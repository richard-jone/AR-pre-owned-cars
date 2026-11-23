import { CarFront, Handshake, RefreshCw, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading'
import { business, whatsappLink } from '../data'
import pageHeroImage from '../assets/services-cars.png'
const items = [
 [CarFront,"Buying a pre-owned car","Tell us what type of car you're looking for and speak with us about available options and the next steps."],
 [Handshake,'Selling your car','Thinking of selling your current vehicle? Contact us to discuss the car and understand how to proceed.'],
 [RefreshCw,'Exchanging your car','Ready for a change? Ask our team about exchanging your existing car for another pre-owned vehicle.']
]
export default function Services() {
 return <><section className="relative overflow-hidden bg-[#0b203b] text-white min-h-[650px] lg:min-h-[690px] flex items-center">
  <div className="absolute inset-0 hero-grid opacity-40"/>
  <div className="absolute -right-24 top-4 w-[620px] h-[620px] rounded-full border border-white/10 hero-orbit"/>
  <div className="absolute -right-5 top-24 w-[470px] h-[470px] rounded-full border border-white/10"/>
  <div className="absolute inset-y-0 right-0 w-[65%] hero-glow"/>
  <div className="container-width relative z-10 grid lg:grid-cols-[.92fr_1.08fr] gap-2 items-center py-16 md:py-20">
    <div className="max-w-xl relative z-20 animate-rise">
      <p className="eyebrow mb-5">How we can help</p>
      <h1 className="text-[clamp(2.8rem,6vw,5.25rem)] leading-[1.02] tracking-[-.06em] font-extrabold">Our Services</h1>
      <p className="text-slate-200 text-lg leading-8 mt-6 max-w-lg">Buying, selling or exchanging — find the right next step with AR Pre-Owned Cars.</p>
    </div>
    <div className="relative min-h-[300px] md:min-h-[470px] flex items-center justify-center lg:justify-end mt-5 lg:mt-0">
      <div className="absolute w-[88%] aspect-square max-w-[520px] rounded-full border border-white/10 bg-gradient-to-br from-[#1d5b89]/25 to-transparent hero-orbit"/>
      <div className="absolute w-[72%] aspect-square max-w-[420px] rounded-full bg-[#f39a1f]/10 blur-3xl"/>
      <img src={pageHeroImage} alt="" aria-hidden="true" className="page-hero-art relative z-10 w-[112%] max-w-[700px] object-contain"/>
    </div>
  </div>
  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent opacity-80"/>
</section>
 <section className="container-width py-20"><SectionHeading eyebrow="Buy • Sell • Exchange" title="Car services built around your next move" text="Get in touch with us to discuss your requirements. Our team can guide you through the conversation and next steps."/><div className="grid md:grid-cols-3 gap-5">{items.map(([Icon,title,desc],i)=><article className="card p-8" key={title}><span className="text-orange-500 font-extrabold text-sm tracking-[.16em]">{['BUY', 'SELL', 'EXCHANGE'][i]}</span><div className="my-6 w-16 h-16 rounded-2xl bg-[#edf3fa] flex items-center justify-center text-[#102d53]"><Icon size={32}/></div><h2 className="text-2xl font-extrabold text-[#102d53]">{title}</h2><p className="text-slate-500 leading-7 mt-4 mb-7">{desc}</p><a href={whatsappLink(business.phones[0],`Hello, I am interested in: ${title}. Please share more details.`)} target="_blank" rel="noreferrer" className="btn-cta-invert w-full sm:w-auto">Enquire now <ArrowRight size={17}/></a></article>)}</div></section>
 <section className="bg-[#102d53] py-16 text-center text-white"><div className="container-width"><h2 className="text-3xl md:text-4xl font-extrabold">Not sure where to start?</h2><p className="text-slate-300 mt-3 mb-7">Tell us what you have in mind. We'll help you with the next step.</p><a className="btn-primary" href={`tel:${business.phones[0]}`}>Call AR Cars <ArrowRight size={17}/></a></div></section></>
}
