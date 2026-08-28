import React from 'react';
import { motion } from 'framer-motion';
import { cvData } from '../data/cvData';
import { User, Briefcase, GraduationCap, Award, FileText, CheckCircle, Download, Contact } from 'lucide-react';

const SectionHeader = ({ icon: Icon, title }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem' }}>
    <Icon size={32} style={{ color: 'var(--accent-color)' }} />
    <h2 style={{ fontSize: '2.5rem', fontWeight: 700 }} className="text-gradient">{title}</h2>
  </div>
);

const GlassCard = ({ children, style }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="glass-panel"
    style={{ marginBottom: '2rem', width: '100%', ...style }}
  >
    {children}
  </motion.div>
);

export default function HtmlContent() {
  const { personalInfo, skills, experience, education, patents, publications } = cvData;

  return (
    <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
      
      {/* Hero Section */}
      <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingTop: '4rem' }}>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="glass-panel" 
          style={{ display: 'flex', gap: '3rem', alignItems: 'center', flexWrap: 'wrap' }}
        >
          <div style={{ width: '220px', height: '220px', borderRadius: '50%', overflow: 'hidden', border: '4px solid var(--accent-color)', boxShadow: '0 0 30px rgba(212, 175, 55, 0.15)' }}>
            <img src="/profile.jpeg" alt={personalInfo.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={(e) => { e.target.src = 'https://via.placeholder.com/220?text=JH' }} />
          </div>
          <div style={{ flex: 1, minWidth: '300px' }}>
            <h1 style={{ fontSize: '4.5rem', fontWeight: 800, marginBottom: '0.5rem', lineHeight: '1.1' }} className="text-gradient">
              {personalInfo.name}
            </h1>
            <h3 style={{ fontSize: '1.75rem', color: 'var(--accent-color)', marginBottom: '1.5rem', fontFamily: 'Lora, serif', fontStyle: 'italic' }}>
              {personalInfo.title}
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.15rem', marginBottom: '2rem', maxWidth: '700px', lineHeight: '1.7' }}>
              {personalInfo.experience} at {personalInfo.department}, {personalInfo.university}, {personalInfo.location}.
            </p>
            
            <div style={{ display: 'flex', gap: '2.5rem', flexWrap: 'wrap', fontFamily: 'Lora, serif', fontSize: '1.1rem', marginBottom: '2rem' }}>
              <div>
                <strong style={{ color: 'var(--text-primary)' }}>H-Index:</strong> <span className="accent-text">{personalInfo.metrics.hIndex}</span>
              </div>
              <div>
                <strong style={{ color: 'var(--text-primary)' }}>Citations:</strong> <span className="accent-text">{personalInfo.metrics.citations}</span>
              </div>
              <div>
                <a href={personalInfo.links.googleScholar} target="_blank" rel="noreferrer" style={{ color: 'var(--text-primary)', textDecoration: 'none', borderBottom: '1px solid var(--accent-muted)', paddingBottom: '2px', transition: 'border-color 0.3s' }} onMouseOver={(e) => e.target.style.borderBottomColor = 'var(--accent-color)'} onMouseOut={(e) => e.target.style.borderBottomColor = 'var(--accent-muted)'}>Google Scholar</a>
              </div>
              <div>
                <a href={personalInfo.links.linkedIn} target="_blank" rel="noreferrer" style={{ color: 'var(--text-primary)', textDecoration: 'none', borderBottom: '1px solid var(--accent-muted)', paddingBottom: '2px', transition: 'border-color 0.3s' }} onMouseOver={(e) => e.target.style.borderBottomColor = 'var(--accent-color)'} onMouseOut={(e) => e.target.style.borderBottomColor = 'var(--accent-muted)'}>LinkedIn</a>
              </div>
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
              <a 
                href="/Dr_Jaspreet_Hira_CV.pdf" 
                download 
                style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.8rem 1.5rem', backgroundColor: 'var(--accent-color)', color: '#000', textDecoration: 'none', borderRadius: '4px', fontWeight: 'bold', fontFamily: 'Inter, sans-serif', transition: 'transform 0.2s', boxShadow: '0 4px 15px rgba(212, 175, 55, 0.3)' }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <Download size={20} />
                Download Full CV
              </a>
              <a 
                href="/Dr_Jaspreet_Hira_Contact.vcf" 
                download 
                style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.8rem 1.5rem', backgroundColor: 'transparent', border: '1px solid var(--accent-color)', color: 'var(--accent-color)', textDecoration: 'none', borderRadius: '4px', fontWeight: 'bold', fontFamily: 'Inter, sans-serif', transition: 'background-color 0.2s', boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)' }}
                onMouseOver={(e) => { e.currentTarget.style.backgroundColor = 'rgba(212, 175, 55, 0.1)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                <Contact size={20} />
                Save Contact
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Experience Section */}
      <section style={{ paddingTop: '8rem', paddingBottom: '4rem' }}>
        <SectionHeader icon={Briefcase} title="Academic Journey" />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {experience.map((exp, idx) => (
            <GlassCard key={idx} style={{ borderLeft: '4px solid var(--accent-color)', borderTop: '1px solid var(--glass-border)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '1rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>{exp.role}</h3>
                  <p style={{ color: 'var(--accent-color)', fontWeight: 600, fontSize: '1.1rem', fontFamily: 'Playfair Display, serif' }}>{exp.institution}</p>
                </div>
                <div style={{ textAlign: 'right', color: 'var(--text-secondary)', fontFamily: 'Lora, serif' }}>
                  <div style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{exp.date}</div>
                  <div style={{ fontStyle: 'italic', fontSize: '0.9rem', marginTop: '0.25rem' }}>{exp.duration}</div>
                </div>
              </div>
              <p style={{ marginTop: '1.5rem', fontSize: '1rem', color: 'var(--text-secondary)' }}>{exp.type}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section style={{ paddingTop: '8rem', paddingBottom: '4rem' }}>
        <SectionHeader icon={GraduationCap} title="Scholarly Foundation" />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {education.map((edu, idx) => (
            <GlassCard key={idx}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
                <div style={{ flex: 1, minWidth: '300px' }}>
                  <h3 style={{ fontSize: '1.6rem', marginBottom: '0.5rem' }}>{edu.degree}</h3>
                  <p style={{ color: 'var(--accent-color)', fontSize: '1.2rem', fontFamily: 'Playfair Display, serif' }}>{edu.institution}</p>
                  <p style={{ color: 'var(--text-secondary)', marginTop: '1rem', lineHeight: '1.6' }}>{edu.details}</p>
                </div>
                <div style={{ textAlign: 'right', minWidth: '120px' }}>
                  <div style={{ fontSize: '1.4rem', fontWeight: 'bold', color: 'var(--text-primary)' }}>{edu.year}</div>
                  <div style={{ color: 'var(--accent-muted)', marginTop: '0.5rem', fontStyle: 'italic', fontWeight: 600 }}>{edu.result}</div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section style={{ paddingTop: '8rem', paddingBottom: '4rem' }}>
        <SectionHeader icon={User} title="Technical Expertise" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
          <GlassCard>
            <h3 style={{ color: 'var(--accent-color)', marginBottom: '1.5rem', fontSize: '1.4rem', borderBottom: '1px solid var(--glass-border)', paddingBottom: '0.75rem' }}>Areas of Interest</h3>
            <ul style={{ listStyle: 'none' }}>
              {skills.areasOfInterest.map((skill, idx) => (
                <li key={idx} style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-primary)', fontSize: '1.1rem' }}>
                  <CheckCircle size={18} style={{ color: 'var(--accent-color)' }}/> {skill}
                </li>
              ))}
            </ul>
          </GlassCard>
          
          <GlassCard>
            <h3 style={{ color: 'var(--accent-color)', marginBottom: '1.5rem', fontSize: '1.4rem', borderBottom: '1px solid var(--glass-border)', paddingBottom: '0.75rem' }}>Subjects</h3>
            <ul style={{ listStyle: 'none' }}>
              {skills.subjectsOfInterest.map((skill, idx) => (
                <li key={idx} style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-primary)', fontSize: '1.1rem' }}>
                  <CheckCircle size={18} style={{ color: 'var(--accent-color)' }}/> {skill}
                </li>
              ))}
            </ul>
          </GlassCard>

          <GlassCard style={{ gridColumn: '1 / -1' }}>
            <h3 style={{ color: 'var(--accent-color)', marginBottom: '1.5rem', fontSize: '1.4rem', borderBottom: '1px solid var(--glass-border)', paddingBottom: '0.75rem' }}>Technical Skills</h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              {skills.technicalSkills.map((skill, idx) => (
                <li key={idx} style={{ border: '1px solid var(--glass-border)', background: 'rgba(212, 175, 55, 0.05)', padding: '0.5rem 1rem', borderRadius: '6px', fontSize: '1.1rem', color: 'var(--text-primary)' }}>{skill}</li>
              ))}
            </ul>
          </GlassCard>
        </div>
      </section>

      {/* Achievements */}
      <section style={{ paddingTop: '8rem', paddingBottom: '8rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '4rem' }}>
          
          <div>
            <SectionHeader icon={Award} title="Patents" />
            <GlassCard>
              <ul style={{ listStyle: 'none' }}>
                {patents.map((item, idx) => (
                  <li key={idx} style={{ marginBottom: '1.5rem', paddingBottom: '1.5rem', borderBottom: '1px solid var(--glass-border)', display: 'flex', alignItems: 'flex-start', gap: '1.25rem', color: 'var(--text-primary)' }}>
                    <Award size={24} style={{ color: 'var(--accent-color)', flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ lineHeight: '1.6', fontSize: '1.1rem' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          </div>

          <div>
            <SectionHeader icon={FileText} title="Selected Publications" />
            <GlassCard>
              <ul style={{ listStyle: 'none' }}>
                {publications.map((item, idx) => (
                  <li key={idx} style={{ marginBottom: '1.5rem', paddingBottom: '1.5rem', borderBottom: '1px solid var(--glass-border)', display: 'flex', alignItems: 'flex-start', gap: '1.25rem', color: 'var(--text-primary)' }}>
                    <FileText size={24} style={{ color: 'var(--accent-color)', flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ fontSize: '1.05rem', lineHeight: '1.7' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          </div>

        </div>
      </section>

    </div>
  );
}
