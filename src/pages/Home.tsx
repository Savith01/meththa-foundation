import { Heart, Users, Footprints, ShieldCheck } from 'lucide-react';

export default function Home() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="section hero-bg" style={{ padding: 'var(--space-xl) 0' }}>
        <div className="container">
          <div className="grid-2">
            <div>
              <span className="badge badge-amber" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                <Heart size={14} style={{ fill: 'var(--accent)', color: 'var(--accent)' }} /> Restoring Mobility & Dignity
              </span>
              <h1 style={{ marginTop: 'var(--space-sm)', lineHeight: '1.15', color: 'var(--primary-dark)' }}>
                The Meththa Foundation
              </h1>
              <p style={{ fontSize: '1.25rem', color: 'var(--primary-light)', fontWeight: 600, marginTop: '8px' }}>
                Meththa Foundation-UK & Meththa Rehabilitation Foundation Guarantee Ltd -SL
              </p>
              <p style={{ marginTop: 'var(--space-md)', fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                We are dedicated to helping people with disabilities achieve the best possible quality of life. Through localized clinics in Sri Lanka, we provide custom artificial limbs, wheelchairs, and physical rehabilitation completely free of charge.
              </p>
              <div className="btn-group">
                <a href="#/fund-us" className="btn btn-primary">Sponsor a Limb</a>
                <a href="#/your-journey" className="btn btn-secondary">Get Support</a>
              </div>
            </div>

            <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
              {/* Modern Graphic representation instead of local file to ensure reliable load */}
              <div style={{
                position: 'relative',
                width: '100%',
                maxWidth: '450px',
                height: '380px',
                background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)',
                borderRadius: 'var(--radius-lg)',
                boxShadow: 'var(--shadow-lg)',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                padding: 'var(--space-lg)',
                textAlign: 'center'
              }}>
                {/* Background decorative rings */}
                <div style={{
                  position: 'absolute',
                  width: '300px',
                  height: '300px',
                  border: '2px solid rgba(255,255,255,0.05)',
                  borderRadius: '50%',
                  top: '-50px',
                  right: '-50px'
                }}></div>
                <div style={{
                  position: 'absolute',
                  width: '200px',
                  height: '200px',
                  border: '2px solid rgba(255,255,255,0.05)',
                  borderRadius: '50%',
                  bottom: '-50px',
                  left: '-50px'
                }}></div>

                <div style={{ zIndex: 5 }}>
                  <Footprints size={80} style={{ margin: '0 auto var(--space-sm) auto', opacity: 0.9 }} />
                  <h3 style={{ color: '#ffffff', fontSize: '1.8rem', fontWeight: 700 }}>5,000+ Limbs Gifted</h3>
                  <p style={{ color: 'rgba(255,255,255,0.85)', marginTop: '8px', fontSize: '0.95rem' }}>
                    Providing amputees with the freedom to walk, work, and thrive.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section style={{ backgroundColor: 'var(--primary-dark)', color: '#ffffff', padding: 'var(--space-md) 0' }}>
        <div className="container">
          <div className="grid-3 text-center" style={{ gap: 'var(--space-md)' }}>
            <div>
              <h2 style={{ fontSize: '3rem', color: 'var(--accent-light)', marginBottom: '4px' }}>5,120+</h2>
              <p style={{ color: '#e2e8f0', fontWeight: 600, fontSize: '1rem' }}>Prosthetic Limbs Distributed</p>
            </div>
            <div>
              <h2 style={{ fontSize: '3rem', color: 'var(--accent-light)', marginBottom: '4px' }}>780+</h2>
              <p style={{ color: '#e2e8f0', fontWeight: 600, fontSize: '1rem' }}>Wheelchairs Provided</p>
            </div>
            <div>
              <h2 style={{ fontSize: '3rem', color: 'var(--accent-light)', marginBottom: '4px' }}>22+</h2>
              <p style={{ color: '#e2e8f0', fontWeight: 600, fontSize: '1rem' }}>Years of Free Service</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="section" style={{ backgroundColor: 'var(--bg-card)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: 'var(--space-xl)' }}>
            <span className="badge">What We Do</span>
            <h2 className="section-title center" style={{ marginTop: 'var(--space-xs)' }}>Our Medical Relief Services</h2>
            <p style={{ maxWidth: '600px', margin: 'var(--space-sm) auto 0 auto' }}>
              We build locally adapted solutions to ensure long-term usability and accessibility in dry, humid, and rural regions.
            </p>
          </div>

          <div className="grid-3">
            <div className="card text-center" style={{ padding: 'var(--space-lg)' }}>
              <div className="card-icon" style={{ margin: '0 auto var(--space-sm) auto' }}>
                <Footprints size={28} />
              </div>
              <h3 style={{ marginBottom: 'var(--space-xs)' }}>Prosthetics Manufacture</h3>
              <p style={{ fontSize: '0.95rem' }}>
                Custom fabrication of below-knee and above-knee legs using robust, heat-stable plastics suited for agricultural workers walking in muddy fields.
              </p>
              <a href="#/products" style={{ display: 'inline-block', marginTop: 'var(--space-sm)', color: 'var(--primary)', fontWeight: 'bold', fontSize: '0.9rem' }}>
                Explore Products →
              </a>
            </div>

            <div className="card text-center" style={{ padding: 'var(--space-lg)' }}>
              <div className="card-icon" style={{ margin: '0 auto var(--space-sm) auto', color: 'var(--secondary)', backgroundColor: 'rgba(14, 165, 233, 0.08)' }}>
                <Users size={28} />
              </div>
              <h3 style={{ marginBottom: 'var(--space-xs)' }}>Orthotics & Braces</h3>
              <p style={{ fontSize: '0.95rem' }}>
                Providing supportive splints, braces, and custom orthotic devices (such as AFOs) to help children and adults recovering from paralysis, polio, or physical traumas.
              </p>
              <a href="#/products" style={{ display: 'inline-block', marginTop: 'var(--space-sm)', color: 'var(--secondary-dark)', fontWeight: 'bold', fontSize: '0.9rem' }}>
                View Supports →
              </a>
            </div>

            <div className="card text-center" style={{ padding: 'var(--space-lg)' }}>
              <div className="card-icon" style={{ margin: '0 auto var(--space-sm) auto', color: 'var(--accent)', backgroundColor: 'rgba(217, 119, 6, 0.08)' }}>
                <ShieldCheck size={28} />
              </div>
              <h3 style={{ marginBottom: 'var(--space-xs)' }}>Clinical Rehabilitation</h3>
              <p style={{ fontSize: '0.95rem' }}>
                Specialized gait assessment walkways, strength coaching, and post-fitting alignments from certified local physical therapists to ensure patient success.
              </p>
              <a href="#/your-journey" style={{ display: 'inline-block', marginTop: 'var(--space-sm)', color: 'var(--accent)', fontWeight: 'bold', fontSize: '0.9rem' }}>
                See Rehabilitation Path →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Testimony */}
      <section className="section-alt">
        <div className="container">
          <div className="grid-2">
            <div style={{
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-light)',
              borderRadius: 'var(--radius-md)',
              padding: 'var(--space-lg)',
              boxShadow: 'var(--shadow-md)',
              position: 'relative'
            }}>
              <span style={{
                position: 'absolute',
                top: '15px',
                right: '25px',
                fontSize: '5rem',
                fontFamily: 'serif',
                color: 'rgba(20, 63, 41, 0.1)',
                lineHeight: 0
              }}>“</span>
              <p style={{ fontStyle: 'italic', fontSize: '1.15rem', color: 'var(--primary-dark)', zIndex: 2, position: 'relative' }}>
                "Since losing my leg in an accident, I thought I could never return to my farm or support my young children. The clinic fitted me with a customized leg in just three days, and taught me to walk again. Today, I am farming on my own land once more. I got my life back."
              </p>
              <div style={{ marginTop: 'var(--space-md)', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '45px', height: '45px', borderRadius: '50%', backgroundColor: 'var(--primary-subtle)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
                  AM
                </div>
                <div>
                  <h4 style={{ margin: 0 }}>Anura Mahawewa</h4>
                  <p style={{ fontSize: '0.85rem', margin: 0 }}>Farmer & Father, Matara Clinic Patient</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="section-title">A Lifetimeline of Support</h2>
              <p style={{ marginTop: 'var(--space-md)', fontSize: '1.05rem', lineHeight: '1.7' }}>
                We believe that fitting a prosthetic limb is not a single clinic event, but a lifelong partnership. Our patients receive free lifetime adjustments, replacement socks, and joint servicing at our regional centers.
              </p>
              <p style={{ marginTop: 'var(--space-sm)', fontSize: '1.05rem', lineHeight: '1.7' }}>
                By establishing fully equipped localized clinics with trained local technicians, we make sure that our patients never have to travel far or wait months for repairs.
              </p>
              <div style={{ marginTop: 'var(--space-md)' }}>
                <a href="#/about-us" className="btn btn-secondary">Read Our Story</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="section-primary text-center">
        <div className="container">
          <h2 style={{ marginBottom: 'var(--space-xs)' }}>Help Us Rebuild Lives</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto var(--space-md) auto' }}>
            A contribution of £100 sponsors a complete below-knee prosthesis that will allow an amputee to walk and earn a living. Join our circle of hope today.
          </p>
          <a href="#/fund-us" className="btn btn-primary">Sponsor an Amputee</a>
        </div>
      </section>
    </div>
  );
}
