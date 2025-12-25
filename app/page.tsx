'use client';

import { useState, useEffect, useRef } from 'react';
import type { CSSProperties } from 'react';

export default function HomePage() {
  return (
    <div style={styles.page}>
      <HeroSection />
      <ServicesSection />
      <StatsSection />
      <FeaturedWorkSection />
      <BrandsSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}

function HeroSection() {
  return (
    <section style={styles.hero}>
      <div style={styles.heroVideo}>
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/OmHLohPk6b0?autoplay=1&mute=1&loop=1&playlist=OmHLohPk6b0&controls=0&rel=0&modestbranding=1"
          title="Hero Video"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          style={styles.iframe}
        />
      </div>
      <div style={styles.heroOverlay}></div>
      <div style={styles.heroGrid}></div>
      
      <PixelPattern 
        style={{ 
          position: 'absolute',
          top: '104px', 
          right: '180px',
          opacity: 0.6,
          transform: 'rotate(4.96deg)',
          animation: 'float 6s ease-in-out infinite',
          zIndex: 3
        }} 
        size="large" 
      />
      
      <PixelPattern 
        style={{ 
          position: 'absolute',
          bottom: '112px', 
          left: '126px',
          opacity: 0.5,
          transform: 'rotate(-2.92deg)',
          animation: 'float 8s ease-in-out infinite',
          zIndex: 3
        }} 
        size="medium" 
      />
      
      <div style={styles.heroContent} className="hero-content">
        <h1 style={styles.heroHeading} className="hero-heading">
          <div style={styles.heroLine1}>CREATIVITY.</div>
          <div style={styles.heroLine2}>PIXEL PERFECT.</div>
        </h1>
        <p style={styles.heroDescription}>
          We build modern, pixel-sharp campaigns for brands that want to stand out.
        </p>
        <div style={styles.heroButtons} className="hero-buttons">
          <button style={styles.primaryButton} className="btn btn--primary">START A PROJECT</button>
          <button style={styles.secondaryButton} className="btn btn--outline">VIEW PORTFOLIO</button>
        </div>
        <div style={styles.heroDots}>
          {[0, 1, 2, 3, 4].map((i) => (
            <div key={i} style={{
              ...styles.dot,
              opacity: i === 0 ? 0.77 : i === 1 ? 0.56 : i === 2 ? 0.3 : i === 3 ? 0.33 : 0.41
            }}></div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const services = [
    {
      icon: '🎨',
      title: 'Creative & Branding',
      description: 'Building distinctive brand identities that resonate with your audience.',
      hasPattern: true,
    },
    {
      icon: '✏️',
      title: 'Graphic Design',
      description: 'Pixel-perfect designs that blend creativity with strategy.',
      hasPattern: true,
    },
    {
      icon: '📷',
      title: 'Photography',
      description: 'Studio-quality imagery that captures your brand\'s essence.',
      hasPattern: true,
    },
    {
      icon: '🎥',
      title: 'Videography',
      description: 'Cinematic productions that engage audiences and bring stories to life.',
      hasPattern: true,
    },
    {
      icon: '📱',
      title: 'Social Media Advertising',
      description: 'Data-driven campaigns that amplify your reach and drive results.',
      hasPattern: true,
    },
    {
      icon: '📊',
      title: 'Campaign Strategy',
      description: 'Comprehensive marketing strategies designed to achieve your goals.',
      hasPattern: true,
    },
  ];

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.sectionHeader}>
          <h2 style={styles.sectionTitle}>
            Our <span style={styles.gradientText}>Services</span>
          </h2>
          <p style={styles.sectionSubtitle}>
            Comprehensive creative solutions tailored to elevate your brand and drive impactful results.
          </p>
        </div>
        <div style={styles.servicesGrid}>
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ icon, title, description, hasPattern }: { icon: React.ReactNode; title: string; description: string; hasPattern?: boolean }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      style={{
        ...styles.serviceCard,
        transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
        borderColor: isHovered ? '#5DCDDB' : 'rgba(93, 205, 219, 0.1)',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={styles.serviceIcon}>{icon}</div>
      <h3 style={styles.serviceTitle}>{title}</h3>
      <p style={styles.serviceDescription}>{description}</p>
      {hasPattern && (
        <PixelPattern 
          style={{ 
            position: 'absolute',
            top: '24px', 
            right: '24px',
            opacity: 0.3
          }} 
          size="small" 
        />
      )}
      <div style={{
        ...styles.serviceAccent,
        width: isHovered ? '100%' : '0',
      }}></div>
    </div>
  );
}

// Count-up animation hook
function useCountUp(end: string | number, duration: number = 2000, startCounting: boolean = false): number {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startCounting) return;
    
    const startTime = Date.now();
    const endValue = typeof end === 'string' ? parseInt(end.replace(/\D/g, '')) : Number(end);
    
    const timer = setInterval(() => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * endValue);
      
      setCount(currentCount);
      
      if (progress === 1) {
        clearInterval(timer);
        setCount(endValue);
      }
    }, 16); // ~60fps
    
    return () => clearInterval(timer);
  }, [end, duration, startCounting]);
  
  return count;
}

