'use client';

import styles from './about.module.css';
import { useEffect, useRef } from 'react';

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <HeroSection />
      <StorySection />
      <MissionVisionSection />
      <WhyChooseUsSection />
      <BehindTheScenesSection />
      <TechnologyStackSection />
    </div>
  );
}

function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroHeading}>
          <span>Crafting </span>
          <span className="gradient-text">Pixel-Perfect</span>
          <span> Brand Experiences</span>
        </h1>
        <p className={styles.heroDescription}>
          We're a team of creative professionals dedicated to transforming ideas into reality through innovative design, strategic thinking, and flawless execution.
        </p>
      </div>
    </section>
  );
}

function StorySection() {
  return (
    <section className={styles.storySection}>
      <div className="container">
        <div className={styles.storyGrid}>
          <div className={styles.storyImage}>
            {/* Add an image at public/images/about-story.jpg or change the src to your image path */}
            <img src="/images/about-story.jpg" alt="Our Story" className={styles.storyImg} />
          </div>
          <div className={styles.storyContent}>
            <h2 className={styles.storyTitle}>Our Story</h2>
            <p className={styles.storyText}>
              Founded in 2012, Raster Media emerged from a simple belief: every brand deserves creative solutions that go beyond the ordinary. What started as a small design studio has grown into a full-service creative agency.
            </p>
            <p className={styles.storyText}>
              Our name reflects our philosophy—every pixel, every element, and every detail matters. We combine artistic vision with technical precision to deliver work that stands the test of time.
            </p>
            <div className={styles.storyPattern}>
              {Array.from({ length: 9 }).map((_, i) => (
                <div key={i} className={styles.pixel}></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MissionVisionSection() {
  return (
    <section className={styles.missionVisionSection}>
      <div className="container">
        <div className={styles.mvGrid}>
          <div className={styles.mvCard}>
            <div className={styles.mvIcon}>
              {/* mission icon (SVG, uses global blue via currentColor) */}
              <svg viewBox="0 0 64 64" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" role="img">
                <circle cx="32" cy="32" r="12" stroke="currentColor" strokeWidth="4" fill="none" />
                <circle cx="32" cy="32" r="22" stroke="currentColor" strokeWidth="4" fill="none" opacity="0.95" />
                <circle cx="32" cy="32" r="30" stroke="currentColor" strokeWidth="4" fill="none" opacity="0.8" />
              </svg>
            </div>
            <h3 className={styles.mvTitle}>Our Mission</h3>
            <p className={styles.mvText}>
              To empower brands with creative solutions that challenge conventions, inspire audiences, and deliver measurable results that exceed expectations.
            </p>
          </div>
          <div className={styles.mvCard}>
            <div className={styles.mvIcon}>
              {/* vision icon (SVG, uses global blue via currentColor) */}
              <svg viewBox="0 0 64 64" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" role="img">
                <path d="M2 32C12 12 52 12 62 32c-10 20-50 20-60 0z" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="32" cy="32" r="8" fill="currentColor" />
              </svg>
            </div>
            <h3 className={styles.mvTitle}>Our Vision</h3> 
            <p className={styles.mvText}>
              To be the world's most trusted creative partner, renowned for innovation, excellence, and our unwavering commitment to excellence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// small helper to render inline SVG icons for WhyChooseUs
function ValueIcon({ name }) {
  switch (name) {
    case 'lightbulb':
      return (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" role="img">
          <path d="M9 18h6M10 2a6 6 0 00-4 10v2a2 2 0 002 2h8a2 2 0 002-2v-2a6 6 0 00-6-10z" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'handshake':
      return (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" role="img">
          <path d="M2 12l4 4 6-6 8 8" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M14 10l-2-2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'bolt':
      return (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" role="img">
          <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'target':
      return (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" role="img">
          <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="1.8" fill="none" />
          <circle cx="12" cy="12" r="2" fill="currentColor" />
        </svg>
      );
    default:
      return null;
  }
}

function WhyChooseUsSection() {
  const values = [
    {
      icon: 'lightbulb',
      title: 'Innovation First',
      description: 'We push creative boundaries and embrace cutting-edge technologies to deliver fresh solutions.'
    },
    {
      icon: 'handshake',
      title: 'Trust & Transparency',
      description: 'Building long-term partnerships through honest communication and reliable delivery.'
    },
    {
      icon: 'bolt',
      title: 'Excellence Driven',
      description: 'Every pixel matters. We\'re committed to delivering nothing short of exceptional quality.'
    },
    {
      icon: 'target',
      title: 'Collaborative Spirit',
      description: 'Your vision combined with our expertise creates truly remarkable results.'
    }
  ];

  return (
    <section className={styles.whySection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            Why <span className="gradient-text">Choose Us</span>
          </h2>
          <p className={styles.sectionSubtitle}>
            We bring together creativity, strategy, and technology to deliver exceptional results.
          </p>
        </div>
        <div className={styles.valuesGrid}>
          {values.map((value, index) => (
            <div key={index} className={styles.valueCard}>
              <div className={styles.valueIcon}><ValueIcon name={value.icon} /></div>
              <h3 className={styles.valueTitle}>{value.title}</h3>
              <p className={styles.valueText}>{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BehindTheScenesSection() {
  return (
    <section className={styles.btsSection}>
      <div className="container">
        <h2 className={styles.btsTitle}>
          Behind <span className="gradient-text">The Scenes</span>
        </h2>
        <div className={styles.btsGrid}>
          <div className={styles.btsImage}></div>
          <div className={styles.btsImage}></div>
        </div>
      </div>
    </section>
  );
}

function TechnologyStackSection() {
  const creativeTech = [
    'Adobe InDesign',
    'Figma',
    'Adobe Premiere Pro',
    'After Effects',
    'Adobe Lightroom',
    'Cinema 4D'
  ];

  const devTech = [
    'React.js',
    'Next.js',
    'TypeScript',
    'Tailwind CSS',
    'Node.js',
    'WordPress',
    'Webflow',
    'Shopify'
  ];

  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const speedPxPerSec = 40; // slower speed for smoother motion (lower = slower)

    const setupTrack = (track) => {
      if (!track) return;
      // We duplicate items in the markup, so total scrollWidth == 2 * single set width
      const totalWidth = track.scrollWidth;
      if (!totalWidth) return;
      const singleWidth = totalWidth / 2;
      // set CSS variables used by CSS animation
      track.style.setProperty('--marquee-distance', `${singleWidth}px`);
      // compute duration from distance and speed, clamp to a reasonable minimum
      const duration = Math.max(8, singleWidth / speedPxPerSec);
      track.style.setProperty('--marquee-duration', `${duration}s`);
    };

    const ro = new ResizeObserver(() => {
      setupTrack(leftRef.current);
      setupTrack(rightRef.current);
    });

    if (leftRef.current) ro.observe(leftRef.current);
    if (rightRef.current) ro.observe(rightRef.current);

    // initial setup
    setupTrack(leftRef.current);
    setupTrack(rightRef.current);

    const onResize = () => {
      setupTrack(leftRef.current);
      setupTrack(rightRef.current);
    };

    window.addEventListener('resize', onResize);
    window.addEventListener('load', onResize);

    return () => {
      ro.disconnect();
      window.removeEventListener('resize', onResize);
      window.removeEventListener('load', onResize);
    };
  }, []);

  return (
    <section className={styles.techSection}>
      <div className={styles.container}>
        <h2 className={styles.techTitle}>Our Technology Stack</h2>
        <p className={styles.techSubtitle}>Industry-leading tools and technologies to bring your vision to life.</p>

        <div className={styles.techGroups}>
          <div className={styles.techGroup}>
            <div className={styles.groupHeader}>
              <div className={styles.groupIcon}>🎨</div>
              <div className={styles.groupTitle}>Creative &amp; Design</div>
            </div>
            <div className={styles.techRibbon}>
              <div ref={leftRef} className={`${styles.techTrack} ${styles.techTrackLeft}`} aria-hidden>
                {[...creativeTech, ...creativeTech].map((tech, i) => (
                  <div key={i} className={styles.techItem}>
                    <div className={styles.techDot}></div>
                    <span>{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.techGroup}>
            <div className={styles.groupHeader}>
              <div className={styles.groupIcon}>&lt;/&gt;</div>
              <div className={styles.groupTitle}>Development &amp; Web</div>
            </div>
            <div className={styles.techRibbon}>
              <div ref={rightRef} className={`${styles.techTrack} ${styles.techTrackRight}`} aria-hidden>
                {[...devTech, ...devTech].map((tech, i) => (
                  <div key={i} className={styles.techItem}>
                    <div className={styles.techDot}></div>
                    <span>{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className={styles.techNote}>
          Expanding into custom software development &amp; web solutions
        </div>
      </div>
    </section>
  );
}