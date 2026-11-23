import garage from '../assets/ar-garage.jpg'
import SectionHeading from '../components/SectionHeading'
import { BadgeCheck, Handshake, MapPin, Users } from 'lucide-react'
import pageHeroImage from '../assets/about-cars.png'
export default function About() {
 return <><section className="relative overflow-hidden bg-[#0b203b] text-white min-h-[650px] lg:min-h-[690px] flex items-center">
  <div className="absolute inset-0 hero-grid opacity-40"/>
  <div className="absolute -right-24 top-4 w-[620px] h-[620px] rounded-full border border-white/10 hero-orbit"/>
  <div className="absolute -right-5 top-24 w-[470px] h-[470px] rounded-full border border-white/10"/>
  <div className="absolute inset-y-0 right-0 w-[65%] hero-glow"/>
  <div className="container-width relative z-10 grid lg:grid-cols-[.92fr_1.08fr] gap-2 items-center py-16 md:py-20">
    <div className="max-w-xl relative z-20 animate-rise">
      <p className="eyebrow mb-5">Who we are</p>
      <h1 className="text-[clamp(2.8rem,6vw,5.25rem)] leading-[1.02] tracking-[-.06em] font-extrabold">About AR Cars</h1>
      <p className="text-slate-200 text-lg leading-8 mt-6 max-w-lg">A local pre-owned car business serving customers in and around Thoothukudi.</p>
    </div>
    <div className="relative min-h-[300px] md:min-h-[470px] flex items-center justify-center lg:justify-end mt-5 lg:mt-0">
      <div className="absolute w-[88%] aspect-square max-w-[520px] rounded-full border border-white/10 bg-gradient-to-br from-[#1d5b89]/25 to-transparent hero-orbit"/>
      <div className="absolute w-[72%] aspect-square max-w-[420px] rounded-full bg-[#f39a1f]/10 blur-3xl"/>
      <img src={pageHeroImage} alt="" aria-hidden="true" className="page-hero-art relative z-10 w-[112%] max-w-[700px] object-contain"/>
    </div>
  </div>
  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent opacity-80"/>
</section>
 <section className="container-width py-20 grid lg:grid-cols-2 gap-12 items-center"><img src={garage} alt="AR Pre-Owned Cars garage" className="w-full rounded-2xl shadow-xl object-cover aspect-[4/3]"/><div><SectionHeading eyebrow="Our business" title="A straightforward way to make your next car move."/><p className="text-slate-600 leading-8">AR Pre-Owned Cars, led by proprietor Siddiq, is focused on three core services: buying pre-owned cars, helping customers sell their cars and facilitating vehicle exchanges. Our showroom is located on Tiruchendur Road near Kamaraj College and Manickam Mahal in Thoothukudi.</p><p className="text-slate-600 leading-8 mt-4">We welcome you to get in touch, share what you're looking for and speak with us directly.</p></div></section>
 <section className="bg-[#f3f6fa] py-20"><div className="container-width"><SectionHeading eyebrow="Our approach" title="A helpful local point of contact" center/><div className="grid sm:grid-cols-3 gap-5">{[[MapPin,'Local presence','Find us on Tiruchendur Road, Thoothukudi.'],[Handshake,'Direct conversation','Discuss your requirements with our team.'],[BadgeCheck,'Clear services','Buying, selling and exchanging pre-owned cars.']].map(([Icon,title,desc])=><div className="card p-7 text-center" key={title}><Icon size={30} className="mx-auto text-orange-500 mb-4"/><h3 className="font-extrabold text-[#102d53] text-lg">{title}</h3><p className="text-slate-500 text-sm leading-6 mt-2">{desc}</p></div>)}</div></div></section></>
}
