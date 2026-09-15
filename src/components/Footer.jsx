import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const { personalInfo } = portfolioData;

  return (
    <footer className="bg-[var(--color-brand-black)] text-white py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="flex flex-col items-center md:items-start">
          <span className="font-editorial text-2xl font-bold tracking-tight uppercase mb-1">
            {personalInfo.name.split(' ')[0]}<span className="text-[var(--color-brand-orange)]">.</span>
          </span>
          <span className="text-[var(--color-brand-gray)] text-sm tracking-wider uppercase">{personalInfo.role}</span>
        </div>

        <div className="flex gap-6">
          <a href="#home" className="text-sm font-medium uppercase tracking-wider hover:text-[var(--color-brand-orange)] transition-colors">Home</a>
          <a href="#work" className="text-sm font-medium uppercase tracking-wider hover:text-[var(--color-brand-orange)] transition-colors">Work</a>
          <a href="#about" className="text-sm font-medium uppercase tracking-wider hover:text-[var(--color-brand-orange)] transition-colors">About</a>
        </div>

        <div className="text-[var(--color-brand-gray)] text-sm">
          &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
