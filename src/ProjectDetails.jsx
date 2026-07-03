import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './ProjectInfo.css';

// ۱. این داده‌ها کاملاً بیرون از کامپوننت هستند و هیچ هوکی نباید اینجا باشد
const projectsData = {
  festival: {
    title: "Festival Website",
    tag: "Team Collaboration (Melika Dezhban & Kimia Moradi)",
    description: "A modern, dynamic platform designed to manage, showcase, and schedule festival events.",
    githubUrl: "https://github.com/Kimia-Moradi/festival-website.git",
    accentColor: "#a83279", 
    highlightColor: "#d696ff",
    images: ["/images/carnaval1.png", "/images/carnaval2.png", "/images/carnaval3.png"],
    articleTitle: "Introduction & Core Objectives",
    articleBody: "In this project, our primary goal was to craft a seamless and engaging user experience for festival-goers."
  },
  starbucks: {
    title: "Starbucks Website Clone",
    tag: "Frontend Practice & UI Cloning",
    description: "A pixel-perfect, fully responsive recreation of the official Starbucks website homepage.",
    githubUrl: "https://github.com/melikadznn/practice-starbucks-website-",
    accentColor: "#006241", 
    highlightColor: "#00D68F",
    images: ["/images/str1.png", "/images/str2.png", "/images/str3.png"],
    articleTitle: "Development Journey & Article",
    articleBody: "Cloning highly optimized corporate websites is one of the best ways to bridge the gap between basic CSS and production-ready code."
  },
  certificate: {
    title: "Web Development Certificate",
    tag: "Web Development Certificate",
    description: "A certificate showcasing proficiency in web development.",
    githubUrl: "https://github.com/melikadznn", 
    accentColor: "#ff0055", 
    highlightColor: "#ff99bb",
    images: ["/images/web1.jpeg", "/images/web2.png", "/images/web3.png"],
    articleTitle: "Coursework & Earned Skills",
    articleBody: "This certificate was achieved after completing intense training in modern frontend methodologies."
  }
};

// ۲. کامپوننت اصلی - هوک‌ها دقیقاً اینجا داخل تابع شروع می‌شوند
export default function ProjectDetails() {
  const { projectId } = useParams(); // هوک در بدنه اصلی تابع

  useEffect(() => {
    window.scrollTo(0, 0); // هوک در بدنه اصلی تابع
  }, [projectId]);

  const project = projectsData[projectId];

  if (!project) {
    return <div style={{color: '#fff', padding: '100px', textAlign: 'center'}}>Project not found!</div>;
  }

  const themeStyle = {
    '--accent-neon': project.accentColor,
    '--highlight-purple': project.highlightColor,
  };

  return (
    <main className="info-page-main" style={themeStyle}>
      <div style={{padding: '20px 0'}}>
        <Link to="/" style={{color: 'var(--highlight-purple)', textDecoration: 'none', fontWeight: 'bold'}}>← Back to Portfolio</Link>
      </div>

      <section className="project-hero">
        <span className="project-tag">{project.tag}</span>
        <h1 className="main-headline">{project.title}</h1>
        <p className="bio-text">{project.description}</p>
        <div className="project-buttons">
          <a href={project.githubUrl} target="_blank" rel="noreferrer" className="github-btn">View on GitHub 🐙</a>
        </div>
      </section>

      <section className="info-section">
        <h2 className="section-title">Project Gallery 📸</h2>
        <div className="project-gallery">
          {project.images.map((img, i) => (
            <div key={i} className="gallery-item"><img src={img} alt="Preview" /></div>
          ))}
        </div>
      </section>

      <section className="info-section article-section">
        <h2 className="section-title">Project Case Study 📝</h2>
        <article className="article-content">
          <h3>{project.articleTitle}</h3>
          <p>{project.articleBody}</p>
        </article>
      </section>
    </main>
  );
}