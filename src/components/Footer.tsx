import { Mail, Phone, MapPin } from 'lucide-react';
import logoImg from '../assets/logo.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{
      backgroundColor: 'var(--bg-footer)',
      color: 'rgba(255, 255, 255, 0.70)',
      padding: 'var(--space-xl) 0 var(--space-md) 0',
      marginTop: 'auto',
      borderTop: '3px solid var(--primary)',
      fontSize: '0.9rem'
    }}>
      <div className="container">
        <div className="grid-3" style={{ gap: 'var(--space-xl)', marginBottom: 'var(--space-lg)' }}>
          {/* Column 1: Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: 'var(--space-sm)' }}>
              <img
                src={logoImg}
                alt="Meththa Foundation Logo"
                style={{
                  height: '44px',
                  objectFit: 'contain',
                  filter: 'brightness(0) invert(1)'
                }}
              />
            </div>
            <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: '1.6', marginBottom: 'var(--space-sm)' }}>
              Providing prosthetic limbs, custom orthoses, and rehabilitation to thousands of disabled individuals across Sri Lanka, restoring their independence and quality of life.
            </p>
          </div>

          {/* Column 2: Contact Details */}
          <div>
            <h3 style={{ color: '#ffffff', marginBottom: 'var(--space-sm)', fontSize: '1.1rem', fontWeight: 600 }}>Contact Details</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                <MapPin size={18} style={{ color: 'var(--primary-light)', flexShrink: 0, marginTop: '2px' }} />
                <span>
                  <strong>Headquarters & Clinic:</strong><br />
                  Meththa Rehabilitation Foundation Guarantee Ltd,<br />
                  Moragollagama Road, Mahawa, Sri Lanka
                </span>
              </div>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                <Phone size={18} style={{ color: 'var(--primary-light)', flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <span style={{ display: 'block' }}>+94 37 361 8170 </span>
                  <span style={{ display: 'block' }}>+94 37 227 5351 </span>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <Phone size={18} style={{ color: '#25D366', flexShrink: 0 }} />
                <span>+94 76 777 2781 (WhatsApp)</span>
              </div>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <Mail size={18} style={{ color: 'var(--primary-light)', flexShrink: 0 }} />
                <span>meththafoundationmaho@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Column 3: Location Map */}
          <div>
            <h3 style={{ color: '#ffffff', marginBottom: 'var(--space-sm)', fontSize: '1.1rem', fontWeight: 600 }}>Our Location</h3>
            <div style={{ 
              borderRadius: 'var(--radius-md)', 
              overflow: 'hidden', 
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: 'var(--shadow-sm)',
              height: '160px',
              width: '100%'
            }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.674871862235!2d80.2783815747664!3d7.824195292196669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afccfde1650695b%3A0xe2f98e62f371c460!2sMeththa%20Rehabilitation%20Centre!5e0!3m2!1sen!2slk!4v1786773639188!5m2!1sen!2slk"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Location"
              />
            </div>
          </div>
        </div>

        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          paddingTop: 'var(--space-md)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 'var(--space-sm)',
          fontSize: '0.8rem',
          color: 'rgba(156, 154, 154, 0.4)'
        }}>
          <p>© {currentYear} The Meththa Foundation. All Rights Reserved.</p>
          <div style={{ display: 'flex', gap: 'var(--space-md)' }}>
            <a href="#/about-us">Privacy Policy</a>
            <a href="#/your-journey">Patient Care Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
