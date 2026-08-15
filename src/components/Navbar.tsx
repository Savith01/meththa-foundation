import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logoImg from '../assets/logo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Keep navbar visible if mobile drawer is open
      if (isOpen) {
        setIsVisible(true);
        return;
      }

      if (currentScrollY < 50) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen]);

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
      transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
      zIndex: 1000,
      backgroundColor: '#ffffff',
      borderBottom: '1px solid var(--border-light)',
      height: 'var(--header-height)',
      display: 'flex',
      alignItems: 'center',
      transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
    }}>
      <div className="container nav-container" style={{
        display: 'grid',
        gridTemplateColumns: '1fr auto 1fr',
        alignItems: 'center',
        width: '100%',
        maxWidth: '100%',
        padding: '0 var(--space-lg)'
      }}>
        {/* Brand/Logo */}
        <NavLink to="/" style={{ display: 'flex', alignItems: 'center', zIndex: 1010, justifySelf: 'start' }}>
          <img src={logoImg} alt="Meththa Foundation" style={{ height: '48px', objectFit: 'contain' }} />
        </NavLink>

        {/* Desktop Menu */}
        <div style={{ display: 'flex', alignItems: 'center', justifySelf: 'center' }} className="desktop-nav">
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
        </div>

        {/* Right Actions: Donate Now (desktop) & Hamburger (mobile) */}
        <div style={{ display: 'flex', alignItems: 'center', justifySelf: 'end', zIndex: 1010 }}>
          <NavLink to="/fund-us" className="btn btn-primary desktop-nav" style={{ padding: '8px 20px', fontSize: '0.85rem' }}>
            Donate Now
          </NavLink>

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
          .nav-container {
            display: flex !important;
            justify-content: space-between !important;
            padding: 0 var(--space-md) !important;
          }
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
