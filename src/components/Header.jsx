import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'
import logo from '../assets/logo.jpeg'
import { business } from '../data'

const links = [
  ['Home', '/'], ['About Us', '/about'], ['Services', '/services'],
  ['Buying Guide', '/buying-guide'], ['Contact', '/contact']
]

const navClass = ({ isActive }) =>
  `nav-link relative inline-flex items-center py-3 text-[15px] xl:text-base font-extrabold tracking-[.01em] ${isActive ? 'is-active' : ''}`

export default function Header() {
  const [open, setOpen] = useState(false)
  return <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-[0_4px_24px_rgba(16,45,83,.045)]">
    <div className="container-width flex items-center justify-between min-h-[86px] gap-5">
      <Link to="/" className="flex items-center gap-3 shrink-0 group" onClick={() => setOpen(false)}>
        <img src={logo} alt="AR Cars logo" className="w-[60px] h-[60px] object-contain rounded-lg transition-transform duration-300 group-hover:scale-105" />
        <span className="leading-tight"><strong className="block font-extrabold text-[#102d53] text-lg">AR CARS</strong><small className="text-[10px] tracking-[.16em] text-slate-500 font-bold">PRE-OWNED CARS</small></span>
      </Link>
      <nav className="hidden lg:flex items-center gap-5 xl:gap-7">
        {links.map(([label, path]) => <NavLink key={path} to={path} end={path === '/'} className={navClass}>{label}</NavLink>)}
      </nav>
      <a href={`tel:${business.phones[0]}`} className="call-us-btn hidden lg:inline-flex items-center gap-2 px-5 py-3.5 text-sm">
        <Phone size={17} strokeWidth={2.5}/> <span>Call Us</span>
      </a>
      <button className="lg:hidden p-2 text-[#102d53] rounded-lg hover:bg-orange-50 transition-colors" aria-label="Toggle navigation" onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
    </div>
    {open && <nav className="lg:hidden border-t border-slate-100 bg-white px-5 py-3 flex flex-col shadow-lg">
      {links.map(([label,path]) => <NavLink key={path} to={path} end={path === '/'} onClick={() => setOpen(false)} className={({isActive}) => `mobile-nav-link py-3.5 px-3 border-b border-slate-100 text-base font-extrabold transition-all duration-200 ${isActive ? 'text-orange-600 bg-orange-50' : 'text-[#263c59] hover:text-orange-600 hover:bg-orange-50'}`}>{label}</NavLink>)}
    </nav>}
  </header>
}
