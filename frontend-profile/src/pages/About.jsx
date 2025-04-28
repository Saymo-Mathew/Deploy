import React from 'react';

export default function About() {
  const values = [
    { title: 'Dedication', icon: 'bi-hourglass-split', desc: 'Committed to continual learning.' },
    { title: 'Passion',    icon: 'bi-heart-fill',       desc: 'Driven by love for technology.' },
    { title: 'Innovation', icon: 'bi-lightbulb-fill',   desc: 'Always seeking creative solutions.' },
    { title: 'Teamwork',   icon: 'bi-people-fill',      desc: 'Collaborating to achieve goals.' }
  ];

  const timeline = [
    { year: '2022–Present', role: 'BS Information Technology', org: 'Pamantasan ng Cabuyao' },
    { year: '2020–2022',    role: 'STEM Course',             org: 'Citi Global College' },
    { year: '2016–2020',    role: 'High School',             org: 'Bigaa Integrated NHS' },
    { year: '2010–2016',    role: 'Elementary',              org: 'Bigaa Elementary School' }
  ];

  return (
    <main className="container slide-up" style={{ paddingTop: '120px' }}>
      {/* Introduction */}
      <section className="py-5 text-center">
        <h2 className="fw-bold mb-3">About Me</h2>
        <p className="text-secondary mx-auto" style={{ maxWidth: '600px' }}>
          I’m an IT student passionate about learning new tecnologies. I have a strong foundation in HTML, CSS, and JavaScript, and I am currently learning React.
          I am eager to apply my skills and contribute to innovative projects.
        </p>
      </section>

      {/* Personal Values */}
      <section className="py-5">
        <h3 className="fw-bold mb-4 text-center">My Values</h3>
        <div className="row g-4">
          {values.map(v => (
            <div className="col-md-3" key={v.title}>
              <div className="card value-card h-100 text-center shadow-sm p-3">
                <i className={`${v.icon} fs-1 text-primary mb-2`}></i>
                <h5 className="card-title">{v.title}</h5>
                <p className="card-text text-muted">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="pb-5">
        <h3 className="fw-bold mb-4 text-center">Education Timeline</h3>
        <div className="timeline-container">
          {timeline.map(item => (
            <div className="timeline-item card slide-up shadow-sm p-3 mb-4" key={item.year}>
              <div className="d-flex">
                <div style={{ width: '100px' }}>
                  <h6 className="text-primary">{item.year}</h6>
                </div>
                <div className="flex-grow-1">
                  <h5 className="mb-1">{item.role}</h5>
                  <p className="mb-0 text-muted">{item.org}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
