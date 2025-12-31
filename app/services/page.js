'use client';

import { motion } from 'motion/react';
import MagicBento from '../components/MagicBento';
import styles from './services.module.css';
import { 
  Palette, 
  PenTool, 
  Camera, 
  Video, 
  TrendingUp, 
  Target
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
  }
];

export default function ServicesPage() {
  return (
    <div className={styles.app}>
      <div className={styles.servicesPage}>
        {/* Hero Section with Image */}
        <section className={styles.heroSection}>
          <motion.div 
            className={styles.heroImageWrapper}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGNyZWF0aXZlJTIwYWdlbmN5fGVufDB8fHx8MTY3ODk4NzY1Mg&ixlib=rb-4.0.3&q=80&w=1920"
              alt="Creative Services" 
              className={styles.heroImage}
            />
            <div className={styles.heroImageOverlay} />
          </motion.div>

          <div className={styles.heroContent}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
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
            </motion.div>
          </div>
        </section>

        {/* Magic Bento Section */}
        <div style={{ padding: '0 24px 80px', maxWidth: '1400px', width: '100%', margin: '0 auto' }}>
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