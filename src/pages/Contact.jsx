import { MapPin, Phone, MessageCircle, ExternalLink, Facebook } from 'lucide-react'
import { business, whatsappLink } from '../data'
import garage from '../assets/ar-garage.jpg'
import pageHeroImage from '../assets/contact-showroom.png'
const facebookUrl = 'https://www.facebook.com/p/AR-pre-owned-used-CARS-61552800427072/'
const justdialUrl = 'https://www.justdial.com/Thoothukudi/AR-Pre-Owned-Cars-Kamaraj-College-Melashunmugapuram/9999PX461-X461-240523112507-M6R6_BZDET'
export default function Contact() {
 const map = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(business.address+', Thoothukudi, Tamil Nadu')}`
 return <><section className="relative overflow-hidden bg-[#0b203b] text-white min-h-[650px] lg:min-h-[690px] flex items-center">
  <div className="absolute inset-0 hero-grid opacity-40"/>
  <div className="absolute -right-24 top-4 w-[620px] h-[620px] rounded-full border border-white/10 hero-orbit"/>
  <div className="absolute -right-5 top-24 w-[470px] h-[470px] rounded-full border border-white/10"/>
  <div className="absolute inset-y-0 right-0 w-[65%] hero-glow"/>
  <div className="container-width relative z-10 grid lg:grid-cols-[.92fr_1.08fr] gap-2 items-center py-16 md:py-20">
    <div className="max-w-xl relative z-20 animate-rise">
      <p className="eyebrow mb-5">We'd love to hear from you</p>
      <h1 className="text-[clamp(2.8rem,6vw,5.25rem)] leading-[1.02] tracking-[-.06em] font-extrabold">Contact Us</h1>
      <p className="text-slate-200 text-lg leading-8 mt-6 max-w-lg">Call, WhatsApp or visit AR Pre-Owned Cars in Thoothukudi.</p>
    </div>
    <div className="relative min-h-[300px] md:min-h-[470px] flex items-center justify-center lg:justify-end mt-5 lg:mt-0">
      <div className="absolute w-[88%] aspect-square max-w-[520px] rounded-full border border-white/10 bg-gradient-to-br from-[#1d5b89]/25 to-transparent hero-orbit"/>
      <div className="absolute w-[72%] aspect-square max-w-[420px] rounded-full bg-[#f39a1f]/10 blur-3xl"/>
      <img src={pageHeroImage} alt="" aria-hidden="true" className="page-hero-art relative z-10 w-[112%] max-w-[700px] object-contain"/>
    </div>
  </div>
  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent opacity-80"/>
</section>
 <section className="container-width py-16 md:py-20"><div className="grid lg:grid-cols-[.9fr_1.1fr] gap-7">
  <div className="space-y-5">
   <div className="card p-7"><div className="flex items-center gap-3 mb-4"><MapPin className="text-orange-500"/><h2 className="font-extrabold text-xl text-[#102d53]">Visit our showroom</h2></div><p className="text-slate-600 leading-7">{business.address}, Thoothukudi, Tamil Nadu.</p><a href={map} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 mt-5 text-sm font-extrabold text-orange-600">Open in Google Maps <ExternalLink size={15}/></a></div>
   <div className="card p-7"><div className="flex items-center gap-3 mb-4"><Phone className="text-orange-500"/><h2 className="font-extrabold text-xl text-[#102d53]">Call us</h2></div>{business.phones.map(p=><a key={p} href={`tel:${p}`} className="block text-lg font-bold text-slate-700 py-2 hover:text-orange-600">{p}</a>)}</div>
   <div className="card p-7"><div className="flex items-center gap-3 mb-4"><MessageCircle className="text-orange-500"/><h2 className="font-extrabold text-xl text-[#102d53]">WhatsApp</h2></div><p className="text-slate-600 mb-4">Both numbers are available for WhatsApp enquiries.</p><div className="flex flex-wrap gap-3">{business.phones.map(p=><a key={p} href={whatsappLink(p)} target="_blank" rel="noreferrer" className="rounded-md bg-[#eaf8ef] text-[#137c43] px-4 py-3 font-bold text-sm">Chat {p}</a>)}</div></div>
   <div className="card p-7"><h2 className="font-extrabold text-xl text-[#102d53] mb-4">Find us online</h2><div className="flex flex-wrap gap-2"><a className="inline-flex items-center gap-2 rounded-full bg-[#edf3fa] px-4 py-3 text-sm font-bold text-[#102d53] hover:bg-[#dce8f5] transition-colors" href={facebookUrl} target="_blank" rel="noreferrer"><Facebook size={17}/> Facebook</a><a className="inline-flex items-center gap-2 rounded-full bg-[#fff0ed] px-4 py-3 text-sm font-bold text-[#b93d2e] hover:bg-[#ffe0da] transition-colors" href={justdialUrl} target="_blank" rel="noreferrer"><span className="w-5 h-5 rounded-full bg-[#e34b36] text-white text-[10px] font-black flex items-center justify-center">jd</span> Justdial</a></div></div>
  </div>
  <div className="rounded-2xl bg-[#f3f6fa] p-7 md:p-10 flex flex-col min-h-[560px] overflow-hidden">
    <div>
      <p className="eyebrow mb-3">AR PRE-OWNED CARS</p>
      <h2 className="text-3xl md:text-4xl font-extrabold text-[#102d53]">Let's find the right way forward.</h2>
      <p className="text-slate-600 leading-8 mt-5">Whether you're planning to buy a pre-owned car, sell your current vehicle or explore an exchange, reach out to us directly.</p>
      <div className="grid sm:grid-cols-3 gap-3 mt-7">
        <div className="rounded-xl bg-white p-4 border border-slate-200"><span className="text-orange-500 font-extrabold text-xs tracking-widest">01</span><p className="font-extrabold text-[#102d53] mt-1">BUY</p><p className="text-xs text-slate-500 mt-1">Find your next car</p></div>
        <div className="rounded-xl bg-white p-4 border border-slate-200"><span className="text-orange-500 font-extrabold text-xs tracking-widest">02</span><p className="font-extrabold text-[#102d53] mt-1">SELL</p><p className="text-xs text-slate-500 mt-1">Discuss your car</p></div>
        <div className="rounded-xl bg-white p-4 border border-slate-200"><span className="text-orange-500 font-extrabold text-xs tracking-widest">03</span><p className="font-extrabold text-[#102d53] mt-1">EXCHANGE</p><p className="text-xs text-slate-500 mt-1">Explore an upgrade</p></div>
      </div>
    </div>
    <div className="relative mt-7 rounded-xl overflow-hidden min-h-[170px] flex-1">
      <img src={garage} alt="AR Pre-Owned Cars showroom" className="absolute inset-0 w-full h-full object-cover"/>
      <div className="absolute inset-0 bg-gradient-to-r from-[#0b203b]/90 via-[#0b203b]/55 to-transparent"/>
      <div className="relative z-10 p-5 md:p-6 text-white max-w-sm">
        <p className="text-orange-300 text-xs font-extrabold tracking-[.16em]">VISIT OUR SHOWROOM</p>
        <p className="font-bold leading-6 mt-2">Tiruchendur Road, near Kamaraj College, Thoothukudi.</p>
        <p className="text-sm text-slate-200 mt-2">Proprietor: Siddiq</p>
      </div>
    </div>
    <div className="mt-6 border-t border-slate-200 pt-6 flex flex-wrap items-center justify-between gap-4">
      <p className="text-sm text-slate-500">Ready to talk? Call our team.</p>
      <a href={`tel:${business.phones[0]}`} className="btn-cta-invert"><Phone size={17}/> Call AR Cars</a>
    </div>
  </div>
 </div></section></>
}
