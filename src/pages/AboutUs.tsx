import { ShieldCheck, Users, Calendar } from 'lucide-react';

export default function AboutUs() {
  return (
    <div className="about-page">
      <section className="section hero-bg" style={{ padding: 'var(--space-xl) 0 var(--space-lg)' }}>
        <div className="container text-center">
          <span className="badge badge-amber">Our Foundation</span>
          <h1 style={{ marginTop: 'var(--space-sm)', marginBottom: 'var(--space-sm)' }}>About Meththa Foundation</h1>
          <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.15rem' }}>
            Established in 2003, we are a registered charity dedicated to restoring mobility, independence, and dignity to patients with limb loss and disabilities in Sri Lanka.
          </p>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--bg-card)' }}>
        <div className="container">
          <div className="grid-2">
            <div>
              <h2 className="section-title">Our Sacred Mission</h2>
              <p style={{ marginTop: 'var(--space-md)', fontSize: '1.05rem', lineHeight: '1.7' }}>
                We believe that mobility is a fundamental human right. Our primary goal is to establish local clinics in Sri Lanka to design, manufacture, and distribute free prosthetics (artificial limbs), orthotic devices, and wheelchairs to victims of war, disease, and misfortune.
              </p>
              <p style={{ marginTop: 'var(--space-sm)', fontSize: '1.05rem', lineHeight: '1.7' }}>
                Anticipating the long-term needs of amputees, we also train local technicians and support research into using affordable, locally sourced materials to create highly durable limbs.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-sm)' }}>
              <div className="card" style={{ padding: 'var(--space-md)' }}>
                <div className="card-icon"><ShieldCheck size={28} /></div>
                <h3>100% Free</h3>
                <p style={{ fontSize: '0.9rem', marginTop: '4px' }}>All limbs and treatments are provided at zero cost to patients.</p>
              </div>
              <div className="card" style={{ padding: 'var(--space-md)' }}>
                <div className="card-icon"><Users size={28} /></div>
                <h3>5,000+ Rebuilt</h3>
                <p style={{ fontSize: '0.9rem', marginTop: '4px' }}>Over five thousand lives transformed and active again.</p>
              </div>
              <div className="card" style={{ padding: 'var(--space-md)' }}>
                <div className="card-icon"><Calendar size={28} /></div>
                <h3>Since 2003</h3>
                <p style={{ fontSize: '0.9rem', marginTop: '4px' }}>Over two decades of continuous support and service.</p>
              </div>
              <div className="card" style={{ padding: 'var(--space-md)' }}>
                <div className="card-icon" style={{ color: 'var(--secondary)', backgroundColor: 'rgba(14, 165, 233, 0.08)' }}>
                  <Users size={28} />
                </div>
                <h3>Local Staff</h3>
                <p style={{ fontSize: '0.9rem', marginTop: '4px' }}>Fully managed by qualified local Sri Lankan technicians.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-alt">
        <div className="container">
          <h2 className="section-title text-center center" style={{ marginBottom: 'var(--space-lg)' }}>Founders & Trustees</h2>
          
          <div className="grid-3">
            <div className="card text-center" style={{ padding: 'var(--space-lg)' }}>
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: 'var(--primary-subtle)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto var(--space-sm) auto', fontSize: '1.5rem', fontWeight: 'bold' }}>
                UK
              </div>
              <h3>Meththa UK Group</h3>
              <span className="badge" style={{ marginTop: 'var(--space-xs)' }}>Founding & Funding Hub</span>
              <p style={{ marginTop: 'var(--space-sm)', fontSize: '0.95rem' }}>
                Based in the UK, coordinating international funding, volunteer clinicians, and surgical visits to training centers.
              </p>
            </div>

            <div className="card text-center" style={{ padding: 'var(--space-lg)' }}>
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: 'var(--primary-subtle)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto var(--space-sm) auto', fontSize: '1.5rem', fontWeight: 'bold' }}>
                SL
              </div>
              <h3>Meththa SL Board</h3>
              <span className="badge" style={{ marginTop: 'var(--space-xs)' }}>Operations & Clinics</span>
              <p style={{ marginTop: 'var(--space-sm)', fontSize: '0.95rem' }}>
                Operating the rehabilitation clinic under the Guarantee Ltd registration in Sri Lanka, organizing local camps.
              </p>
            </div>

            <div className="card text-center" style={{ padding: 'var(--space-lg)' }}>
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: 'rgba(14, 165, 233, 0.08)', color: 'var(--secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto var(--space-sm) auto', fontSize: '1.5rem', fontWeight: 'bold' }}>
                VT
              </div>
              <h3>Volunteer Technicians</h3>
              <span className="badge" style={{ marginTop: 'var(--space-xs)', color: 'var(--secondary-dark)', backgroundColor: 'rgba(14, 165, 233, 0.08)' }}>Clinical Execution</span>
              <p style={{ marginTop: 'var(--space-sm)', fontSize: '0.95rem' }}>
                Dedicated prosthetists, orthotists, physiotherapists, and support staff working daily to cast, align, and fit limbs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
