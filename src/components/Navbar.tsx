import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Heart } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { path: '/', label: 'HOME' },
    { path: '/about-us', label: 'ABOUT US' },
    { path: '/your-journey', label: 'YOUR JOURNEY' },
    { path: '/products', label: 'PRODUCTS' },
    { path: '/research', label: 'RESEARCH & DEV' },
    { path: '/fund-us', label: 'FUND US' },
  ];

  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      backgroundColor: 'var(--nav-bg)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--border-light)',
      height: 'var(--header-height)',
      display: 'flex',
      alignItems: 'center',
      transition: 'all var(--transition-fast)'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%'
      }}>
        {/* Brand/Logo */}
        <NavLink to="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', zIndex: 1010 }}>
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            backgroundColor: 'var(--primary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ffffff'
          }}>
            <Heart size={20} style={{ fill: '#ffffff' }} />
          </div>
          <div>
            <span style={{
              fontFamily: 'var(--font-title)',
              fontWeight: 800,
              fontSize: '1.25rem',
              letterSpacing: '-0.5px',
              color: 'var(--primary-dark)'
            }}>METHTHA</span>
            <span style={{
              fontSize: '0.75rem',
              display: 'block',
              marginTop: '-5px',
              color: 'var(--text-secondary)',
              letterSpacing: '1px'
            }}>FOUNDATION</span>
          </div>
        </NavLink>

        {/* Desktop Menu */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)' }} className="desktop-nav">
          <ul style={{ display: 'flex', listStyle: 'none', gap: '8px', margin: 0, padding: 0 }}>
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  style={({ isActive }) => ({
                    padding: '8px 16px',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    letterSpacing: '0.05em',
                    color: isActive ? '#ffffff' : 'var(--text-primary)',
                    backgroundColor: isActive ? 'var(--primary)' : 'transparent',
                    display: 'block',
                    transition: 'all var(--transition-fast)'
                  })}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          
          <NavLink to="/fund-us" className="btn btn-primary" style={{ padding: '8px 20px', fontSize: '0.85rem' }}>
            Donate Now
          </NavLink>
        </div>

        {/* Hamburger Icon */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'var(--primary-dark)',
            zIndex: 1010
          }}
          className="mobile-toggle"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: 'var(--bg-main)',
          zIndex: 1005,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          animation: 'fade-in 0.2s ease-out'
        }}>
          <ul style={{
            listStyle: 'none',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-md)',
            padding: 0,
            margin: 0
          }}>
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  style={({ isActive }) => ({
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: isActive ? 'var(--primary)' : 'var(--text-primary)',
                    padding: '8px 24px',
                    display: 'block',
                    borderRadius: 'var(--radius-full)',
                    backgroundColor: isActive ? 'var(--primary-subtle)' : 'transparent'
                  })}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li style={{ marginTop: 'var(--space-sm)' }}>
              <NavLink
                to="/fund-us"
                onClick={() => setIsOpen(false)}
                className="btn btn-primary"
                style={{ padding: '12px 32px' }}
              >
                Donate Now
              </NavLink>
            </li>
          </ul>
        </div>
      )}

      {/* Inline styles for media-query controls */}
      <style>{`
        @media (max-width: 968px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-toggle {
            display: block !important;
          }
        }
      `}</style>
    </nav>
  );
}
