import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { personalInfo } = portfolioData;

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row gap-12 lg:gap-24"
        >
          <div className="md:w-1/3">
            <h2 className="font-editorial text-4xl md:text-5xl font-bold uppercase tracking-tight relative inline-block">
              {personalInfo.aboutHeading}
              <span className="absolute -bottom-4 left-0 w-1/2 h-1 bg-[var(--color-brand-orange)]"></span>
            </h2>
          </div>
          
          <div className="md:w-2/3">
            <p className="text-xl md:text-2xl leading-relaxed text-[var(--color-brand-gray)] font-light">
              {personalInfo.aboutDescription}
            </p>
            
            <div className="mt-12 pt-12 border-t border-[var(--color-brand-light-gray)] grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <h3 className="font-editorial text-4xl font-bold mb-2">16+</h3>
                <p className="text-sm uppercase tracking-wider text-[var(--color-brand-gray)] font-medium">Years of Experience</p>
              </div>
              <div>
                <h3 className="font-editorial text-4xl font-bold mb-2">13+</h3>
                <p className="text-sm uppercase tracking-wider text-[var(--color-brand-gray)] font-medium">Publications</p>
              </div>
              <div>
                <h3 className="font-editorial text-4xl font-bold mb-2">6</h3>
                <p className="text-sm uppercase tracking-wider text-[var(--color-brand-gray)] font-medium">Patents</p>
              </div>
              <div>
                <h3 className="font-editorial text-4xl font-bold mb-2">104+</h3>
                <p className="text-sm uppercase tracking-wider text-[var(--color-brand-gray)] font-medium">Citations</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
