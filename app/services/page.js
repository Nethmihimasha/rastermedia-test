import styles from './services.module.css';

// Icon Components
const PaletteIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="3" width="26" height="26" rx="2" />
    <circle cx="10" cy="10" r="1" fill="currentColor" />
    <circle cx="16" cy="10" r="1" fill="currentColor" />
    <circle cx="22" cy="10" r="1" fill="currentColor" />
    <circle cx="10" cy="16" r="1" fill="currentColor" />
  </svg>
);

const PenToolIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="3" width="26" height="26" rx="2" />
  </svg>
);

const CameraIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="8" width="26" height="18" rx="2" />
    <circle cx="16" cy="17" r="4" />
  </svg>
);

const VideoIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="4" y="8" width="18" height="16" rx="2" />
    <path d="M22 12L28 9V23L22 20" />
  </svg>
);

const TrendingUpIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M23 8H28V13" />
    <path d="M4 24L12 16L16 20L28 8" />
    <circle cx="12" cy="16" r="1" fill="currentColor" />
  </svg>
);

const TargetIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M24 12L28 8L24 4" />
    <rect x="3" y="12" width="26" height="8" rx="1" />
  </svg>
);

const BuildingIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="16" cy="16" r="1" fill="currentColor" />
    <circle cx="16" cy="11" r="1" fill="currentColor" />
    <circle cx="16" cy="21" r="1" fill="currentColor" />
    <rect x="3" y="10" width="26" height="16" rx="2" />
    <path d="M8 6H24L16 10L8 6Z" />
  </svg>
);

const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.33">
    <path d="M3 8H13" />
    <path d="M8 3L13 8L8 13" />
  </svg>
);

const Mail = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="M22 7L12 13 2 7" />
  </svg>
);

const Phone = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
  </svg>
);

const MapPin = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const services = [
  {
    number: '01',
    icon: <PaletteIcon />,
    title: 'Creative & Branding',
    description: 'Distinctive brand identities that capture your essence and resonate with your target audience.',
    features: [
      'Brand Strategy',
      'Logo Design',
      'Visual Identity',
      'Brand Guidelines'
    ]
  },
  {
    number: '02',
    icon: <PenToolIcon />,
    title: 'Graphic Design',
    description: 'Strategic design solutions blending aesthetic excellence with commercial effectiveness.',
    features: [
      'Print & Digital',
      'Marketing Collateral',
      'Data Visualization',
      'UI/UX Design'
    ]
  },
  {
    number: '03',
    icon: <CameraIcon />,
    title: 'Photography',
    description: 'Studio-quality imagery capturing emotion, movement, and your brand\'s essence.',
    features: [
      'Product Photography',
      'Commercial Shoots',
      'Fashion & Editorial',
      'Event Coverage'
    ]
  },
  {
    number: '04',
    icon: <VideoIcon />,
    title: 'Videography',
    description: 'Compelling video productions with cinematic quality and creative excellence.',
    features: [
      'Commercial Production',
      'Corporate Videos',
      'Social Content',
      'Motion Graphics'
    ]
  },
  {
    number: '05',
    icon: <TrendingUpIcon />,
    title: 'Social Media Advertising',
    description: 'Data-driven campaigns that amplify reach and convert engagement into results.',
    features: [
      'Campaign Strategy',
      'Content Creation',
      'Ad Management',
      'Analytics & Reporting'
    ]
  },
  {
    number: '06',
    icon: <TargetIcon />,
    title: 'Campaign Strategy',
    description: 'Comprehensive marketing strategies driving sustainable growth through insights.',
    features: [
      'Market Research',
      'Creative Concepting',
      'Multi-Channel Planning',
      'ROI Analysis'
    ]
  },
  {
    number: '07',
    icon: <BuildingIcon />,
    title: 'Studio Rental',
    description: 'Fully-equipped professional studio space with flexible booking options.',
    features: [
      'Professional Lighting',
      'Camera Equipment',
      'Backdrops & Props',
      '$75/hour'
    ]
  }
];

export default function ServicesPage() {
  return (
    <div className={styles.app}>
      <div className={styles.servicesPage}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.heading1}>
            <h1 className={styles.mainTitle}>
              Comprehensive Creative
            </h1>
            <div className={styles.gradientText}>
              <span>Solutions</span>
            </div>
          </div>
          <p className={styles.heroParagraph}>
            End-to-end creative services that transform ideas into impactful experiences
          </p>
        </section>

        {/* Services Grid */}
        <section className={styles.servicesSection}>
          {services.map((service, index) => (
            <div key={index} className={styles.serviceCard}>
              <div className={styles.cardNumber}>{service.number}</div>
              
              <div className={styles.cardContent}>
                <div className={styles.iconBox}>
                  {service.icon}
                </div>

                <div className={styles.serviceNumber}>{service.number}</div>

                <h3 className={styles.serviceTitle}>{service.title}</h3>

                <p className={styles.serviceDescription}>
                  {service.description}
                </p>

                <div className={styles.featuresList}>
                  {service.features.map((feature, idx) => (
                    <div key={idx} className={styles.featureItem}>
                      <div className={styles.bulletPoint}></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <a href="#" className={styles.learnMore}>
                  <span>Learn More</span>
                  <ArrowRight />
                </a>
              </div>
            </div>
          ))}
        </section>
      </div>


    </div>
  );
}