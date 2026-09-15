import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { Microscope, Atom, Activity, Settings, PieChart, Code, Sparkles } from 'lucide-react';

const iconMap = {
  microscope: <Microscope size={24} />,
  atom: <Atom size={24} />,
  activity: <Activity size={24} />,
  settings: <Settings size={24} />,
  "pie-chart": <PieChart size={24} />,
  code: <Code size={24} />,
};

export default function Skills() {
  const { softwareSkills, aiTools, creativeSkills } = portfolioData;

  return (
    <section id="skills" className="py-24 bg-white border-t border-[var(--color-brand-light-gray)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        <div className="mb-20">
          <h2 className="font-editorial text-4xl md:text-5xl font-bold uppercase tracking-tight mb-12 relative inline-block">
            Technical Skills
            <span className="absolute -bottom-4 left-0 w-1/3 h-1 bg-[var(--color-brand-orange)]"></span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {softwareSkills.map((skill, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -5 }}
                className="p-6 border border-[var(--color-brand-light-gray)] flex flex-col items-center justify-center gap-4 text-center group hover:border-[var(--color-brand-orange)] transition-colors bg-[var(--color-brand-cream)]"
              >
                <div className="text-[var(--color-brand-black)] group-hover:text-[var(--color-brand-orange)] transition-colors">
                  {iconMap[skill.icon] || <Atom size={24} />}
                </div>
                <span className="font-semibold text-sm tracking-wide uppercase">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <h2 className="font-editorial text-3xl md:text-4xl font-bold uppercase tracking-tight mb-8">
              Optimization Tools
            </h2>
            <div className="space-y-6">
              {aiTools.map((tool, index) => (
                <div key={index} className="flex gap-6 items-start p-6 bg-[var(--color-brand-cream)] border border-[var(--color-brand-light-gray)]">
                  <div className="p-3 bg-white border border-[var(--color-brand-black)] flex-shrink-0">
                    <Activity size={24} className="text-[var(--color-brand-orange)]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 uppercase">{tool.name}</h3>
                    <p className="text-[var(--color-brand-gray)]">{tool.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-editorial text-3xl md:text-4xl font-bold uppercase tracking-tight mb-8">
              Subject of Interest
            </h2>
            <div className="flex flex-wrap gap-3">
              {creativeSkills.map((skill, index) => (
                <motion.span 
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="px-5 py-3 border border-[var(--color-brand-black)] text-[var(--color-brand-black)] font-medium text-sm tracking-wider uppercase hover:bg-[var(--color-brand-black)] hover:text-white transition-colors cursor-default flex items-center gap-2"
                >
                  <Sparkles size={14} className="text-[var(--color-brand-orange)]" />
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
