
import { Microscope, Beaker, BrainCircuit, GraduationCap } from 'lucide-react';

export default function ResearchDev() {
  const papers = [
    {
      icon: <Beaker size={28} />,
      title: "Optimized Recycled Polypropylene Sockets",
      description: "Analyzing the molecular stress threshold of locally sourced, recycled polymers to see if they can replace imported virgin plastics for prosthetic manufacturing, cutting production costs by 40%."
    },
    {
      icon: <GraduationCap size={28} />,
      title: "Low-Cost Knee Joints",
      description: "In collaboration with mechanical engineering departments, we designed a simple, high-grade nylon friction joint with a voluntary lock that functions reliably in sand, mud, and water."
    },
    {
      icon: <BrainCircuit size={28} />,
      title: "Affordable Bio-mechanic Gait Labs",
      description: "Developing a smartphone-based IMU (Inertial Measurement Unit) sensor kit to analyze a patient's walk without needing multi-million dollar motion capture studios. This helps rural clinics calibrate alignments."
    }
  ];

  return (
    <div className="research-page">
      <section className="section hero-bg" style={{ padding: 'var(--space-xl) 0 var(--space-lg)' }}>
        <div className="container text-center">
          <span className="badge">Engineering Hope</span>
          <h1 style={{ marginTop: 'var(--space-sm)', marginBottom: 'var(--space-sm)' }}>Research & Development</h1>
          <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.15rem' }}>
            We combine clinical medicine and chemical engineering to make prosthetic devices cheaper, stronger, and easier to manufacture in developing nations.
          </p>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--bg-card)' }}>
        <div className="container">
          <div className="grid-2" style={{ marginBottom: 'var(--space-xl)' }}>
            <div>
              <h2 className="section-title">Innovating for Accessibility</h2>
              <p style={{ marginTop: 'var(--space-md)', fontSize: '1.05rem', lineHeight: '1.7' }}>
                Standard prosthetic limbs in Western countries cost between $5,000 and $20,000. For an average farmer in Sri Lanka, this represents years of income. 
              </p>
              <p style={{ marginTop: 'var(--space-sm)', fontSize: '1.05rem', lineHeight: '1.7' }}>
                Our R&D division focuses specifically on humanitarian engineering. By utilizing local manufacturing, optimizing polymer recipes, and simplifying mechanical components, we build limbs that cost <strong>under $150</strong> to produce while matching international durability benchmarks.
              </p>
            </div>
            <div style={{ backgroundColor: 'var(--primary-subtle)', borderRadius: 'var(--radius-md)', padding: 'var(--space-lg)', border: '1px solid rgba(20,63,41,0.06)' }}>
              <div style={{ display: 'flex', gap: 'var(--space-sm)', alignItems: 'center', marginBottom: 'var(--space-sm)' }}>
                <Microscope size={28} style={{ color: 'var(--primary)' }} />
                <h3 style={{ margin: 0 }}>Research Collaborations</h3>
              </div>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.6', color: 'var(--text-primary)' }}>
                We actively partner with:
              </p>
              <ul style={{ listStyleType: 'none', marginTop: 'var(--space-xs)', paddingLeft: 0 }}>
                <li style={{ padding: '8px 0', borderBottom: '1px solid rgba(0,0,0,0.05)', fontSize: '0.95rem' }}>✓ UK University Prosthetics departments (materials testing)</li>
                <li style={{ padding: '8px 0', borderBottom: '1px solid rgba(0,0,0,0.05)', fontSize: '0.95rem' }}>✓ Local Engineering faculties (gait analytics models)</li>
                <li style={{ padding: '8px 0', fontSize: '0.95rem' }}>✓ ISPO (International Society for Prosthetics and Orthotics)</li>
              </ul>
            </div>
          </div>

          <h2 className="section-title text-center center" style={{ marginBottom: 'var(--space-lg)' }}>Current Research Projects</h2>
          
          <div className="grid-3">
            {papers.map((paper, id) => (
              <div className="card" key={id}>
                <div className="card-icon">{paper.icon}</div>
                <h3 style={{ marginBottom: 'var(--space-xs)', color: 'var(--primary-dark)' }}>{paper.title}</h3>
                <p style={{ fontSize: '0.95rem' }}>{paper.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
