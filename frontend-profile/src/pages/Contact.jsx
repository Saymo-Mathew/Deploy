import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    window.location.href =
      `mailto:saymomathew35@gmail.com?subject=Message from ${form.name}&body=${encodeURIComponent(form.message)}`;
  };

  const infos = [
        { icon: 'bi-envelope-fill', label: 'Email', value: 'saymomathew35@gmail.com' },
        { icon: 'bi-geo-alt-fill',  label: 'Location', value: 'Cabuyao City, Laguna, PH' },
        { icon: 'bi-phone-fill',    label: 'Phone', value: '0981 240 6772' },
        { icon: 'bi-github',   label: 'GitHub', value: 'https://github.com/Saymo-Mathew' }  
  ];

  return (
    <main className="container fade-in" style={{ paddingTop: '120px' }}>
      <section className="py-5 text-center">
        <h2 className="fw-bold mb-3">Contact Me</h2>
        <p className="text-secondary mx-auto" style={{ maxWidth: '600px' }}>
          I’d love to hear from you! Whether it’s a project idea, a question, or just a hello—
          drop me a message and I’ll get back to you.
        </p>
      </section>

      <div className="row g-4">
        {/* Info Cards */}
        <div className="col-md-4">
          {infos.map(info => (
            <div className="card info-card mb-3 slide-up shadow-sm" key={info.label}>
              <div className="card-body d-flex align-items-center">
                <i className={`${info.icon} fs-2 text-primary me-3`}></i>
                <div>
                  <h6 className="mb-0">{info.label}</h6>
                  <small className="text-muted">{info.value}</small>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="col-md-8">
          <form onSubmit={handleSubmit} className="card slide-up shadow-sm p-4">
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                name="name" type="text" className="form-control"
                value={form.name} onChange={handleChange} required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                name="email" type="email" className="form-control"
                value={form.email} onChange={handleChange} required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea
                name="message" className="form-control" rows="5"
                value={form.message} onChange={handleChange} required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Send Message
            </button>
          </form>

          {/* Map */}
          <div className="card slide-up shadow-sm mt-4">
            <iframe
              title="map" src="https://maps.google.com/maps?q=Cabuyao%20City&amp;output=embed"
              width="100%" height="200" style={{ border: 0 }} loading="lazy"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
