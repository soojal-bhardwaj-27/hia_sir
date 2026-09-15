import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { X, ArrowUpRight } from 'lucide-react';

export default function Portfolio() {
  const { projects } = portfolioData;
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', ...new Set(projects.map(p => p.category))];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="work" className="py-24 bg-[var(--color-brand-cream)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <h2 className="font-editorial text-4xl md:text-5xl font-bold uppercase tracking-tight relative inline-block">
            Publications & Patents
            <span className="absolute -bottom-4 left-0 w-1/2 h-1 bg-[var(--color-brand-orange)]"></span>
          </h2>
          
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 text-sm font-semibold tracking-wider uppercase transition-colors ${
                  filter === cat 
                    ? 'bg-[var(--color-brand-black)] text-white' 
                    : 'border border-[var(--color-brand-light-gray)] text-[var(--color-brand-gray)] hover:border-[var(--color-brand-black)] hover:text-[var(--color-brand-black)]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                className="group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-[var(--color-brand-light-gray)] mb-6">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-6 py-3 bg-white text-[var(--color-brand-black)] font-bold uppercase tracking-wider text-sm flex items-center gap-2">
                      View Details <ArrowUpRight size={16} />
                    </span>
                  </div>
                </div>
                <p className="text-sm font-semibold tracking-widest text-[var(--color-brand-orange)] uppercase mb-2">{project.category}</p>
                <h3 className="font-editorial text-2xl font-bold uppercase">{project.title}</h3>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 bg-black/80 backdrop-blur-sm overflow-y-auto"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="bg-white w-full max-w-5xl overflow-hidden relative mt-auto mb-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="absolute top-4 right-4 z-10 p-2 bg-white rounded-full shadow-lg hover:text-[var(--color-brand-orange)] transition-colors"
                onClick={() => setSelectedProject(null)}
              >
                <X size={24} />
              </button>
              
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="h-64 lg:h-auto bg-[var(--color-brand-light-gray)]">
                  <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                  <p className="text-sm font-semibold tracking-widest text-[var(--color-brand-orange)] uppercase mb-4">{selectedProject.category}</p>
                  <h3 className="font-editorial text-4xl font-bold uppercase mb-6">{selectedProject.title}</h3>
                  <p className="text-lg text-[var(--color-brand-gray)] mb-8 leading-relaxed">
                    {selectedProject.description}
                  </p>
                  
                  {selectedProject.outcome && (
                    <div className="mb-8 p-6 bg-[var(--color-brand-cream)] border-l-4 border-[var(--color-brand-orange)]">
                      <h4 className="font-bold uppercase tracking-wider mb-2 text-sm">Outcome</h4>
                      <p className="text-[var(--color-brand-gray)]">{selectedProject.outcome}</p>
                    </div>
                  )}

                  <div className="mb-10">
                    <h4 className="font-bold uppercase tracking-wider mb-4 text-sm">Tools Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tools.map((tool, i) => (
                        <span key={i} className="px-3 py-1 bg-[var(--color-brand-light-gray)] text-xs font-semibold uppercase tracking-wider">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a href={selectedProject.link} className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--color-brand-black)] text-white font-semibold uppercase tracking-wider hover:bg-[var(--color-brand-orange)] transition-colors w-full md:w-auto">
                    Read More <ArrowUpRight size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
