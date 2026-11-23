import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Header from './components/Header'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import BuyingGuide from './pages/BuyingGuide'
import Contact from './pages/Contact'

export default function App() {
 const location = useLocation()
 useEffect(() => {
  let observer
  let frameId
  const attachScrollReveals = () => {
   const targets = document.querySelectorAll(
    'main section:not(:first-child) > .container-width, main section:not(:first-child) .card, main section:not(:first-child) article, main section:not(:first-child) .rounded-2xl'
   )
   if (!('IntersectionObserver' in window)) {
    targets.forEach((node) => node.classList.add('is-in-view'))
    return
   }
   observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
     if (entry.isIntersecting) {
      entry.target.classList.add('is-in-view')
      observer.unobserve(entry.target)
     }
    })
   }, { threshold: 0.08, rootMargin: '0px 0px -24px 0px' })
   targets.forEach((node, index) => {
    node.classList.add('scroll-reveal')
    if (node.matches('.card, article')) {
     node.style.setProperty('--reveal-delay', `${(index % 3) * 100}ms`)
    }
    observer.observe(node)
   })
  }
  frameId = window.requestAnimationFrame(attachScrollReveals)
  return () => {
   window.cancelAnimationFrame(frameId)
   observer?.disconnect()
  }
 }, [location.pathname])
 return <>
  <ScrollToTop/>
  <Header/>
  <AnimatePresence mode="wait">
   <motion.main key={location.pathname}
    initial={{opacity:0,y:12}}
    animate={{opacity:1,y:0}}
    exit={{opacity:0,y:-8}}
    transition={{duration:.28,ease:'easeOut'}}>
    <Routes location={location}>
     <Route path="/" element={<Home/>}/>
     <Route path="/about" element={<About/>}/>
     <Route path="/services" element={<Services/>}/>
     <Route path="/buying-guide" element={<BuyingGuide/>}/>
     <Route path="/contact" element={<Contact/>}/>
    </Routes>
   </motion.main>
  </AnimatePresence>
  <Footer/><WhatsAppFloat/>
 </>
}
