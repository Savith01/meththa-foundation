import { Mail, Phone, MapPin } from 'lucide-react';
import { NavLink } from 'react-router-dom';
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
            <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)' }}>
              <p>Registered UK Charity No. 1104860</p>
              <p>Registered in Sri Lanka No. N(A)1117</p>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h3 style={{ color: '#ffffff', marginBottom: 'var(--space-sm)', fontSize: '1.1rem', fontWeight: 600 }}>Quick Links</h3>
            <ul style={{ listStyleType: 'none', paddingLeft: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li><NavLink to="/" style={{ color: 'rgba(255,255,255,0.7)', transition: 'color var(--transition-fast)' }} hover-color="#ffffff">Home</NavLink></li>
              <li><NavLink to="/about-us" style={{ color: 'rgba(255,255,255,0.7)' }}>About Us</NavLink></li>
              <li><NavLink to="/your-journey" style={{ color: 'rgba(255,255,255,0.7)' }}>Your Journey</NavLink></li>
              <li><NavLink to="/products" style={{ color: 'rgba(255,255,255,0.7)' }}>Products & Devices</NavLink></li>
              <li><NavLink to="/research" style={{ color: 'rgba(255,255,255,0.7)' }}>Research & Development</NavLink></li>
              <li><NavLink to="/fund-us" style={{ color: 'rgba(255,255,255,0.7)' }}>Fund Us (Donate)</NavLink></li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 style={{ color: '#ffffff', marginBottom: 'var(--space-sm)', fontSize: '1.1rem', fontWeight: 600 }}>Contact Clinics</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                <MapPin size={18} style={{ color: 'var(--primary-light)', flexShrink: 0, marginTop: '2px' }} />
                <span>
                  <strong>Sri Lanka Clinic:</strong><br />
                  Meththa Rehab Center, Kadawedduwa, Yatiyana, Minipura, Sri Lanka
                </span>
              </div>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <Phone size={18} style={{ color: 'var(--primary-light)', flexShrink: 0 }} />
                <span>+94 41 224 8133</span>
              </div>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <Mail size={18} style={{ color: 'var(--primary-light)', flexShrink: 0 }} />
                <span>info@meththafoundation.org.uk</span>
              </div>
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
          color: 'rgba(255, 255, 255, 0.40)'
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
