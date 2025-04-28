import React from 'react';
import profilePic from '../assets/Profilenew.jpg';

export default function Home() {
  const skills = [
    { name: 'React', pct: 65, icon: 'bi bi-braces' },
    { name: 'JavaScript', pct: 70, icon: 'bi bi-code-slash' },
    { name: 'Bootstrap', pct: 70, icon: 'bi bi-layout-text-window' },
    { name: 'Laravel', pct: 70, icon: 'bi bi-server' },
    { name: 'Git & GitHub', pct: 85, icon: 'bi bi-github' },
  ];

  const projects = [
    {
      name: 'Clinic Management System',
      tech: 'PHP, Bootstrap',
      link: 'https://github.com/3ITB-Group9/Clinic-Management-System',
      icon: 'bi bi-hospital'
    },
    {
      name: 'E-Commerce Application',
      tech: 'React, Bootstrap',
      link: 'https://github.com/3ITB-Group9/E-CommerceApplication',
      icon: 'bi bi-cart4'
    }
  ];

  return (
    <main className="container fade-in" style={{ paddingTop: '120px' }}>

      {/* Hero */}
      <section className="text-center py-5 bg-light rounded shadow-sm mb-5">
        <img
          src={profilePic}
          alt="Profile"
          className="rounded-circle mb-3"
          style={{ width: '140px', height: '140px', objectFit: 'cover' }}
        />
        <h1 className="fw-bold">Saymo Mathew</h1>
        <p className="lead text-secondary">
          IT student passionate about web development & design.
        </p>
      </section>

      {/* What I Do */}
      <section className="py-5">
        <h2 className="fw-bold mb-4 text-center">What I Do</h2>
        <div className="row g-4">
          {[
            { title: 'Web Development', icon: 'bi-code-slash', desc: 'Building responsive React apps.' },
            { title: 'UI/UX Design', icon: 'bi-palette', desc: 'Crafting user-friendly interfaces.' },
            { title: 'Optimization', icon: 'bi-graph-up-arrow', desc: 'Streamlining workflows.' }
          ].map(card => (
            <div className="col-md-4" key={card.title}>
              <div className="card h-100 text-center shadow-sm">
                <div className="card-body">
                  <i className={`${card.icon} fs-1 mb-3 text-primary`}></i>
                  <h5 className="card-title">{card.title}</h5>
                  <p className="card-text text-muted">{card.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="pb-5">
        <h2 className="fw-bold mb-4 text-center">My Skills</h2>
        <div className="row g-4">
          {skills.map(s => (
            <div className="col-sm-6 col-md-4" key={s.name}>
              <div className="card skill-card h-100 shadow-sm">
                <div className="card-body">
                  <div className="d-flex align-items-center mb-3">
                    <i className={`${s.icon} skill-icon me-2`}></i>
                    <h5 className="card-title mb-0">{s.name}</h5>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: `${s.pct}%` }}
                      aria-valuenow={s.pct}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      {s.pct}%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section className="pb-5">
        <h2 className="fw-bold mb-4 text-center">Featured Projects</h2>
        <div className="row g-4">
          {projects.map(p => (
            <div className="col-md-6" key={p.name}>
              <div className="card h-100 shadow-sm">
                <div className="card-body d-flex flex-column">
                  <div className="d-flex align-items-center mb-3">
                    <i className={`${p.icon} fs-2 text-primary me-2`}></i>
                    <h5 className="card-title mb-0">{p.name}</h5>
                  </div>
                  <p className="card-text text-muted mb-4">Tech: {p.tech}</p>
                  <a
                    href={p.link}
                    className="mt-auto btn btn-outline-primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View on GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}
