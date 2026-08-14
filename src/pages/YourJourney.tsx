import React from 'react';
import { CardChecklist } from 'lucide-react'; // Wait, Lucide React does not have CardChecklist. Let's use simple icons.
import { ClipboardList, Paintbrush, Cog, Footprints, Smile } from 'lucide-react';

export default function YourJourney() {
  const steps = [
    {
      icon: <ClipboardList size={24} />,
      title: "1. Clinical Assessment",
      description: "Our prosthetist examines the patient's residual limb, evaluates muscle strength, skin condition, and joints. We select the best solution unique to their lifestyle (e.g., farming vs. office work)."
    },
    {
      icon: <Paintbrush size={24} />,
      title: "2. Casting & Measurement",
      description: "We apply plaster of Paris bandages to take an exact negatives mold of the residual limb. This ensures that the socket fits securely and snugly, preventing chafing or discomfort."
    },
    {
      icon: <Cog size={24} />,
      title: "3. Fabrication & Modification",
      description: "Our local technicians pour plaster into the mold to create a positive model, modify it for weight-bearing efficiency, vacuum-form polycarbonate/polypropylene sheet materials, and assemble the joint/foot components."
    },
    {
      icon: <Footprints size={24} />,
      title: "4. Fitting & Alignment",
      description: "The patient tries out the prototype prosthetic. Our clinicians adjust height, knee friction, and ankle angle to optimize gait dynamics. This fine-tuning is crucial for long-term health."
    },
    {
      icon: <Smile size={24} />,
      title: "5. Rehabilitation & Walkway",
      description: "Using parallel bars, mirrors, and obstacle setups in our clinic gym, our physiotherapist trains the patient. They learn how to stand, distribute weight, walk smoothly, and regain their independence."
    }
  ];

  return (
    <div className="journey-page">
      <section className="section hero-bg" style={{ padding: 'var(--space-xl) 0 var(--space-lg)' }}>
        <div className="container text-center">
          <span className="badge">The Patient Path</span>
          <h1 style={{ marginTop: 'var(--space-sm)', marginBottom: 'var(--space-sm)' }}>Your Journey to Mobility</h1>
          <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.15rem' }}>
            We guide each patient carefully through a personalized rehabilitation program. Below is what a patient experiences from their first visit to full recovery.
          </p>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--bg-card)' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
            {/* Timeline vertical line */}
            <div style={{
              position: 'absolute',
              left: '28px',
              top: '40px',
              bottom: '40px',
              width: '4px',
              backgroundColor: 'var(--neutral-100)',
              borderRadius: '2px',
              zIndex: 1
            }}></div>

            {steps.map((step, index) => (
              <div key={index} style={{
                display: 'flex',
                gap: 'var(--space-md)',
                marginBottom: 'var(--space-lg)',
                position: 'relative',
                zIndex: 2
              }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--primary)',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  boxShadow: '0 4px 10px rgba(20, 63, 41, 0.2)'
                }}>
                  {step.icon}
                </div>
                <div className="card" style={{ flexGrow: 1, padding: 'var(--space-md) var(--space-lg)' }}>
                  <h3 style={{ color: 'var(--primary-dark)', marginBottom: '8px' }}>{step.title}</h3>
                  <p style={{ fontSize: '1rem', lineHeight: '1.6' }}>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="section-primary text-center">
        <div className="container">
          <h2>Need Assistance or Know Someone Who Does?</h2>
          <p style={{ margin: 'var(--space-sm) auto var(--space-md) auto', maxWidth: '600px' }}>
            Our clinics are open to all patients. Registered doctors can refer patients, or you can contact us directly to coordinate a clinic booking.
          </p>
          <a href="#/fund-us" className="btn btn-primary">Support Amputee Treatment</a>
        </div>
      </section>
    </div>
  );
}
