import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './index.css';

// project data
const projectsData = [
  {
    id: "festival",
    tag: "Team Collaboration (Melika Dezhban & Kimia Moradi)",
    title: "Festival Website",
    description: "A modern, dynamic platform designed to showcase festival events, featuring an engaging glassmorphic UI.",
    images: ["/images/carnaval1.png", "/images/carnaval2.png", "/images/carnaval3.png"],
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

  // typing effect data
  const words = ["UI/UX Designer", "Frontend Developer", "Computer Engineer"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  // Navbar scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsShrunk(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

 
  useEffect(() => {
    const handleTyping = () => {
      const fullWord = words[currentWordIndex];
      
      if (!isDeleting) {
        setCurrentText(fullWord.substring(0, currentText.length + 1));
        setTypingSpeed(100);
      } else {
        setCurrentText(fullWord.substring(0, currentText.length - 1));
        setTypingSpeed(50);
      }

      if (!isDeleting && currentText === fullWord) {
        setTypingSpeed(1500); 
        setIsDeleting(true);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex]);

  return (
    <>
      {/* header and navbar*/}
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
        {/*hero section*/}
        <section id="home" className="hero-container-new">
         
          <div className="hero-left">
            <p className="hero-subtitle">Hello! I Am <span className="highlight-white">Melika Dezhban</span></p>
            <h1 className="hero-title-main">
              A Designer who loves to know <br />
              <span className="everything-wrapper">
                everything...
          <svg className="oval-svg" viewBox="0 0 500 120" preserveAspectRatio="none">
                <ellipse cx="199" cy="60" rx="212" ry="60" />
          </svg>
              </span>
            </h1>
            <p className="hero-caption">Because once you immerse yourself in web development, there's no looking back.</p>
          </div>

          {/* typing effect*/}
          <div className="hero-right">
            <h2 className="typing-header">
              I'm a {currentText}
              <span className="typing-cursor">|</span>
            </h2>
            <p className="hero-company">Currently, I'm a freelancer and master degree student </p>
            <p className="hero-description">
              Passionate about building responsive, high-performance web experiences and striking interface architectures that merge modern code with fluid user interfaces.
            </p>
          </div>
        </section>

        {/* skills*/}
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
                <span className="skill-item">Node.js</span>
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

        {/* projects*/}
        <section id="projects" className="projects-section">
          <h2 className="section-title">Featured Projects</h2>
          {projectsData.map((project) => (
            <div key={project.id} className={`project-row ${project.reverse ? 'reverse' : ''}`}>
              <div className="project-meta">
                <span className="project-tag">{project.tag}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
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
              
              {/* images album*/}
              <div className="project-album">
                <img src={project.images[0]} alt="Front" className="album-img img-front" />
                <img src={project.images[1]} alt="Middle" className="album-img img-middle" />
                <img src={project.images[2]} alt="Back" className="album-img img-back" />
              </div>
            </div>
          ))}
        </section>

        {/* academic*/}
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

      {/* footer*/}
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