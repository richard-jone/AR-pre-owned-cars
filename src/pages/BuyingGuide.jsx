import { ClipboardCheck, FileText, SearchCheck, MessageCircle } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import { business, whatsappLink } from '../data'
import pageHeroImage from '../assets/guide-car.png'
const steps = [
 [MessageCircle,'Start a conversation','Tell us whether you want to buy, sell or exchange a car. Share your basic requirements.'],
 [SearchCheck,'Discuss the vehicle','For a purchase, discuss the model, condition, usage history and details that matter to you.'],
 [FileText,'Review the details','Before proceeding, review the vehicle documents, ownership information and applicable terms carefully.'],
 [ClipboardCheck,'Confirm the next steps','Once you are comfortable with the details, speak with the team about the process and arrangements.']
]
export default function BuyingGuide() {
 return <><section className="relative overflow-hidden bg-[#0b203b] text-white min-h-[650px] lg:min-h-[690px] flex items-center">
  <div className="absolute inset-0 hero-grid opacity-40"/>
  <div className="absolute -right-24 top-4 w-[620px] h-[620px] rounded-full border border-white/10 hero-orbit"/>
  <div className="absolute -right-5 top-24 w-[470px] h-[470px] rounded-full border border-white/10"/>
  <div className="absolute inset-y-0 right-0 w-[65%] hero-glow"/>
  <div className="container-width relative z-10 grid lg:grid-cols-[.92fr_1.08fr] gap-2 items-center py-16 md:py-20">
    <div className="max-w-xl relative z-20 animate-rise">
      <p className="eyebrow mb-5">A useful starting point</p>
      <h1 className="text-[clamp(2.8rem,6vw,5.25rem)] leading-[1.02] tracking-[-.06em] font-extrabold">Pre-Owned Car Guide</h1>
      <p className="text-slate-200 text-lg leading-8 mt-6 max-w-lg">Practical points to help you approach your next pre-owned car purchase or sale.</p>
    </div>
    <div className="relative min-h-[300px] md:min-h-[470px] flex items-center justify-center lg:justify-end mt-5 lg:mt-0">
      <div className="absolute w-[88%] aspect-square max-w-[520px] rounded-full border border-white/10 bg-gradient-to-br from-[#1d5b89]/25 to-transparent hero-orbit"/>
      <div className="absolute w-[72%] aspect-square max-w-[420px] rounded-full bg-[#f39a1f]/10 blur-3xl"/>
      <img src={pageHeroImage} alt="" aria-hidden="true" className="page-hero-art relative z-10 w-[112%] max-w-[700px] object-contain"/>
    </div>
  </div>
  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent opacity-80"/>
</section>
 <section className="container-width py-20"><SectionHeading eyebrow="Your checklist" title="Take it one step at a time" text="Use this general checklist as a starting point. Vehicle-specific details and paperwork should always be verified before you make a decision."/><div className="grid md:grid-cols-2 gap-5">{steps.map(([Icon,title,desc],i)=><div key={title} className="card p-7 flex gap-5"><div className="shrink-0 w-12 h-12 rounded-xl bg-orange-50 text-orange-500 flex items-center justify-center"><Icon size={24}/></div><div><p className="eyebrow mb-2">STEP 0{i+1}</p><h3 className="text-xl font-extrabold text-[#102d53]">{title}</h3><p className="text-slate-500 leading-7 mt-2">{desc}</p></div></div>)}</div>
 <div className="mt-12 rounded-2xl bg-[#f3f6fa] p-7 md:p-10"><h3 className="text-2xl font-extrabold text-[#102d53] mb-4">Before you finalise a used car purchase</h3><ul className="grid sm:grid-cols-2 gap-3 text-slate-600 leading-7 list-disc pl-5"><li>Inspect the car in person and take a test drive.</li><li>Check service history and maintenance records.</li><li>Verify the RC, insurance and other relevant documents.</li><li>Check for pending loans, challans or ownership issues.</li><li>Understand the total price and transfer process.</li><li>Consider an independent mechanic's inspection.</li></ul></div>
 </section><section className="bg-[#102d53] py-14 text-center text-white"><div className="container-width"><h2 className="text-3xl font-extrabold">Have questions about your next car?</h2><p className="text-slate-300 mt-3 mb-6">Speak with AR Pre-Owned Cars in Thoothukudi.</p><a className="btn-primary" target="_blank" rel="noreferrer" href={whatsappLink(business.phones[0],'Hello, I have a question about buying or selling a pre-owned car.')}>Ask us on WhatsApp</a></div></section></>
}
