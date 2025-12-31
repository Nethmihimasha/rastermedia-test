'use client';

import MagicBento from '../components/MagicBento';
import styles from './services.module.css';
import { 
  Palette, 
  PenTool, 
  Camera, 
  Video, 
  TrendingUp, 
  Target, 
  Building2 
} from 'lucide-react';

// --- Data with Lucide Icons ---
const services = [
  {
    number: '01',
    icon: <Palette size={32} strokeWidth={1.5} />,
    title: 'Creative & Branding',
    description: 'Distinctive brand identities that capture your essence and resonate with your target audience.',
    features: ['Brand Strategy', 'Logo Design', 'Visual Identity', 'Brand Guidelines']
  },
  {
    number: '02',
    icon: <PenTool size={32} strokeWidth={1.5} />,
    title: 'Graphic Design',
    description: 'Strategic design solutions blending aesthetic excellence with commercial effectiveness.',
    features: ['Print & Digital', 'Marketing Collateral', 'Data Visualization', 'UI/UX Design']
  },
  {
    number: '03',
    icon: <Camera size={32} strokeWidth={1.5} />,
    title: 'Photography',
    description: "Studio-quality imagery capturing emotion, movement, and your brand's essence.",
    features: ['Product Photography', 'Commercial Shoots', 'Fashion & Editorial', 'Event Coverage']
  },
  {
    number: '04',
    icon: <Video size={32} strokeWidth={1.5} />,
    title: 'Videography',
    description: 'Compelling video productions with cinematic quality and creative excellence.',
    features: ['Commercial Production', 'Corporate Videos', 'Social Content', 'Motion Graphics']
  },
  {
    number: '05',
    icon: <TrendingUp size={32} strokeWidth={1.5} />,
    title: 'Social Media Ads',
    description: 'Data-driven campaigns that amplify reach and convert engagement into results.',
    features: ['Campaign Strategy', 'Content Creation', 'Ad Management', 'Analytics']
  },
  {
    number: '06',
    icon: <Target size={32} strokeWidth={1.5} />,
    title: 'Campaign Strategy',
    description: 'Comprehensive marketing strategies driving sustainable growth through insights.',
    features: ['Market Research', 'Creative Concepting', 'Multi-Channel Planning', 'ROI Analysis']
  },
  {
    number: '07',
    icon: <Building2 size={32} strokeWidth={1.5} />,
    title: 'Studio Rental',
    description: 'Fully-equipped professional studio space with flexible booking options for your creative needs.',
    features: ['Professional Lighting', 'Camera Equipment', 'Backdrops & Props', '$75/hour']
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

        {/* Magic Bento Section */}
        <div style={{ paddingBottom: '80px' }}>
          <MagicBento 
            items={services}
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            glowColor="93, 205, 219" 
          />
        </div>
      </div>
    </div>
  );
}