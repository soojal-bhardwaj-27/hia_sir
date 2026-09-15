import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  const { education, experience } = portfolioData;

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-24 bg-[var(--color-brand-cream)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Work Experience */}
          <div>
            <h2 className="font-editorial text-3xl md:text-4xl font-bold uppercase tracking-tight mb-12">
              Work Experience
            </h2>
            <div className="space-y-12 border-l border-[var(--color-brand-black)] pl-8 ml-2">
              {experience.map((item, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  className="relative"
                >
                  <span className="absolute -left-[37px] top-1.5 w-3 h-3 bg-[var(--color-brand-orange)] rounded-full ring-4 ring-[var(--color-brand-cream)]"></span>
                  <span className="text-sm font-semibold tracking-widest text-[var(--color-brand-orange)] uppercase mb-2 block">{item.duration}</span>
                  <h3 className="text-2xl font-bold mb-1">{item.role}</h3>
                  <h4 className="text-lg text-[var(--color-brand-gray)] mb-4">{item.company}</h4>
                  <ul className="list-disc pl-5 space-y-2 text-[var(--color-brand-gray)]">
                    {item.responsibilities.map((resp, i) => (
                      <li key={i}>{resp}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="font-editorial text-3xl md:text-4xl font-bold uppercase tracking-tight mb-12">
              Education
            </h2>
            <div className="space-y-12 border-l border-[var(--color-brand-black)] pl-8 ml-2">
              {education.map((item, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  className="relative"
                >
                  <span className="absolute -left-[37px] top-1.5 w-3 h-3 bg-[var(--color-brand-black)] rounded-full ring-4 ring-[var(--color-brand-cream)]"></span>
                  <span className="text-sm font-semibold tracking-widest text-[var(--color-brand-gray)] uppercase mb-2 block">{item.duration}</span>
                  <h3 className="text-2xl font-bold mb-1">{item.degree}</h3>
                  <h4 className="text-lg text-[var(--color-brand-gray)]">{item.institution}</h4>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
