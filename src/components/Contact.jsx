import { useState } from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const { personalInfo } = portfolioData;
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setStatus('success');
    setTimeout(() => setStatus(null), 3000);
    e.target.reset();
  };

  return (
    <section id="contact" className="py-24 bg-[var(--color-brand-cream)] border-t border-[var(--color-brand-light-gray)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          <div>
            <h2 className="font-editorial text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-8 leading-[0.9]">
              Let's Create<br />
              <span className="text-[var(--color-brand-orange)]">Something Great</span>
            </h2>
            <p className="text-xl text-[var(--color-brand-gray)] mb-12 max-w-md">
              Have a project, collaboration, or creative idea in mind? Let's bring it to life.
            </p>

            <div className="space-y-6">
              <div>
                <span className="block text-sm font-semibold uppercase tracking-wider text-[var(--color-brand-gray)] mb-2">Email</span>
                <a href={`mailto:${personalInfo.email}`} className="text-2xl font-bold hover:text-[var(--color-brand-orange)] transition-colors">{personalInfo.email}</a>
              </div>
              <div>
                <span className="block text-sm font-semibold uppercase tracking-wider text-[var(--color-brand-gray)] mb-2">Phone</span>
                <a href={`tel:${personalInfo.phone}`} className="text-2xl font-bold hover:text-[var(--color-brand-orange)] transition-colors">{personalInfo.phone}</a>
              </div>
            </div>

            <div className="mt-16">
              <span className="block text-sm font-semibold uppercase tracking-wider text-[var(--color-brand-gray)] mb-6">Socials</span>
              <div className="flex gap-6">
                {Object.entries(personalInfo.socialLinks).map(([platform, link]) => (
                  <a 
                    key={platform} 
                    href={link}
                    className="text-sm font-semibold uppercase tracking-wider hover:text-[var(--color-brand-orange)] transition-colors"
                  >
                    {platform}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white p-8 md:p-12 shadow-sm border border-[var(--color-brand-light-gray)]">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold uppercase tracking-wider mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  required
                  className="w-full bg-[var(--color-brand-cream)] border-b-2 border-[var(--color-brand-black)] px-4 py-3 focus:outline-none focus:border-[var(--color-brand-orange)] transition-colors" 
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold uppercase tracking-wider mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  required
                  className="w-full bg-[var(--color-brand-cream)] border-b-2 border-[var(--color-brand-black)] px-4 py-3 focus:outline-none focus:border-[var(--color-brand-orange)] transition-colors" 
                  placeholder="hello@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold uppercase tracking-wider mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows="4" 
                  required
                  className="w-full bg-[var(--color-brand-cream)] border-b-2 border-[var(--color-brand-black)] px-4 py-3 focus:outline-none focus:border-[var(--color-brand-orange)] transition-colors resize-none" 
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full px-8 py-4 bg-[var(--color-brand-black)] text-white font-semibold uppercase tracking-wider hover:bg-[var(--color-brand-orange)] transition-colors flex items-center justify-center gap-2"
              >
                {status === 'success' ? 'Message Sent!' : 'Send Message'}
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
