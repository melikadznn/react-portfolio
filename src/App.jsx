import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './index.css';

// داده‌های داینامیک پروژه‌ها - آدرس عکس‌ها برای Vite اصلاح شد
const projectsData = [
  {
    id: "festival",
    tag: "Team Collaboration (Melika Dezhban & Kimia Moradi)",
    title: "Festival Website",
    description: "A modern, dynamic platform designed to showcase festival events, featuring an engaging glassmorphic UI.",
    images: ["/public/images/carnaval1.png", "/public/images/carnaval2.png", "/public/images/carnaval3.png"],
    reverse: false
  },
  {
    id: "starbucks",
    tag: "Frontend Practice & UI Cloning",
    title: "Starbucks Website Clone",
    description: "A pixel-perfect, fully responsive recreation of the official Starbucks website to master advanced layouts.",
    images: ["/images/str1.png", "/images/str2.png", "/images/str3.png"],
    reverse: true 
  },
  {
    id: "certificate",
    tag: "Web Development Certificate",
    title: "Web Development Certificate",
    description: "A certificate showcasing proficiency in web development, earned through rigorous coursework and practical projects.",
    images: ["/images/web1.jpeg", "/images/web2.png", "/images/web3.png"],
    reverse: false
  }
];

export default function App() {
  const [isShrunk, setIsShrunk] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsShrunk(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* ۱. هدر / ناف‌بار */}
      <nav className={`navbar ${isShrunk ? 'shrunk' : ''}`}>
        <img src="/public/images/logo.svg" alt="Logo" />
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#education">Education</a></li>
        </ul>
        <button className="nav-contact-btn">Contact</button>
      </nav>

      <main>
        {/* ۲. هیرو سکشن */}
        <section id="home" className="hero-container">
          <div className="content-column">
            <div>
              <div className="greeting">Hi, I'm <span className="highlight-red">Melika Dezhban</span></div>
              <h1 className="main-headline">Computer Engineer</h1>
              <p className="sub-headline">& Future M.Sc. Student</p>
              <p className="bio-text">
                Passionate about frontend development, creating immersive user experiences, and exploring modern web architectures.
              </p>
            </div>
          </div>
        </section>

        {/* ۳. بخش مهارت‌ها */}
        <section id="skills" className="skills-section">
          <h2 className="section-title">My Skills</h2>
          <div className="skills-container">
            <div className="skills-card">
              <h3>Frontend</h3>
              <div className="skills-list">
                <span className="skill-item">HTML5</span>
                <span className="skill-item">CSS3 / Grid / Flexbox</span>
                <span className="skill-item">JavaScript (ES6+)</span>
                <span className="skill-item">React.js</span>
                <span className="skill-item">PHP</span>
              </div>
            </div>
            <div className="skills-card">
              <h3>Tools & Concepts</h3>
              <div className="skills-list">
                <span className="skill-item">Git & GitHub</span>
                <span className="skill-item">Responsive Design</span>
                <span className="skill-item">UI/UX Concepts</span>
              </div>
            </div>
          </div>
        </section>

        {/* ۴. بخش پروژه‌ها */}
        <section id="projects" className="projects-section">
          <h2 className="section-title">Featured Projects</h2>
          {projectsData.map((project) => (
            <div key={project.id} className={`project-row ${project.reverse ? 'reverse' : ''}`}>
              <div className="project-meta">
                <span className="project-tag">{project.tag}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                {/* دکمه اصلاح شد: تگ button حذف و استایل‌ها مستقیماً به Link داده شد */}
                <Link 
                  to={`/project/${project.id}`}
                  className="github-btn" 
                  style={{
                    display: 'inline-block', 
                    textDecoration: 'none', 
                    marginTop: '20px', 
                    background: 'var(--accent-neon)', 
                    color: '#fff', 
                    padding: '10px 20px', 
                    borderRadius: '8px',
                    textAlign: 'center'
                  }}
                >
                  View Details
                </Link>
              </div>
              
              {/* کانتینر آلبوم عکس‌ها */}
              <div className="project-album">
                <img src={project.images[0]} alt="Front" className="album-img img-front" />
                <img src={project.images[1]} alt="Middle" className="album-img img-middle" />
                <img src={project.images[2]} alt="Back" className="album-img img-back" />
              </div>
            </div>
          ))}
        </section>

        {/* ۵. بخش تحصیلات */}
        <section id="education" className="education-section">
          <h2 className="section-title">Education</h2>
          <div className="timeline-container">
            <div className="timeline-card upcoming">
              <span className="card-badge">Upcoming</span>
              <h3>Master of Science (M.Sc.)</h3>
              <p className="institution">Computer Engineering</p>
              <p className="duration">Future Student</p>
            </div>
            <div className="timeline-card">
              <span className="card-badge completed">Completed</span>
              <h3>Bachelor of Science (B.Sc.)</h3>
              <p className="institution">Computer Engineering</p>
              <p className="duration">Graduated</p>
            </div>
          </div>
        </section>
      </main>

      {/* ۶. فوتر */}
      <footer className="main-footer">
        <div className="footer-container">
          <div className="footer-brand">
            <div className="footer-logo">Melika Dezhban</div>
            <p>Computer Engineer & Frontend Developer</p>
          </div>
          <div className="footer-links">
            <h4>Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#projects">Projects</a></li>
            </ul>
          </div>
          <div className="footer-socials">
            <h4>Connect</h4>
            <div className="social-icons">
              <a href="https://github.com/melikadznn" target="_blank" rel="noreferrer">🐙</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Melika Dezhban. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
