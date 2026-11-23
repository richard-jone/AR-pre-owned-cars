import { Link } from 'react-router-dom'
import { MapPin, Phone, MessageCircle, ArrowUpRight, Facebook } from 'lucide-react'
import logo from '../assets/logo.jpeg'
import { business, whatsappLink } from '../data'

const facebookUrl = 'https://www.facebook.com/p/AR-pre-owned-used-CARS-61552800427072/'
const justdialUrl = 'https://www.justdial.com/Thoothukudi/AR-Pre-Owned-Cars-Kamaraj-College-Melashunmugapuram/9999PX461-X461-240523112507-M6R6_BZDET'
export default function Footer() {
  return <footer className="bg-[#0b203b] text-white pt-14 pb-7">
    <div className="container-width grid md:grid-cols-[1.3fr_1fr_1.2fr] gap-10">
      <div><div className="flex items-center gap-3 mb-5"><img src={logo} className="w-14 h-14 rounded-lg object-contain bg-white" alt="AR Cars"/><div><b className="text-xl">AR PRE-OWNED CARS</b><p className="text-xs text-slate-400 tracking-widest">BUY • SELL • EXCHANGE</p></div></div><p className="text-slate-300 leading-7 max-w-sm">Your local destination for buying, selling and exchanging pre-owned cars in Thoothukudi.</p></div>
      <div><h3 className="font-extrabold text-lg mb-5">Explore</h3><div className="grid grid-cols-2 gap-x-4 gap-y-4 text-slate-300 text-[15px] font-bold">{[['Home','/'],['About Us','/about'],['Services','/services'],['Buying Guide','/buying-guide'],['Contact','/contact']].map(([n,p])=><Link key={p} to={p} className="footer-nav-link hover:text-orange-400">{n}</Link>)}</div></div>
      <div><h3 className="font-extrabold text-lg mb-5">Get in touch</h3><p className="flex gap-3 text-slate-300 text-sm leading-6 mb-4"><MapPin className="shrink-0 text-orange-400" size={18}/>{business.address}</p>{business.phones.map(p=><a key={p} href={`tel:${p}`} className="footer-contact-link flex gap-3 text-slate-300 text-sm mb-3"><Phone size={17} className="text-orange-400"/>{p}</a>)}<a href={whatsappLink(business.phones[0])} target="_blank" rel="noreferrer" className="footer-whatsapp-link inline-flex items-center gap-2 text-slate-300 text-sm font-bold mt-2">Chat on WhatsApp <ArrowUpRight size={16}/></a><div className="flex flex-wrap gap-2 mt-5">
        <a className="social-link" href={facebookUrl} target="_blank" rel="noreferrer" aria-label="AR Pre-Owned Cars on Facebook"><Facebook size={16}/> Facebook <ArrowUpRight size={13}/></a>
        <a className="social-link" href={justdialUrl} target="_blank" rel="noreferrer" aria-label="AR Pre-Owned Cars on Justdial"><span className="w-5 h-5 rounded-full bg-white text-[#e34b36] text-[10px] font-black flex items-center justify-center">jd</span> Justdial <ArrowUpRight size={13}/></a>
      </div></div>
    </div>
    <div className="container-width border-t border-white/10 mt-12 pt-6 text-xs text-slate-400 flex flex-col sm:flex-row justify-between gap-2"><span>© {new Date().getFullYear()} AR Pre-Owned Cars. All rights reserved.</span><span>Thoothukudi, Tamil Nadu</span></div>
  </footer>
}
