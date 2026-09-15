import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

export default function Process() {
  const { process } = portfolioData;

  return (
    <section className="py-24 bg-white border-t border-[var(--color-brand-light-gray)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        <div className="mb-20 text-center">
          <h2 className="font-editorial text-4xl md:text-5xl font-bold uppercase tracking-tight relative inline-block">
            My Creative Process
            <span className="absolute -bottom-4 left-1/4 w-1/2 h-1 bg-[var(--color-brand-orange)]"></span>
          </h2>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-[2px] bg-[var(--color-brand-light-gray)] -z-10"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {process.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex flex-col items-center text-center lg:items-start lg:text-left group"
              >
                <div className="w-24 h-24 rounded-full bg-[var(--color-brand-cream)] border-4 border-white shadow-lg flex items-center justify-center mb-8 relative z-10 group-hover:bg-[var(--color-brand-orange)] transition-colors duration-500">
                  <span className="font-editorial text-3xl font-bold text-[var(--color-brand-black)] group-hover:text-white transition-colors duration-500">
                    {step.step}
                  </span>
                </div>
                
                <h3 className="font-editorial text-2xl font-bold uppercase mb-4">{step.title}</h3>
                <p className="text-[var(--color-brand-gray)] leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
