import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, BadgeCheck, CarFront, Handshake, RefreshCw, ShieldCheck, MapPin, Phone, Sparkles } from 'lucide-react'
import garage from '../assets/ar-garage.jpg'
import heroCars from '../assets/hero-cars.png'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import { business, whatsappLink } from '../data'

const services = [
  {icon:CarFront,title:'Buy a Car',desc:'Looking for your next car? Talk to us about available pre-owned options.'},
  {icon:Handshake,title:'Sell Your Car',desc:'Thinking of selling? Connect with us to discuss your vehicle.'},
  {icon:RefreshCw,title:'Exchange Your Car',desc:'Planning an upgrade? Ask us about exchanging your current car.'}
]
export default function Home() {
 return <>
  <section className="relative overflow-hidden bg-[#0b203b] text-white min-h-[650px] lg:min-h-[690px] flex items-center">
   <div className="absolute inset-0 hero-grid opacity-40"/>
   <div className="absolute -right-24 top-4 w-[620px] h-[620px] rounded-full border border-white/10 hero-orbit"/>
   <div className="absolute -right-5 top-24 w-[470px] h-[470px] rounded-full border border-white/10"/>
   <div className="absolute inset-y-0 right-0 w-[65%] hero-glow"/>
   <div className="container-width relative z-10 grid lg:grid-cols-[.92fr_1.08fr] gap-2 items-center py-16 md:py-20">
    <div className="max-w-xl relative z-20">
      <motion.div initial={{opacity:0,y:22}} animate={{opacity:1,y:0}} transition={{duration:.7}} className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[.07] px-4 py-2 mb-7 text-xs tracking-[.15em] font-bold text-slate-200"><Sparkles size={14} className="text-orange-400"/> THOOTHUKUDI • TAMIL NADU</motion.div>
      <motion.h1 initial={{opacity:0,y:34}} animate={{opacity:1,y:0}} transition={{duration:.85,delay:.12}} className="text-[clamp(2.8rem,6vw,5.25rem)] leading-[1.02] tracking-[-.06em] font-extrabold">Your next drive<br/><span className="text-[#f4a12b]">starts here.</span></motion.h1>
      <motion.p initial={{opacity:0,y:25}} animate={{opacity:1,y:0}} transition={{duration:.75,delay:.28}} className="text-slate-300 text-lg leading-8 mt-6 max-w-lg">Buy, sell or exchange pre-owned cars with AR Cars. A local team in Thoothukudi, ready to help you make your next move.</motion.p>
      <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.7,delay:.4}} className="flex flex-wrap gap-3 mt-8"><Link to="/contact" className="btn-primary">Explore with us <ArrowRight size={18}/></Link><a href={whatsappLink(business.phones[0])} target="_blank" rel="noreferrer" className="btn-outline">WhatsApp us</a></motion.div>
      <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.7}} className="flex flex-wrap gap-5 mt-9 text-sm text-slate-300"><span className="flex gap-2 items-center"><BadgeCheck size={17} className="text-orange-400"/> Buy • Sell • Exchange</span><span className="flex gap-2 items-center"><MapPin size={17} className="text-orange-400"/> Thoothukudi</span></motion.div>
    </div>
    <div className="relative min-h-[300px] md:min-h-[470px] flex items-center justify-center lg:justify-end mt-5 lg:mt-0">
      <div className="absolute w-[88%] aspect-square max-w-[520px] rounded-full border border-white/10 bg-gradient-to-br from-[#1d5b89]/25 to-transparent hero-orbit"/>
      <div className="absolute w-[72%] aspect-square max-w-[420px] rounded-full bg-[#f39a1f]/10 blur-3xl"/>
      <motion.img src={heroCars} alt="Navy SUV and white sedan" className="hero-car-art relative z-10 w-[125%] max-w-[760px] object-contain lg:translate-x-10" initial={{opacity:0,x:65,scale:.92}} animate={{opacity:1,x:0,scale:1}} transition={{duration:1.05,ease:[.2,.75,.25,1],delay:.18}}/>
      <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:.9,duration:.6}} className="absolute z-20 bottom-3 left-2 md:left-0 rounded-xl border border-white/15 bg-[#102d53]/85 backdrop-blur-md px-4 py-3 shadow-2xl"><p className="text-[10px] tracking-[.16em] text-orange-300 font-bold">AR PRE-OWNED CARS</p><p className="font-extrabold text-white text-sm mt-1">Find your next ride</p></motion.div>
    </div>
   </div>
   <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent opacity-80"/>
  </section>
  <section className="bg-[#f3f6fa] border-b border-slate-200"><div className="container-width grid sm:grid-cols-3 gap-5 py-6 text-center sm:text-left">{[['01','Buying assistance'],['02','Selling support'],['03','Vehicle exchange']].map(([n,t])=><div key={n} className="flex items-center justify-center sm:justify-start gap-4 hover:translate-x-1 transition-transform duration-300"><span className="text-orange-500 font-extrabold text-2xl">{n}</span><span className="font-bold text-[#102d53]">{t}</span></div>)}</div></section>
  <section className="container-width py-20 md:py-24"><Reveal><SectionHeading eyebrow="What we do" title="Your car journey starts here" text="Whether you're looking to buy your next car, sell your current vehicle or make an exchange, AR Pre-Owned Cars is here to help you take the next step." center/></Reveal><div className="grid md:grid-cols-3 gap-5">{services.map(({icon:Icon,title,desc},i)=><Reveal key={title} delay={i*110}><div className="card p-7 group h-full"><div className="w-14 h-14 rounded-xl bg-orange-50 text-orange-500 flex items-center justify-center mb-6 group-hover:bg-[#102d53] group-hover:text-white group-hover:rotate-6 transition-all duration-300"><Icon size={27}/></div><p className="eyebrow mb-2">0{i+1}</p><h3 className="text-xl font-extrabold text-[#102d53]">{title}</h3><p className="text-slate-500 leading-7 mt-3 mb-5">{desc}</p><Link to="/services" className="text-sm font-extrabold text-[#d9820c] inline-flex items-center gap-2 group-hover:gap-3 transition-all">Explore service <ArrowRight size={16}/></Link></div></Reveal>)}</div></section>
  <section className="bg-[#102d53] text-white py-20 overflow-hidden"><div className="container-width grid md:grid-cols-2 gap-12 items-center"><Reveal><div><p className="eyebrow mb-3">About AR Cars</p><h2 className="section-title text-white">A neighbourhood car partner in Thoothukudi.</h2><p className="text-slate-300 leading-8 mt-5">Visit our location near Kamaraj College and speak directly with us about your pre-owned car requirements. We make it easy to start a conversation about buying, selling or exchanging.</p><Link to="/about" className="btn-primary mt-7">Know our story <ArrowRight size={18}/></Link></div></Reveal><Reveal delay={130}><div className="grid grid-cols-2 gap-4"><div className="rounded-xl bg-white/10 p-6 hover:bg-white/[.16] transition-colors duration-300"><ShieldCheck className="text-orange-400 mb-4" size={30}/><h3 className="font-extrabold text-lg">Personal assistance</h3><p className="text-slate-300 text-sm leading-6 mt-2">Talk to our team about your needs.</p></div><div className="rounded-xl bg-white/10 p-6 mt-9 hover:bg-white/[.16] transition-colors duration-300"><Handshake className="text-orange-400 mb-4" size={30}/><h3 className="font-extrabold text-lg">Three ways to deal</h3><p className="text-slate-300 text-sm leading-6 mt-2">Buying, selling and exchanging.</p></div></div></Reveal></div></section>
  <section className="container-width py-20"><Reveal><div className="rounded-2xl bg-[#fff5e8] p-8 md:p-12 flex flex-col md:flex-row md:items-center justify-between gap-7 hover:shadow-xl transition-shadow duration-500"><div><p className="eyebrow mb-3">Let's talk cars</p><h2 className="text-3xl md:text-4xl font-extrabold text-[#102d53]">Have a car in mind?</h2><p className="text-slate-600 mt-3">Call us or send a WhatsApp message to get started.</p></div><div className="flex flex-wrap gap-3"><a className="btn-primary" href={`tel:${business.phones[0]}`}><Phone size={17}/> Call now</a><Link className="inline-flex items-center gap-2 font-bold text-[#102d53] border border-[#102d53]/30 rounded-md px-5 py-3 hover:bg-[#102d53] hover:text-white transition-colors duration-300" to="/contact">Contact details <ArrowRight size={17}/></Link></div></div></Reveal></section>
 </>
}
