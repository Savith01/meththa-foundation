import { useState, useEffect } from 'react';
import { Users, Heart, Smile, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      url: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1600&q=80",
      alt: "Rehabilitation clinic and physical therapy support"
    },
    {
      url: "https://images.unsplash.com/photo-1508847154043-be12a267ef68?auto=format&fit=crop&w=1600&q=80",
      alt: "Providing wheels and orthotic materials"
    },
    {
      url: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1600&q=80",
      alt: "Charity support and community health camps"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="home-page">
      {/* 100vh Slider Hero */}
      <section style={{
        position: 'relative',
        height: 'calc(100vh - 80px)',
        width: '100%',
        backgroundColor: '#000000',
        overflow: 'hidden'
      }}>
        {/* Slides */}
        {slides.map((slide, index) => (
          <div
            key={index}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundImage: `url(${slide.url})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: currentSlide === index ? 1 : 0,
              transition: 'opacity 1s ease-in-out',
              zIndex: 1
            }}
            aria-label={slide.alt}
          />
        ))}

        {/* Dark overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.55)',
          zIndex: 2
        }} />

        {/* Centered Text Overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          color: '#ffffff',
          padding: '0 var(--space-md)',
          zIndex: 3
        }}>
          <h1 style={{ 
            color: '#ffffff', 
            fontSize: 'max(2.2rem, 3.8vw)', 
            fontWeight: 800, 
            lineHeight: '1.25',
            textShadow: '0 4px 10px rgba(0,0,0,0.5)',
            maxWidth: '1000px',
            margin: '0 auto'
          }}>
            The Meththa Foundation-UK
          </h1>
          <h2 style={{ 
            color: '#e2e8f0', 
            fontSize: 'max(1.4rem, 2vw)', 
            fontWeight: 600, 
            marginTop: '16px',
            lineHeight: '1.35',
            textShadow: '0 4px 10px rgba(0,0,0,0.5)',
            maxWidth: '950px',
            margin: '16px auto 0 auto'
          }}>
            The Meththa Rehabilitation Foundation Guarantee Ltd -SL
          </h2>
          <p style={{
            color: 'rgba(255, 255, 255, 0.85)',
            maxWidth: '650px',
            marginTop: '24px',
            fontSize: '1.1rem',
            lineHeight: '1.6',
            textShadow: '0 2px 4px rgba(0,0,0,0.5)'
          }}>
            We are here to help you achieve the best possible Quality of Life
          </p>

          <div className="btn-group" style={{ marginTop: '32px', justifyContent: 'center' }}>
            <a href="#/fund-us" className="btn btn-primary" style={{ padding: '14px 32px' }}>Sponsor a Limb</a>
            <a href="#/your-journey" className="btn btn-white" style={{ padding: '14px 32px' }}>Get Support</a>
          </div>
        </div>

        {/* Carousel controls */}
        <button
          type="button"
          onClick={prevSlide}
          className="carousel-arrow"
          style={{
            position: 'absolute',
            left: '20px',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(4px)',
            border: 'none',
            borderRadius: '50%',
            width: '50px',
            height: '50px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ffffff',
            cursor: 'pointer',
            zIndex: 4,
            transition: 'background var(--transition-fast)'
          }}
        >
          <ChevronLeft size={28} />
        </button>

        <button
          type="button"
          onClick={nextSlide}
          className="carousel-arrow"
          style={{
            position: 'absolute',
            right: '20px',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(4px)',
            border: 'none',
            borderRadius: '50%',
            width: '50px',
            height: '50px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ffffff',
            cursor: 'pointer',
            zIndex: 4,
            transition: 'background var(--transition-fast)'
          }}
        >
          <ChevronRight size={28} />
        </button>

        {/* Pagination Dots */}
        <div style={{
          position: 'absolute',
          bottom: '24px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '12px',
          zIndex: 4
        }}>
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrentSlide(index)}
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: currentSlide === index ? 'var(--primary-light)' : 'rgba(255, 255, 255, 0.4)',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            />
          ))}
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

      {/* Core Purpose Section */}
      <section className="section" style={{ backgroundColor: 'var(--bg-card)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: 'var(--space-xl)' }}>
            <span className="badge">What We Do</span>
            <h2 className="section-title center" style={{ marginTop: 'var(--space-xs)' }}>Our Mission & Purpose</h2>
            <p style={{ maxWidth: '600px', margin: 'var(--space-sm) auto 0 auto' }}>
              We are dedicated to supporting your journey towards complete physical, social, and emotional well-being.
            </p>
          </div>

          <div className="grid-3">
            <div className="card text-center" style={{ padding: 'var(--space-lg)', display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
              <div className="card-icon" style={{ margin: '0 auto var(--space-sm) auto', color: 'var(--primary)', backgroundColor: 'var(--primary-subtle)' }}>
                <Heart size={28} />
              </div>
              <h3 style={{ marginBottom: 'var(--space-xs)' }}>Quality of Life</h3>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.6', color: 'var(--text-secondary)', margin: 0 }}>
                We are here to help you achieve the best possible Quality of Life for yourself.
              </p>
            </div>

            <div className="card text-center" style={{ padding: 'var(--space-lg)', display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
              <div className="card-icon" style={{ margin: '0 auto var(--space-sm) auto', color: 'var(--secondary)', backgroundColor: 'rgba(14, 165, 233, 0.08)' }}>
                <Users size={28} />
              </div>
              <h3 style={{ marginBottom: 'var(--space-xs)' }}>Social Wellbeing</h3>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.6', color: 'var(--text-secondary)', margin: 0 }}>
                Our desire is for you to be happy among family and friends with full social participation.
              </p>
            </div>

            <div className="card text-center" style={{ padding: 'var(--space-lg)', display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
              <div className="card-icon" style={{ margin: '0 auto var(--space-sm) auto', color: 'var(--accent)', backgroundColor: 'rgba(217, 119, 6, 0.08)' }}>
                <Smile size={28} />
              </div>
              <h3 style={{ marginBottom: 'var(--space-xs)' }}>Confidence & Peace</h3>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.6', color: 'var(--text-secondary)', margin: 0 }}>
                Every person deserves to enjoy life free of anxiety and worry, being happy and confident about their place among family and friends.
              </p>
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
