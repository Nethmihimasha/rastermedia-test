import './globals.css';
import Link from 'next/link';
import Image from 'next/image';
import NavLinkActive from './components/NavLinkActive.client';

export const metadata = {
  title: 'Raster Media - Pixel Perfect Creative Solutions',
  description: 'Modern, pixel-sharp campaigns for brands that want to stand out',
};

import CleanBodyAttributes from './components/CleanBodyAttributes.client';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="/fonts/erbaum/Erbaum-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/erbaum/Erbaum-Bold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <style>{`
          .hero-heading { font-family: 'Erbaum', 'Cousine', monospace !important; }
          .btn { font-family: 'Erbaum', 'Cousine', monospace !important; }
        `}</style>
      </head>
      <body suppressHydrationWarning>
        <CleanBodyAttributes />
        <Header />
        <main style={styles.main}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

function Header() {
  return (
    <header style={styles.header}>
      <div style={styles.headerContainer}>
        <Link href="/" style={styles.logoLink}>
          <div style={styles.logo}>
            <Image
              src="/images/logo.png"
              alt="Raster Media Logo"
              width={180}
              height={60}
              style={styles.logoImage}
              priority
            />
          </div>
        </Link>
        <nav style={styles.nav} className="nav">
  <Link href="/" style={styles.navLink} className="nav-link">Home</Link>
  <Link href="/about_us" style={styles.navLink} className="nav-link">About</Link>
  <Link href="/services" style={styles.navLink} className="nav-link">Services</Link>
  <Link href="/portfolio" style={styles.navLink} className="nav-link">Portfolio</Link>
  <Link href="/career" style={styles.navLink} className="nav-link">Career</Link>
  <Link href="/studio" style={styles.navLink} className="nav-link">Studio</Link>
  <Link href="/contact" style={styles.navLink} className="nav-link">Contact</Link>
  
</nav>
        <NavLinkActive />
        <Link href="/contact" style={styles.ctaButton} aria-label="Get Started - Contact Us">Get Started</Link>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.footerContainer}>
        <div style={styles.footerContent}>
          <div style={styles.footerColumn}>
            <Link href="/" style={styles.footerLogoLink}>
              <Image
                src="/images/logo.png"
                alt="Raster Media Logo"
                width={300}
                height={120}
                style={styles.footerLogoImage}
              />
            </Link>
            <p style={styles.footerDesc}>
              Responsible creativity for every pixel. Building brands that resonate.
            </p>
          </div>

          <div style={styles.footerColumn}>
            <h4 style={styles.footerHeading}>Quick Links</h4>
            <ul style={styles.footerList}>
              <li><Link href="/about_us" style={styles.footerLink} className="footer-link">About</Link></li>
              <li><Link href="/services" style={styles.footerLink} className="footer-link">Services</Link></li>
              <li><Link href="/portfolio" style={styles.footerLink} className="footer-link">Portfolio</Link></li>
              <li><Link href="/careers" style={styles.footerLink} className="footer-link">Career</Link></li>
              <li><Link href="/booking" style={styles.footerLink} className="footer-link">Studio Booking</Link></li>
              <li><Link href="/contact" style={styles.footerLink} className="footer-link">Contact</Link></li>
              <li><Link href="/review" style={styles.footerLink} className="footer-link">Review Us</Link></li>
            </ul>
          </div>

          <div style={styles.footerColumn}>
            <h4 style={styles.footerHeading}>Portfolio</h4>
            <ul style={styles.footerList}>
              <li><Link href="/portfolio/branding" style={styles.footerLink} className="footer-link">Branding Projects</Link></li>
              <li><Link href="/portfolio/photography" style={styles.footerLink} className="footer-link">Photography</Link></li>
              <li><Link href="/portfolio/video" style={styles.footerLink} className="footer-link">Video Production</Link></li>
              <li><Link href="/portfolio/digital" style={styles.footerLink} className="footer-link">Digital Campaigns</Link></li>
              <li><Link href="/portfolio/cases" style={styles.footerLink} className="footer-link">Case Studies</Link></li>
            </ul>
          </div>

          <div style={styles.footerColumn}>
            <h4 style={styles.footerHeading}>Contact</h4>
            <ul style={styles.footerList}>
              <li style={styles.contactItem}>
                <span style={styles.icon} aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{display: 'block'}} focusable="false" aria-hidden="true"><path d="M3 6.5A2.5 2.5 0 015.5 4h13A2.5 2.5 0 0121 6.5v11A2.5 2.5 0 0118.5 20h-13A2.5 2.5 0 013 18.5v-12z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M3 6.5l9 6 9-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
                <span style={styles.footerLink} className="footer-link footer-contact-link">hello@rastermedia.com</span>
              </li>
              <li style={styles.contactItem}>
                <span style={styles.icon} aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{display: 'block'}} focusable="false" aria-hidden="true"><path d="M22 16.92v3a2 2 0 01-2.18 2A19.86 19.86 0 013 5.18 2 2 0 015 3h3a2 2 0 012 1.72c.12 1.05.37 2.08.74 3.06a2 2 0 01-.45 2.11l-1.2 1.2a16 16 0 006 6l1.2-1.2a2 2 0 012.11-.45c.98.37 2.01.62 3.06.74A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
                <span style={styles.footerLink} className="footer-link footer-contact-link">+1 (555) 123-4567</span>
              </li>
              <li style={styles.contactItem}>
                <span style={styles.icon} aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{display: 'block'}} focusable="false" aria-hidden="true"><path d="M21 10c0 6-9 12-9 12S3 16 3 10a9 9 0 1118 0z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="10" r="2.5" fill="currentColor"/></svg>
                </span>
                <span style={styles.footerLink} className="footer-link footer-contact-link">123 Creative Street, NY 10001</span>
              </li>
            </ul>
          </div>
        </div>

        <div style={styles.footerBottom}>
          <p style={styles.copyright}>© 2025 Raster Media. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
const styles = {
  header: {
    position: 'fixed',
    top: 0,
    width: '100%',
    backgroundColor: 'rgba(15, 15, 15, 0.95)',
    backdropFilter: 'blur(10px)',
    borderBottom: '0.8px solid rgba(93, 205, 219, 0.1)',
    zIndex: 1000,
  },
  headerContainer: {
    maxWidth: '1800px',
    margin: '0 auto',
    padding: '10px 48px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  main: {
    paddingBottom: '64px',
  },
  logoLink: {
    textDecoration: 'none',
    display: 'block',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
  },
  logoImage: {
    width: 'auto',
    height: 'auto',
    maxHeight: '60px',
    objectFit: 'contain',
  },
  nav: {
    display: 'flex',
    gap: '32px',
  },
  navLink: {
    color: '#A0A0A0',
    textDecoration: 'none',
    fontSize: '14px',
    fontWeight: '700',
    transition: 'color 0.3s',
    cursor: 'pointer',
  },
  ctaButton: {
    padding: '12px 24px',
    background: 'linear-gradient(180deg, #5DCDDB 0%, #7DD8E5 100%)',
    border: 'none',
    color: '#FFFFFF',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'transform 0.3s',
    textDecoration: 'none',
    display: 'inline-block'
  },
  footer: {
    backgroundColor: '#1A1A1A',
    borderTop: '0.8px solid #000000',
    padding: '64px 0 0',
  },
  footerContainer: {
    maxWidth: '1800px',
    margin: '0 auto',
    padding: '0 48px',
  },
  footerContent: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '48px',
    marginBottom: '48px',
  },
  footerColumn: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  },
  footerLogoLink: {
    textDecoration: 'none',
    display: 'block',
  },
  footerLogoImage: {
    width: 'auto',
    height: 'auto',
    maxHeight: '60px',
    objectFit: 'contain',
  },
  footerDesc: {
    color: '#6B6B6B',
    fontSize: '14px',
    lineHeight: '20px',
  },
  footerHeading: {
    fontSize: '25.904px',
    fontWeight: '600',
    lineHeight: '34px',
    color: '#FFFFFF',
  },
  footerList: {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  footerLink: {
    color: '#6B6B6B',
    fontSize: '14px',
    textDecoration: 'none',
    transition: 'color 0.3s',
    cursor: 'pointer',
  },
  contactItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  icon: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '20px',
    height: '20px',
    color: '#5DCDDB',
    verticalAlign: 'middle',
    lineHeight: '1',
  },
  footerBottom: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '24px',
    paddingBottom: '20px',
    borderTop: '0.8px solid rgba(255, 255, 255, 0.05)',
  },
  copyright: {
    color: '#6B6B6B',
    fontSize: '14px',
  },
  socialLinks: {
    display: 'flex',
    gap: '24px',
  },
  socialLink: {
    color: '#5DCDDB',
    fontSize: '20px',
    textDecoration: 'none',
    transition: 'color 0.3s',
    cursor: 'pointer',
  },
};