function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const stats = [
    { value: '12', suffix: '+', label: 'YEARS EXPERIENCE' },
    { value: '500', suffix: '+', label: 'HAPPY CLIENTS' },
    { value: '1200', suffix: '+', label: 'CAMPAIGNS' },
    { value: '50', suffix: 'M+', label: 'AUDIENCE REACH' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} style={styles.statsSection}>
      <div style={styles.container}>
        <div style={styles.statsGrid}>
          {stats.map((stat, index) => (
            <StatItem 
              key={index} 
              {...stat} 
              startCounting={isVisible}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatItem({ value, suffix, label, startCounting, delay }: { value: string | number; suffix?: string; label: string; startCounting?: boolean; delay?: number }) {
  const count = useCountUp(value, 2000, startCounting);

  return (
    <div style={styles.statItem}>
      <div style={{...styles.statValue, ...styles.gradientText}}>
        {count}{suffix}
      </div>
      <div style={styles.statLabel}>{label}</div>
    </div>
  );
}

function FeaturedWorkSection() {
  const projects = [
    {
      category: 'Branding & Photography',
      title: 'Luxury Fashion Campaign',
      client: 'Elegance Co.',
      image: '/images/featured-fashion.jpg',
    },
    {
      category: 'Photography & Video',
      title: 'Modern Architecture Series',
      client: 'Urban Spaces',
      image: '/images/featured-architecture.jpg',
    },
    {
      category: 'Photography',
      title: 'Editorial Fashion Story',
      client: 'Vogue Magazine',
      image: '/images/featured-editorial.jpg',
    },
  ];

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.sectionHeader}>
          <h2 style={styles.sectionTitle}>
            Featured <span style={styles.gradientText}>Work</span>
          </h2>
          <p style={styles.sectionSubtitle}>
            A selection of our most impactful projects across various creative disciplines.
          </p>
        </div>
        <div style={styles.portfolioGrid}>
          {projects.map((project, index) => (
            <PortfolioCard key={index} {...project} />
          ))}
        </div>
        <div style={styles.portfolioButtonWrapper}>
          <button style={styles.portfolioButton} className="btn btn--outline">View Full Portfolio</button>
        </div>
      </div>
    </section>
  );
}

function PortfolioCard({ category, title, client, image }: { category: string; title: string; client: string; image: string }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      style={styles.portfolioCard}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={styles.portfolioImage}>
        {image ? <img src={image} alt={title} style={styles.portfolioImg} /> : null}
      </div>
      <div style={styles.portfolioGradient}></div>
      <div style={{
        ...styles.portfolioHover,
        opacity: isHovered ? 1 : 0,
      }}>
        <div style={styles.portfolioIcon}>🔍</div>
      </div>
      <div style={styles.portfolioContent}>
        <div style={styles.portfolioCategory}>{category}</div>
        <h3 style={styles.portfolioTitle}>{title}</h3>
        <p style={styles.portfolioClient}>{client}</p>
      </div>
    </div>
  );
}

function BrandsSection() {
  const brands = ['NIKE', 'ADIDAS', 'APPLE', 'GOOGLE', 'AMAZON', 'MICROSOFT', 'META', 'SPOTIFY', 'NETFLIX', 'TESLA'];
  
  return (
    <section style={styles.brandsSection}>
      <div style={styles.container}>
        <h3 style={styles.brandsTitle}>Trusted By Leading Brands</h3>
        <div style={styles.brandsWrapper}>
          <div style={styles.brandsTrack}>
            {[...brands, ...brands].map((brand, index) => (
              <div key={index} style={styles.brandItem}>{brand}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  // Carousel showing 3 testimonials at a time, with cloned edges for seamless looping
  const testimonials = [
    {
      quote: "Raster Media transformed our brand identity completely. Their attention to detail and creative vision exceeded all expectations.",
      name: 'Sarah Johnson',
      role: 'CEO, TechFlow Inc',
      avatar: '/images/avatars/sarah.jpg',
    },
    {
      quote: "Working with this team has been an absolute pleasure. They brought our vision to life with stunning precision.",
      name: 'Michael Chen',
      role: 'Marketing Director, Luxe Brands',
      avatar: '/images/avatars/michael.jpg',
    },
    {
      quote: "Their pixel-perfect approach and premium quality output has made them our go-to creative partner.",
      name: 'Emma Rodriguez',
      role: 'Founder, Studio Collective',
      avatar: '/images/avatars/emma.jpg',
    },
    {
      quote: "Professional, creative and results-driven—Raster Media delivered more than we imagined.",
      name: 'David Lee',
      role: 'Head of Marketing, Nova Retail',
      avatar: '/images/avatars/david.jpg',
    },
    {
      quote: "Exceptional team and flawless execution. Our campaign saw record engagement after launch.",
      name: 'Priya Patel',
      role: 'CMO, FreshLeaf',
      avatar: '/images/avatars/priya.jpg',
    },
  ];

  function getVisible() {
    if (typeof window === 'undefined') return 3;
    const w = window.innerWidth;
    if (w < 600) return 1;
    if (w < 1000) return 2;
    return 3;
  }

  const [visible, setVisible] = useState(getVisible);
  const slideWidth = 100 / visible; // percent

  // build cloned list for seamless infinite scrolling
  const items = [
    ...testimonials.slice(-visible),
    ...testimonials,
    ...testimonials.slice(0, visible),
  ];

  const baseIndex = visible; // starting offset into items
  const [index, setIndex] = useState(baseIndex);
  const [isPaused, setIsPaused] = useState(false);
  const [isAnimating, setIsAnimating] = useState(true);
  const length = testimonials.length;
  const trackRef = useRef(null);

  // keep visible in sync with viewport
  useEffect(() => {
    const onResize = () => {
      const nv = getVisible();
      setVisible(nv);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // snap to new base index on visible change
  useEffect(() => {
    setIsAnimating(false);
    setIndex(visible);
    setTimeout(() => setIsAnimating(true), 40);
  }, [visible]);

  // autoplay
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setIndex((i) => i + 1);
      setIsAnimating(true);
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused]);

  function prev() {
    setIndex((i) => i - 1);
    setIsAnimating(true);
  }

  function next() {
    setIndex((i) => i + 1);
    setIsAnimating(true);
  }

  function handleTransitionEnd() {
    // if we've moved into the appended clones region, snap back to real items without animation
    if (index >= baseIndex + length) {
      setIsAnimating(false);
      setIndex(baseIndex);
      // re-enable animation on next tick
      setTimeout(() => setIsAnimating(true), 40);
    }

    // if we've moved into the prepended clones region, snap to the end
    if (index <= baseIndex - 1) {
      setIsAnimating(false);
      setIndex(baseIndex + length - 1);
      setTimeout(() => setIsAnimating(true), 40);
    }
  }

  const centerIndex = index + Math.floor(visible / 2);

  return (
    <section style={styles.testimonialsSection}>
      <div style={styles.container}>
        <div style={styles.sectionHeader}>
          <h2 style={styles.sectionTitle}>
            Client <span style={styles.gradientText}>Testimonials</span>
          </h2>
          <p style={styles.sectionSubtitle}>
            Hear what our clients have to say about working with us.
          </p>
        </div>

        <div
          style={styles.testimonialsSlider}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <button
            aria-label="Previous testimonial"
            style={{ ...styles.testimonialArrow, ...styles.testimonialArrowLeft }}
            onClick={prev}
          >
            ‹
          </button>

<div style={styles.testimonialsViewport}>
          <div
            ref={trackRef}
            onTransitionEnd={handleTransitionEnd}
            style={{
              ...styles.testimonialsTrack,
              transform: `translateX(-${index * slideWidth}%)`,
              transition: isAnimating ? 'transform 600ms cubic-bezier(0.2,0.8,0.2,1)' : 'none',
            }}
          >
            {items.map((testimonial, i) => {
              const isCenter = i === centerIndex;
              return (
                <div
                  key={`${testimonial.name}-${i}`}
                  style={{
                    ...styles.testimonialSlide,
                    flex: `0 0 ${slideWidth}%`,
                    ...(isCenter ? styles.testimonialActive : styles.testimonialInactive),
                  }}
                  aria-hidden={!isCenter && (i < index || i > index + visible - 1)}
                >
                  <TestimonialCard {...testimonial} />
                </div>
              );
            })}
          </div>
          </div>

          <button
            aria-label="Next testimonial"
            style={{ ...styles.testimonialArrow, ...styles.testimonialArrowRight }}
            onClick={next}
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ quote, name, role, avatar }: { quote: string; name: string; role: string; avatar?: string }) {
  return (
    <div style={styles.testimonialCard}>
      <div style={styles.quoteIcon}>❝</div>
      <p style={styles.testimonialQuote}>{quote}</p>
      <div style={styles.testimonialAuthor}>
        <div style={styles.authorAvatar}>
          {avatar ? (
            <img src={avatar} alt={name} style={styles.authorAvatarImg} />
          ) : null}
        </div>
        <div>
          <div style={styles.authorName}>{name}</div>
          <div style={styles.authorRole}>{role}</div>
        </div>
      </div>
    </div>
  );
}

function CTASection() {
  return (
    <section style={styles.ctaSection}>
      <PixelPattern 
        style={{ 
          position: 'absolute',
          top: '32px', 
          right: '32px',
          opacity: 0.3,
          zIndex: 0
        }} 
        size="large" 
      />
      <PixelPattern 
        style={{ 
          position: 'absolute',
          bottom: '32px', 
          left: '32px',
          opacity: 0.3,
          zIndex: 0
        }} 
        size="medium" 
      />
      <div style={styles.ctaContent}>
        <h2 style={styles.ctaHeading}>
          Ready to Create Something <span style={styles.gradientText}>Extraordinary?</span>
        </h2>
        <p style={styles.ctaDescription}>
          Let's collaborate and bring your vision to life with pixel-perfect precision.
        </p>
        <button style={styles.ctaPrimaryButton} className="btn btn--cta animate-shimmer">
          Start Your Project
        </button>
      </div>
    </section>
  );
}

function PixelPattern({ style, size = 'small' }: { style?: React.CSSProperties; size?: 'small' | 'medium' | 'large' }) {
  const gridConfig = {
    small: { rows: 3, cols: 3, pixelSize: 8, gap: 4 },
    medium: { rows: 4, cols: 4, pixelSize: 10, gap: 5 },
    large: { rows: 5, cols: 5, pixelSize: 12, gap: 6 },
  };

  const config = gridConfig[size];
  const totalPixels = config.rows * config.cols;

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${config.cols}, ${config.pixelSize}px)`,
        gap: `${config.gap}px`,
        ...style,
      }}
    >
      {Array.from({ length: totalPixels }).map((_, i) => (
        <div 
          key={i} 
          style={{
            width: `${config.pixelSize}px`,
            height: `${config.pixelSize}px`,
            background: 'linear-gradient(135deg, #5DCDDB 0%, #7DD8E5 100%)',
          }}
        ></div>
      ))}
    </div>
  );
}

const styles: Record<string, CSSProperties> = {
  page: {
    paddingTop: '72px',
  },
  container: {
    maxWidth: '1800px',
    margin: '0 auto',
    padding: '0 48px',
  },
  gradientText: {
    background: 'linear-gradient(135deg, #5DCDDB 0%, #7DD8E5 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
  hero: {
    position: 'relative',
    width: '100%',
    height: '100vh',
    minHeight: '681.6px',
    overflow: 'hidden',
  },

  heroVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 0,
  },
  iframe: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '177.77vh',
    minWidth: '100%',
    height: '56.25vw',
    minHeight: '100%',
    transform: 'translate(-50%, -50%)',
    pointerEvents: 'none',
  },
  heroOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    zIndex: 1,
  },
  heroGrid: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: 'linear-gradient(0deg, rgba(0, 0, 0, 0) 24%, rgba(93, 205, 219, 0.05) 25%, rgba(93, 205, 219, 0.05) 26%, rgba(0, 0, 0, 0) 27%, rgba(0, 0, 0, 0) 74%, rgba(93, 205, 219, 0.05) 75%, rgba(93, 205, 219, 0.05) 76%, rgba(0, 0, 0, 0) 77%), linear-gradient(90deg, rgba(0, 0, 0, 0) 24%, rgba(93, 205, 219, 0.05) 25%, rgba(93, 205, 219, 0.05) 26%, rgba(0, 0, 0, 0) 27%, rgba(0, 0, 0, 0) 74%, rgba(93, 205, 219, 0.05) 75%, rgba(93, 205, 219, 0.05) 76%, rgba(0, 0, 0, 0) 77%)',
    backgroundSize: '50px 50px',
    opacity: 0.1,
    zIndex: 2,
  },
  heroContent: {
    position: 'relative',
    zIndex: 4,
    maxWidth: '1800px',
    margin: '0 auto',
    padding: '40px 48px',
    textAlign: 'center',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heroHeading: {
    fontFamily: 'Cousine, monospace',
    fontWeight: 700,
    fontSize: '77.712px',
    lineHeight: '85px',
    letterSpacing: '-1.9428px',
    marginBottom: '30px',
  },
  heroLine1: {
    color: '#FFFFFF',
    marginBottom: '24px',
  },
  heroLine2: {
    background: 'linear-gradient(135deg, #5DCDDB 0%, #7DD8E5 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    filter: 'drop-shadow(0px 0px 80px rgba(93, 205, 219, 0.5))',
  },
  heroDescription: {
    fontFamily: 'Cousine, monospace',
    fontSize: '20px',
    lineHeight: '28px',
    letterSpacing: '1px',
    color: 'rgba(255, 255, 255, 0.8)',
    maxWidth: '1800px',
    marginBottom: '40px',
  },
  heroButtons: {
    display: 'flex',
    gap: '24px',
    marginBottom: '60px',
  },
  primaryButton: {
    padding: '19.4px 40px',
    background: '#5DCDDB',
    border: 'none',
    fontFamily: 'Cousine, monospace',
    fontSize: '16px',
    fontWeight: 700,
    letterSpacing: '0.8px',
    color: '#000000',
    cursor: 'pointer',
    transition: 'transform 0.3s',
  },
  secondaryButton: {
    padding: '21px 42.6px',
    background: 'transparent',
    border: '1.6px solid #5DCDDB',
    fontFamily: 'Cousine, monospace',
    fontSize: '16px',
    fontWeight: 700,
    letterSpacing: '0.8px',
    color: '#FFFFFF',
    cursor: 'pointer',
    transition: 'all 0.3s',
  },
  heroDots: {
    display: 'flex',
    gap: '28px',
    marginTop: '40px',
  },
  dot: {
    width: '12px',
    height: '12px',
    background: '#5DCDDB',
    borderRadius: '0',
  },
  section: {
    padding: '128px 0',
  },
  sectionHeader: {
    textAlign: 'center',
    marginBottom: '64px',
  },
  sectionTitle: {
    fontSize: '51.808px',
    fontWeight: 700,
    lineHeight: '60px',
    letterSpacing: '-0.51808px',
    marginBottom: '16px',
    color: '#FFFFFF',
  },
  sectionSubtitle: {
    fontSize: '18px',
    lineHeight: '31px',
    color: '#A0A0A0',
    maxWidth: '1800px',
    margin: '0 auto',
  },
  servicesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '24px',
  },
  serviceCard: {
    position: 'relative',
    padding: '32px',
    background: 'rgba(37, 37, 37, 0.6)',
    border: '0.8px solid rgba(93, 205, 219, 0.1)',
    minHeight: '293.5px',
    transition: 'all 0.3s',
    cursor: 'pointer',
  },
  serviceIcon: {
    width: '56px',
    height: '56px',
    background: 'linear-gradient(135deg, rgba(93, 205, 219, 0.2) 0%, rgba(125, 216, 229, 0.2) 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '28px',
    marginBottom: '24px',
  },
  serviceTitle: {
    fontSize: '36px',
    fontWeight: 600,
    lineHeight: '43px',
    color: '#FFFFFF',
    marginBottom: '16px',
  },
  serviceDescription: {
    fontSize: '14px',
    lineHeight: '23px',
    color: '#A0A0A0',
  },
  serviceAccent: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    height: '4px',
    background: 'linear-gradient(180deg, #5DCDDB 0%, #7DD8E5 100%)',
    transition: 'width 0.3s',
  },
  statsSection: {
    padding: '128px 0',
    background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #1A1A1A 50%, rgba(0, 0, 0, 0) 100%)',
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '80px',
  },
  statItem: {
    textAlign: 'center',
  },
  statValue: {
    fontSize: '64px',
    fontWeight: 700,
    lineHeight: '72px',
    marginBottom: '16px',
  },
  statLabel: {
    fontSize: '14px',
    lineHeight: '20px',
    letterSpacing: '0.7px',
    textTransform: 'uppercase',
    color: '#6B6B6B',
  },
  portfolioGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '24px',
    marginBottom: '48px',
  },
  portfolioCard: {
    position: 'relative',
    height: '400px',
    background: '#252525',
    overflow: 'hidden',
    cursor: 'pointer',
    border: '0.8px solid rgba(93, 205, 219, 0.1)',
  },
  portfolioImage: {
    width: '100%',
    height: '100%',
    background: 'linear-gradient(45deg, #2A2A2A 0%, #3A3A3A 100%)',
    overflow: 'hidden',
  },
  portfolioImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
  },
  portfolioGradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.2) 50%, rgba(0, 0, 0, 0) 100%)',
    opacity: 0.6,
  },
  portfolioHover: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'opacity 0.3s',
    background: 'rgba(93, 205, 219, 0.1)',
  },
  portfolioIcon: {
    width: '64px',
    height: '64px',
    background: '#5DCDDB',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '28px',
  },
  portfolioContent: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    padding: '24px',
    width: '100%',
  },
  portfolioCategory: {
    fontSize: '12px',
    lineHeight: '16px',
    letterSpacing: '0.6px',
    textTransform: 'uppercase',
    color: '#5DCDDB',
    marginBottom: '8px',
  },
  portfolioTitle: {
    fontSize: '36px',
    fontWeight: 600,
    lineHeight: '43px',
    color: '#FFFFFF',
    marginBottom: '8px',
  },
  portfolioClient: {
    fontSize: '14px',
    lineHeight: '20px',
    color: '#A0A0A0',
  },
  portfolioButtonWrapper: {
    display: 'flex',
    justifyContent: 'center',
  },
  portfolioButton: {
    padding: '14.4px 25.6px',
    background: 'transparent',
    border: '1.6px solid #5DCDDB',
    color: '#5DCDDB',
    fontSize: '16px',
    lineHeight: '24px',
    cursor: 'pointer',
    transition: 'all 0.3s',
  },
  brandsSection: {
    padding: '128px 0',
  },
  brandsTitle: {
    fontSize: '36px',
    fontWeight: 600,
    lineHeight: '43px',
    textAlign: 'center',
    color: '#FFFFFF',
    marginBottom: '100px',
  },
  brandsWrapper: {
    overflow: 'hidden',
    position: 'relative',
  },
  brandsTrack: {
    display: 'flex',
    gap: '64px',
    animation: 'slideLeft 30s linear infinite',
  },
  brandItem: {
    fontFamily: 'Cousine, monospace',
    fontSize: '32px',
    lineHeight: '48px',
    letterSpacing: '1.6px',
    color: 'rgba(255, 255, 255, 0.3)',
    whiteSpace: 'nowrap',
  },
  testimonialsSection: {
    padding: '100px 0',
    background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #1A1A1A 50%, rgba(0, 0, 0, 0) 100%)',
  },
  /* Slider styles for testimonials */
  testimonialsSlider: {
    position: 'relative',
    overflow: 'visible',
    width: '100%',
    maxWidth: '1100px',
    marginTop: '24px',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '0',
  },
  testimonialsTrack: {
    display: 'flex',
    gap: '0',
    alignItems: 'stretch',
    transition: 'transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)',
    willChange: 'transform',
  },
  testimonialsViewport: {
    overflow: 'hidden',
    width: '100%',
  },
  testimonialSlide: {
    flex: '0 0 33.3333%',
    boxSizing: 'border-box',
    padding: '0 12px',
    transition: 'transform 0.4s ease, box-shadow 0.4s ease, opacity 0.4s ease',
    display: 'flex',
    alignItems: 'stretch',
  },
  testimonialActive: {
    transform: 'scale(1.04)',
    boxShadow: '0 12px 30px rgba(0,0,0,0.6)',
    opacity: 1,
  },
  testimonialInactive: {
    transform: 'scale(0.98)',
    boxShadow: 'none',
    opacity: 0.82,
  },
  testimonialArrow: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 8,
    background: '#5DCDDB',
    color: '#000000',
    border: 'none',
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    fontSize: '22px',
    boxShadow: '0 8px 20px rgba(93,205,219,0.16)',
    transition: 'transform 0.18s ease, box-shadow 0.18s ease',
  },
  testimonialArrowLeft: {
    left: '-56px',
  },
  testimonialArrowRight: {
    right: '-56px',
  },
  testimonialCard: {
    padding: '24px',
    background: 'rgba(37, 37, 37, 0.6)',
    border: '0.8px solid rgba(93, 205, 219, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: '16px',
    minHeight: '240px',
  },
  quoteIcon: {
    fontSize: '28px',
    color: '#5DCDDB',
  },
  testimonialQuote: {
    fontSize: '17px',
    fontStyle: 'italic',
    lineHeight: '26px',
    color: '#A0A0A0',
    minHeight: '100px',
    marginBottom: '8px',
  },
  testimonialAuthor: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
  },
  authorAvatar: {
    width: '56px',
    height: '56px',
    background: 'linear-gradient(180deg, #5DCDDB 0%, #7DD8E5 100%)',
    borderRadius: '50%',
    overflow: 'hidden',
    flexShrink: 0,
  },
  authorAvatarImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
  },
  authorName: {
    fontSize: '25.904px',
    fontWeight: 600,
    lineHeight: '34px',
    color: '#FFFFFF',
  },
  authorRole: {
    fontSize: '14px',
    lineHeight: '20px',
    color: '#6B6B6B',
  },
  ctaSection: {
    position: 'relative',
    margin: '0 48px 128px',
    padding: '128px 208px',
    background: 'rgba(37, 37, 37, 0.6)',
    border: '0.8px solid rgba(93, 205, 219, 0.1)',
    textAlign: 'center',
  },
  ctaContent: {
    position: 'relative',
    zIndex: 1,
  },
  ctaHeading: {
    fontSize: '51.808px',
    fontWeight: 700,
    lineHeight: '60px',
    letterSpacing: '-0.51808px',
    marginBottom: '24px',
    color: '#FFFFFF',
  },
  ctaDescription: {
    fontSize: '20px',
    lineHeight: '28px',
    color: '#A0A0A0',
    marginBottom: '40px',
  },
  ctaPrimaryButton: {
    padding: '17.6px 32px',
    background: 'linear-gradient(180deg, #5DCDDB 0%, #7DD8E5 100%)',
    border: 'none',
    fontSize: '18px',
    lineHeight: '28px',
    color: '#FFFFFF',
    cursor: 'pointer',
    transition: 'transform 0.3s',
    fontWeight: 600,
  },
};