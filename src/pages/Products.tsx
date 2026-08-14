

export default function Products() {
  const items = [
    {
      title: "Below-Knee Prostheses (Trans-tibial)",
      description: "Custom-made socket attached to a lightweight pylon and flexible solid-ankle-cushion-heel (SACH) foot. Crafted from premium high-density polypropylene to survive agricultural and tropical environments.",
      badge: "Most Requested"
    },
    {
      title: "Above-Knee Prostheses (Trans-femoral)",
      description: "Incorporates a manual-locking joint or free-swing safety knee mechanism, tailored cast-socket with suction suspension or silesian belt. Designed for stability and confidence on uneven soils.",
      badge: "Highly Complex"
    },
    {
      title: "Upper-Limb Prostheses",
      description: "Functional body-powered split hooks or cosmetic hands. Specially designed for everyday utility like writing, eating, and light agricultural operations.",
      badge: "Specialized"
    },
    {
      title: "Orthoses (AFOs & KAFOs)",
      description: "Ankle-Foot and Knee-Ankle-Foot orthoses made to support paralyzed or weak muscles, common in patients recovering from strokes, polio, spinal injuries, or congenital conditions.",
      badge: "Supportive"
    },
    {
      title: "All-Terrain Wheelchairs",
      description: "Sturdy, front-wheel-steered wheelchairs fitted with high-profile tires. Perfect for rural Sri Lankan roads, enabling students to attend school and adults to navigate the outdoors.",
      badge: "Mobility Support"
    },
    {
      title: "Paediatric Devices",
      description: "Modular prosthetics designed to 'grow' with the child. We schedule regular checks every 6 months to replace pylons and resize sockets as children grow.",
      badge: "Priceless Impact"
    }
  ];

  return (
    <div className="products-page">
      <section className="section hero-bg" style={{ padding: 'var(--space-xl) 0 var(--space-lg)' }}>
        <div className="container text-center">
          <span className="badge badge-amber">Tech & Devices</span>
          <h1 style={{ marginTop: 'var(--space-sm)', marginBottom: 'var(--space-sm)' }}>Mobility Solutions we Manufacture</h1>
          <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.15rem' }}>
            We manufacture durable, high-quality, and cost-effective prosthetics and orthotics inside Sri Lanka to perfectly suit the physical environment.
          </p>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--bg-card)' }}>
        <div className="container">
          <div className="grid-3">
            {items.map((item, id) => (
              <div className="card" key={id} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'between' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-sm)' }}>
                    <span className="badge" style={{ backgroundColor: 'rgba(14, 165, 233, 0.08)', color: 'var(--secondary-dark)' }}>{item.badge}</span>
                  </div>
                  <h3 style={{ marginBottom: 'var(--space-sm)', color: 'var(--primary-dark)' }}>{item.title}</h3>
                  <p style={{ fontSize: '0.95rem' }}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-alt text-center">
        <div className="container">
          <h2>Rigorous Quality Control</h2>
          <p style={{ maxWidth: '700px', margin: 'var(--space-sm) auto var(--space-md) auto' }}>
            Every prosthesis undergoes structural alignment tests and is checked by senior clinical advisors before physical therapist clearance. We adhere strictly to international rehabilitation standards.
          </p>
          <div style={{ display: 'inline-flex', gap: 'var(--space-sm)' }}>
            <a href="#/research" className="btn btn-secondary">Learn about R&D</a>
            <a href="#/fund-us" className="btn btn-primary">Sponsor a Limb</a>
          </div>
        </div>
      </section>
    </div>
  );
}
