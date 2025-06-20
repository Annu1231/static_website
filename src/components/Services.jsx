const serviceData = [
  { title: 'Web Development', desc: 'Custom websites and web apps built with modern tech.' },
  { title: 'Digital Marketing', desc: 'SEO, Ads, Email, Social Media – all covered.' },
  { title: 'Graphic Design', desc: 'Creative logos, banners, and brand design.' },
]

const Services = () => (
  <section id="services" className="section">
    <h2>Our Services</h2>
    <div className="cards">
      {serviceData.map((s, i) => (
        <div className="card" key={i}>
          <h3>{s.title}</h3>
          <p>{s.desc}</p>
        </div>
      ))}
    </div>
  </section>
)

export default Services
