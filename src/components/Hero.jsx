import { motion } from 'framer-motion';
import { ArrowRight, ArrowDown, Download, UserPlus } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import Background3D from './Background3D';

export default function Hero() {
  const { personalInfo } = portfolioData;

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <Background3D />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-8 flex flex-col justify-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h2 className="text-xl md:text-2xl font-medium tracking-wide text-[var(--color-brand-gray)] mb-4">
                {personalInfo.name} — {personalInfo.heroSubtitle}
              </h2>
              
              <h1 className="font-editorial text-5xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tighter mb-8 uppercase">
                Professor &<br />
                <span className="text-outline">Researcher</span>
              </h1>
              
              <p className="text-lg md:text-xl text-[var(--color-brand-gray)] max-w-2xl mb-10 leading-relaxed">
                {personalInfo.heroDescription}
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a href="#work" className="group flex items-center gap-2 px-8 py-4 bg-[var(--color-brand-orange)] text-white font-semibold uppercase tracking-wider hover:bg-[var(--color-brand-black)] transition-colors">
                  View My Work
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="/Dr_Jaspreet_Hira_CV.pdf" download className="group flex items-center gap-2 px-8 py-4 border-2 border-[var(--color-brand-black)] text-[var(--color-brand-black)] font-semibold uppercase tracking-wider hover:bg-[var(--color-brand-black)] hover:text-white transition-colors">
                  Download Full CV
                  <Download size={20} />
                </a>
                <a href="/Dr_Jaspreet_Hira_Contact.vcf" download className="group flex items-center gap-2 px-6 py-4 text-[var(--color-brand-black)] font-semibold uppercase tracking-wider hover:text-[var(--color-brand-orange)] transition-colors">
                  <UserPlus size={20} />
                  Save Contact
                </a>
              </div>
            </motion.div>
          </div>
          
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative w-64 h-80 md:w-80 md:h-96"
            >
              <div className="absolute inset-0 border-2 border-[var(--color-brand-black)] translate-x-4 translate-y-4"></div>
              <div className="absolute inset-0 bg-[var(--color-brand-light-gray)] overflow-hidden">
                <img 
                  src="/profile.jpeg" 
                  alt={personalInfo.name} 
                  className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </motion.div>
          </div>
          
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" className="p-3 bg-white rounded-full shadow-lg text-[var(--color-brand-black)] hover:text-[var(--color-brand-orange)] transition-colors">
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
}
