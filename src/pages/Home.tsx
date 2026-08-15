import { useState, useEffect } from 'react';
import { Users, Heart, Smile, ChevronLeft, ChevronRight } from 'lucide-react';

const stories = [
  {
    id: 1,
    name: "Anura Mahawewa",
    role: "Farmer & Father",
    image: "https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5?auto=format&fit=crop&w=400&q=80",
    story: "Anura lost his right leg in a farming machinery accident. After being fitted with a lightweight prosthetic limb at our Mahawa center, he was able to return to his fields within three weeks. Today, he supports his family of four as an active farmer."
  },
  {
    id: 2,
    name: "Kumari Perera",
    role: "School Student",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
    story: "Born with a congenital limb deformity, Kumari had to be carried to school by her parents. We fitted her with an orthotic brace and custom footwear. Now, she walks to school independently and dreams of becoming a schoolteacher."
  },
  {
    id: 3,
    name: "Sugath Silva",
    role: "Local Carpenter",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    story: "Sugath suffered a severe spinal injury that left him with partial paralysis and difficulty sitting. We provided him with a custom-engineered wheelchair and posture seating. He has reopened his carpentry workshop and works from his specialized chair."
  },
  {
    id: 4,
    name: "Dilshan Alwis",
    role: "Youth Athlete",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    story: "Dilshan was amputated below the knee following an illness. With our high-activity modular limb, Dilshan returned to playing cricket and running. He is now training to participate in local parasports events."
  },
  {
    id: 5,
    name: "Nimali Fernando",
    role: "Mother of Two",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    story: "Nimali developed non-healing diabetic foot ulcers, making it impossible to walk or take care of her household. We treated her ulcers and provided her with bespoke orthotic footwear. She is now fully mobile and ulcer-free."
  },
  {
    id: 6,
    name: "Priyantha Jayasuriya",
    role: "Primary School Teacher",
    image: "https://images.unsplash.com/photo-1500048993953-d23a436266cf?auto=format&fit=crop&w=400&q=80",
    story: "Priyantha lost his arm in a road accident. We fabricated a cosmetic and functional upper-limb prosthesis for him, restoring his confidence. He continues his career teaching local school children."
  }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedStory, setSelectedStory] = useState<any>(null);

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

      {/* Services and Organization Overview Section */}
      <section className="section-alt" style={{ padding: 'var(--space-xl) 0' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'start', gap: 'var(--space-xl)' }}>
            {/* Left Column: Our Services */}
            <div>
              <span className="badge">Expertise</span>
              <h2 className="section-title" style={{ marginTop: 'var(--space-xs)', marginBottom: 'var(--space-md)' }}>Our Services</h2>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.7', marginBottom: 'var(--space-lg)' }}>
                We specialise in physical rehabilitation of chronic incurable physical disabilities. There are four main areas where we undertake service provision but we have the capacity to provide support beyond these four. Our main areas of expertise are:
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
                {/* Service 1 */}
                <div style={{ display: 'flex', gap: 'var(--space-sm)' }}>
                  <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--primary)', opacity: 0.8, lineHeight: 1.2, minWidth: '40px' }}>01</div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--primary-dark)', marginBottom: '4px' }}>Provision of artificial limbs</h4>
                    <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', margin: 0 }}>
                      For people with upper and lower limb loss, initial physiotherapy and training to use these devices and long term follow up. We use modern modular systems which are easy to maintain and highly adjustable. Most of our components are fabricated on site at our main facility at Mahawa, using appropriate cost effective technology. However, we have access to sources in the United Kingdom which enables us to obtain more advanced components for people who can afford the costs.
                    </p>
                  </div>
                </div>

                {/* Service 2 */}
                <div style={{ display: 'flex', gap: 'var(--space-sm)' }}>
                  <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--primary)', opacity: 0.8, lineHeight: 1.2, minWidth: '40px' }}>02</div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--primary-dark)', marginBottom: '4px' }}>Posture and Mobility</h4>
                    <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', margin: 0 }}>
                      For disabled children and adults who have lost independent mobility and proper sitting balance. This includes provision of manual and electric powered wheelchairs and seating devices. We can select from a wide range of highly adjustable wheelchairs and childrens' buggies. After a thorough clinical assessment by a qualified clinician, we can also fabricate customised seating devices or use off shelf modular devices to improve the comfort and function of the disabled user.
                    </p>
                  </div>
                </div>

                {/* Service 3 */}
                <div style={{ display: 'flex', gap: 'var(--space-sm)' }}>
                  <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--primary)', opacity: 0.8, lineHeight: 1.2, minWidth: '40px' }}>03</div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--primary-dark)', marginBottom: '4px' }}>Assistive devices including footwear and splints</h4>
                    <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', margin: 0 }}>
                      For people with physical disabilities resulting from nerve, muscle, bone or joint damage. Most of our appliances are custom made but we also have a selection of off shelf modular devices for use in people with mild or moderate disabilities.
                    </p>
                  </div>
                </div>

                {/* Service 4 */}
                <div style={{ display: 'flex', gap: 'var(--space-sm)' }}>
                  <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--primary)', opacity: 0.8, lineHeight: 1.2, minWidth: '40px' }}>04</div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--primary-dark)', marginBottom: '4px' }}>Management of chronic non healing foot ulcers</h4>
                    <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', margin: 0 }}>
                      Which are due to nerve damage associated with diabetes, spinal injury etc is undertaken using customised insoles provided with bespoke or off shelf footwear.
                    </p>
                  </div>
                </div>
              </div>

              <p style={{ fontSize: '0.95rem', fontStyle: 'italic', color: 'var(--primary-dark)', fontWeight: 600, marginTop: 'var(--space-md)', paddingLeft: '40px', borderLeft: '3px solid var(--primary)' }}>
                All this is undertaken by a team of qualified and well trained professionals who are supported by a senior highly specialised Consultant in Rehabilitation Medicine.
              </p>
            </div>

            {/* Right Column: Organization Info and Stats */}
            <div>
              <span className="badge badge-amber">Our Reach</span>
              <h2 className="section-title" style={{ marginTop: 'var(--space-xs)', marginBottom: 'var(--space-md)' }}>We are a World Wide Charity Organization</h2>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.7', marginBottom: 'var(--space-md)' }}>
                We strived hard during the last 25 years to establish a premier open access Physical Rehabilitation service which is modern, cost effective and affordable. Every penny or rupee donated by benevolent donors and institutions is used entirely for service provision. We avoid waste by recycling anything that is recyclable.
              </p>
              <a href="#/about-us" className="btn btn-secondary" style={{ marginBottom: 'var(--space-lg)' }}>
                More About Us
              </a>

              {/* Stats Grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: 'var(--space-md)',
                marginTop: 'var(--space-md)'
              }}>
                {/* Stat 1 */}
                <div className="card" style={{ padding: 'var(--space-sm)', textAlign: 'center', backgroundColor: 'var(--bg-card)' }}>
                  <img 
                    src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=400&q=80" 
                    alt="Volunteers" 
                    style={{ width: '100%', height: '120px', objectFit: 'cover', borderRadius: 'var(--radius-sm)', marginBottom: '8px' }} 
                  />
                  <h4 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary-dark)', margin: '4px 0' }}>300</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0, fontWeight: 600 }}>Volunteers</p>
                </div>

                {/* Stat 2 */}
                <div className="card" style={{ padding: 'var(--space-sm)', textAlign: 'center', backgroundColor: 'var(--bg-card)' }}>
                  <img 
                    src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=400&q=80" 
                    alt="People We Helped" 
                    style={{ width: '100%', height: '120px', objectFit: 'cover', borderRadius: 'var(--radius-sm)', marginBottom: '8px' }} 
                  />
                  <h4 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--secondary-dark)', margin: '4px 0' }}>12,000</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0, fontWeight: 600 }}>People We Helped</p>
                </div>

                {/* Stat 3 */}
                <div className="card" style={{ padding: 'var(--space-sm)', textAlign: 'center', backgroundColor: 'var(--bg-card)' }}>
                  <img 
                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=400&q=80" 
                    alt="Funds Raised" 
                    style={{ width: '100%', height: '120px', objectFit: 'cover', borderRadius: 'var(--radius-sm)', marginBottom: '8px' }} 
                  />
                  <h4 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--accent)', margin: '4px 0' }}>£1,200,000</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0, fontWeight: 600 }}>Funds Raised</p>
                </div>

                {/* Stat 4 */}
                <div className="card" style={{ padding: 'var(--space-sm)', textAlign: 'center', backgroundColor: 'var(--bg-card)' }}>
                  <img 
                    src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=400&q=80" 
                    alt="Staff" 
                    style={{ width: '100%', height: '120px', objectFit: 'cover', borderRadius: 'var(--radius-sm)', marginBottom: '8px' }} 
                  />
                  <h4 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary-dark)', margin: '4px 0' }}>30</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0, fontWeight: 600 }}>Staff</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donor Support Section */}
      <section className="section-alt" style={{ backgroundColor: 'var(--bg-main)', borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
          
          {/* Top Part: Why We Need Support */}
          <div style={{ marginBottom: 'var(--space-xl)', textAlign: 'center' }}>
            <span className="badge badge-amber">Support Us</span>
            <h2 className="section-title center" style={{ marginTop: 'var(--space-xs)', marginBottom: 'var(--space-sm)' }}>
              Why we need the support of donors like you...
            </h2>
            <p style={{ 
              fontSize: '1.2rem', 
              fontWeight: 600, 
              color: 'var(--primary-dark)', 
              maxWidth: '800px', 
              margin: '0 auto var(--space-md) auto',
              lineHeight: '1.6'
            }}>
              Your support is crucial because the number of people we can care for is dependent entirely on your donations.
            </p>
            
            <div style={{
              backgroundColor: 'var(--primary-subtle)',
              borderLeft: '4px solid var(--primary)',
              borderRadius: 'var(--radius-sm)',
              padding: 'var(--space-md)',
              maxWidth: '800px',
              margin: '0 auto',
              textAlign: 'left'
            }}>
              <h4 style={{ color: 'var(--primary-dark)', fontWeight: 700, marginBottom: '6px', fontSize: '1.05rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                ➔ We help nonprofits become more effective
              </h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', margin: 0, lineHeight: '1.6' }}>
                Being a non-profit organisation means we are able to re-invest all earnings in the Foundation whilst providing an affordable service. The beneficiaries are our staff and service users.
              </p>
            </div>
          </div>

          <div className="divider" style={{ margin: 'var(--space-xl) 0' }} />

          {/* Bottom Part: Select Your Donation Method */}
          <div className="grid-2" style={{ alignItems: 'center', gap: 'var(--space-xl)' }}>
            {/* Left Column: Text info */}
            <div>
              <h3 style={{ fontSize: '2rem', color: 'var(--primary-dark)', marginBottom: 'var(--space-sm)' }}>
                Select your donation method
              </h3>
              <h4 style={{ fontSize: '1.15rem', color: 'var(--text-primary)', fontWeight: 600, lineHeight: '1.5', marginBottom: 'var(--space-sm)' }}>
                A regular basic monthly donation or one-off premium donation, whichever is most convenient to you
              </h4>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.7', margin: 0 }}>
                A small monthly donation by bank standing order is the most convenient way for most people to donate. Five British Pounds or five hundred rupees a month can go a long way if all of you consider this charitable option. All donations are accounted for transparently.
              </p>
            </div>

            {/* Right Column: Donation Cards */}
            <div className="donation-cards-grid">
              
              {/* Card 1: Regular Basic */}
              <div className="card" style={{ 
                padding: 0, 
                backgroundColor: 'var(--bg-card)', 
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                boxShadow: 'var(--shadow-md)',
                transition: 'all var(--transition-normal)'
              }}>
                <div style={{ 
                  backgroundColor: 'var(--primary)', 
                  color: '#ffffff', 
                  padding: '10px var(--space-sm)', 
                  fontSize: '0.8rem', 
                  fontWeight: 700, 
                  letterSpacing: '0.05em', 
                  textTransform: 'uppercase',
                  textAlign: 'center'
                }}>
                  Regular Basic
                </div>
                <div style={{ padding: 'var(--space-md)', textAlign: 'center', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <p style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--primary-dark)', margin: 0, lineHeight: '1.4' }}>
                    Monthly donation of <span style={{ color: 'var(--accent)', display: 'block', fontSize: '1.8rem', marginTop: '8px' }}>£5 / SLR500</span>
                  </p>
                </div>
              </div>

              {/* Card 2: Premium */}
              <div className="card" style={{ 
                padding: 0, 
                backgroundColor: 'var(--bg-card)', 
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                boxShadow: 'var(--shadow-md)',
                transition: 'all var(--transition-normal)'
              }}>
                <div style={{ 
                  backgroundColor: 'var(--secondary)', 
                  color: '#ffffff', 
                  padding: '10px var(--space-sm)', 
                  fontSize: '0.8rem', 
                  fontWeight: 700, 
                  letterSpacing: '0.05em', 
                  textTransform: 'uppercase',
                  textAlign: 'center'
                }}>
                  Premium
                </div>
                <div style={{ padding: 'var(--space-md)', textAlign: 'center', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '8px' }}>
                  <p style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--secondary-dark)', margin: 0, lineHeight: '1.4' }}>
                    Cost of an artificial limb
                  </p>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', margin: 0, textTransform: 'uppercase', letterSpacing: '0.02em', lineHeight: '1.4' }}>
                    Please contact our staff at Mahawa Centre in Sri Lanka for the cost of donating an artificial limb.
                  </p>
                </div>
              </div>

            </div>
          </div>

          <div className="divider" style={{ margin: 'var(--space-xl) 0' }} />

          {/* Bottom Part 2: Bank Details & JustGiving */}
          <div className="grid-2" style={{ alignItems: 'start', gap: 'var(--space-xl)' }}>
            
            {/* Left Column: Bank Account Details */}
            <div>
              <h3 style={{ fontSize: '2rem', color: 'var(--primary-dark)', marginBottom: 'var(--space-md)' }}>
                Bank Account Details
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
                
                {/* Sri Lanka Account */}
                <div style={{ 
                  backgroundColor: 'var(--bg-card)', 
                  padding: 'var(--space-md)', 
                  borderRadius: 'var(--radius-md)', 
                  border: '1px solid var(--border-light)',
                  boxShadow: 'var(--shadow-sm)'
                }}>
                  <span className="badge" style={{ marginBottom: '8px' }}>For Sri Lanka</span>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: 700, margin: '4px 0', color: 'var(--text-primary)' }}>Bank of Ceylon</h4>
                  <p style={{ margin: '2px 0', fontSize: '0.95rem', color: 'var(--text-secondary)' }}>Mahawa Branch</p>
                  <p style={{ margin: '12px 0 0 0', fontSize: '1.05rem', fontWeight: 700, color: 'var(--primary-dark)' }}>
                    Account Number: <span style={{ color: 'var(--neutral-900)', fontFamily: 'monospace', letterSpacing: '0.05em' }}>83706522</span>
                  </p>
                </div>

                {/* UK Account */}
                <div style={{ 
                  backgroundColor: 'var(--bg-card)', 
                  padding: 'var(--space-md)', 
                  borderRadius: 'var(--radius-md)', 
                  border: '1px solid var(--border-light)',
                  boxShadow: 'var(--shadow-sm)'
                }}>
                  <span className="badge badge-amber" style={{ marginBottom: '8px' }}>For the UK</span>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: 700, margin: '4px 0', color: 'var(--text-primary)' }}>Hongkong and Shanghai Bank</h4>
                  <p style={{ margin: '12px 0 0 0', fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                    Account Number: <span style={{ fontWeight: 700, color: 'var(--neutral-900)', fontFamily: 'monospace', letterSpacing: '0.05em' }}>92494949</span>
                  </p>
                  <p style={{ margin: '4px 0 0 0', fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                    Sort Code: <span style={{ fontWeight: 700, color: 'var(--neutral-900)', fontFamily: 'monospace', letterSpacing: '0.05em' }}>40-43-17</span>
                  </p>
                </div>

              </div>
            </div>

            {/* Right Column: Donate via JustGiving */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%', backgroundColor: 'var(--bg-card)', padding: 'var(--space-lg)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-sm)' }}>
              <h3 style={{ fontSize: '2rem', color: 'var(--accent)', marginBottom: 'var(--space-sm)' }}>
                Donate via JustGiving
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: 'var(--space-md)' }}>
                It may be even easier for both you and us if you choose to donate via JustGiving by pressing the button below. The process is completely secure, and JustGiving will automatically reclaim the applicable tax benefit from HM Revenue and Customs on your behalf and transfer it directly to our account.
              </p>
              <div style={{ marginBottom: 'var(--space-md)' }}>
                <a 
                  href="https://www.justgiving.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn" 
                  style={{ 
                    backgroundColor: '#2e2e2e', 
                    color: '#ffffff', 
                    padding: '12px 28px', 
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.95rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    boxShadow: 'var(--shadow-sm)',
                    transition: 'all var(--transition-fast)'
                  }}
                >
                  Donate Now
                </a>
              </div>
              <h4 style={{ 
                marginTop: 'var(--space-sm)', 
                color: 'var(--primary-dark)', 
                fontWeight: 800, 
                fontSize: '1.15rem', 
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                borderTop: '1px solid var(--border-light)',
                paddingTop: 'var(--space-sm)'
              }}>
                Thank you for your donation
              </h4>
            </div>

          </div>

        </div>
      </section>

      {/* Real Stories Section */}
      <section className="section" style={{ backgroundColor: 'var(--bg-card)', padding: 'var(--space-xl) 0', borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: 'var(--space-lg)' }}>
            <span className="badge">Testimonials</span>
            <h2 className="section-title center" style={{ marginTop: 'var(--space-xs)' }}>
              Read the Real Stories from the People We Helped
            </h2>
            <p style={{ maxWidth: '600px', margin: 'var(--space-sm) auto 0 auto', color: 'var(--text-secondary)' }}>
              Hover to pause and click on any person to read their journey of recovery and independence.
            </p>
          </div>
        </div>

        <div className="marquee-container">
          <div className="marquee-track">
            {stories.map((story) => (
              <div 
                key={`story-a-${story.id}`} 
                onClick={() => setSelectedStory(story)}
                className="marquee-item"
                style={{
                  flexShrink: 0,
                  width: '180px',
                  margin: '0 15px',
                  cursor: 'pointer',
                  textAlign: 'center',
                  transition: 'all var(--transition-fast)'
                }}
              >
                <img 
                  src={story.image} 
                  alt={story.name} 
                  style={{ 
                    width: '100%', 
                    height: '180px', 
                    objectFit: 'cover', 
                    borderRadius: 'var(--radius-md)', 
                    boxShadow: 'var(--shadow-sm)',
                    border: '1px solid var(--border-light)',
                    transition: 'all var(--transition-fast)'
                  }} 
                  className="marquee-img"
                />
                <h4 style={{ fontSize: '0.95rem', fontWeight: 700, margin: '8px 0 2px 0', color: 'var(--primary-dark)' }}>
                  {story.name}
                </h4>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', margin: 0 }}>
                  {story.role}
                </p>
              </div>
            ))}
            {/* Set 2 */}
            {stories.map((story) => (
              <div 
                key={`story-b-${story.id}`} 
                onClick={() => setSelectedStory(story)}
                className="marquee-item"
                style={{
                  flexShrink: 0,
                  width: '180px',
                  margin: '0 15px',
                  cursor: 'pointer',
                  textAlign: 'center',
                  transition: 'all var(--transition-fast)'
                }}
              >
                <img 
                  src={story.image} 
                  alt={story.name} 
                  style={{ 
                    width: '100%', 
                    height: '180px', 
                    objectFit: 'cover', 
                    borderRadius: 'var(--radius-md)', 
                    boxShadow: 'var(--shadow-sm)',
                    border: '1px solid var(--border-light)',
                    transition: 'all var(--transition-fast)'
                  }} 
                  className="marquee-img"
                />
                <h4 style={{ fontSize: '0.95rem', fontWeight: 700, margin: '8px 0 2px 0', color: 'var(--primary-dark)' }}>
                  {story.name}
                </h4>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', margin: 0 }}>
                  {story.role}
                </p>
              </div>
            ))}
            {/* Set 3 */}
            {stories.map((story) => (
              <div 
                key={`story-c-${story.id}`} 
                onClick={() => setSelectedStory(story)}
                className="marquee-item"
                style={{
                  flexShrink: 0,
                  width: '180px',
                  margin: '0 15px',
                  cursor: 'pointer',
                  textAlign: 'center',
                  transition: 'all var(--transition-fast)'
                }}
              >
                <img 
                  src={story.image} 
                  alt={story.name} 
                  style={{ 
                    width: '100%', 
                    height: '180px', 
                    objectFit: 'cover', 
                    borderRadius: 'var(--radius-md)', 
                    boxShadow: 'var(--shadow-sm)',
                    border: '1px solid var(--border-light)',
                    transition: 'all var(--transition-fast)'
                  }} 
                  className="marquee-img"
                />
                <h4 style={{ fontSize: '0.95rem', fontWeight: 700, margin: '8px 0 2px 0', color: 'var(--primary-dark)' }}>
                  {story.name}
                </h4>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', margin: 0 }}>
                  {story.role}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Popup for Individual Stories */}
        {selectedStory && (
          <div 
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              backgroundColor: 'rgba(15, 23, 42, 0.6)',
              backdropFilter: 'blur(6px)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 2000,
              animation: 'modal-fade-in 0.25s ease-out'
            }} 
            onClick={() => setSelectedStory(null)}
          >
            <div 
              style={{
                backgroundColor: 'var(--bg-card)',
                borderRadius: 'var(--radius-md)',
                padding: 'var(--space-lg)',
                maxWidth: '500px',
                width: '90%',
                position: 'relative',
                boxShadow: 'var(--shadow-lg)',
                animation: 'modal-scale-up 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center'
              }} 
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedStory(null)}
                style={{
                  position: 'absolute',
                  top: '15px',
                  right: '15px',
                  background: 'none',
                  border: 'none',
                  fontSize: '1.8rem',
                  cursor: 'pointer',
                  color: 'var(--text-secondary)',
                  lineHeight: 1
                }}
              >
                &times;
              </button>
              <img 
                src={selectedStory.image} 
                alt={selectedStory.name} 
                style={{
                  width: '120px',
                  height: '120px',
                  objectFit: 'cover',
                  borderRadius: '50%',
                  marginBottom: 'var(--space-sm)',
                  border: '4px solid var(--primary-subtle)',
                  boxShadow: 'var(--shadow-sm)'
                }}
              />
              <h3 style={{ color: 'var(--primary-dark)', marginBottom: '4px', fontSize: '1.4rem' }}>{selectedStory.name}</h3>
              <span className="badge" style={{ marginBottom: 'var(--space-md)' }}>{selectedStory.role}</span>
              <p style={{ 
                fontSize: '1.05rem', 
                color: 'var(--text-primary)', 
                lineHeight: '1.7', 
                margin: 0,
                fontStyle: 'italic'
              }}>
                "{selectedStory.story}"
              </p>
            </div>
          </div>
        )}
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
