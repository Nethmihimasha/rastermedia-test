'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import styles from './portfolio.module.css';

const portfolioItems = [
  {
    id: 1,
    category: 'Branding',
    title: 'Luxury Fashion Campaign',
    client: 'Elegance Co.',
    image: '/portfolio1.jpg',
  },
  {
    id: 2,
    category: 'Photography',
    title: 'Tech Product Launch',
    client: 'Innovation Labs',
    image: '/portfolio2.jpg',
  },
  {
    id: 3,
    category: 'Photography',
    title: 'Modern Architecture Series',
    client: 'Urban Spaces',
    image: '/portfolio3.jpg',
  },
  {
    id: 4,
    category: 'Branding',
    title: 'Beauty Brand Refresh',
    client: 'Radiance Cosmetics',
    image: '/portfolio4.jpg',
  },
  {
    id: 5,
    category: 'Photography',
    title: 'Editorial Fashion Story',
    client: 'Vogue Magazine',
    image: '/portfolio5.jpg',
  },
  {
    id: 6,
    category: 'Video',
    title: 'Luxury Watch Campaign',
    client: 'Timepiece Co.',
    image: '/portfolio6.jpg',
  },
  {
    id: 7,
    category: 'Photography',
    title: 'Commercial Product Series',
    client: 'Various Clients',
    image: '/portfolio7.jpg',
  },
  {
    id: 8,
    category: 'Branding',
    title: 'Brand Identity System',
    client: 'StartUp Inc.',
    image: '/portfolio8.jpg',
  },
  {
    id: 9,
    category: 'Digital',
    title: 'Social Media Campaign',
    client: 'Lifestyle Brand',
    image: '/portfolio9.jpg',
  },
];

const categories = ['All', 'Branding', 'Photography', 'Video', 'Digital'];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems =
    activeCategory === 'All'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <div className={styles.portfolioPage}>
      {/* Header Section with Image */}
      <section className={styles.header}>
        <motion.div 
          className={styles.heroImageWrapper}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDN8fGNyZWF0aXZlJTIwd29ya3xlbnwwfHx8fDE2Nzg5ODc3MzE&ixlib=rb-4.0.3&q=80&w=1920"
            alt="Our Work"
            className={styles.heroImage}
            fill
            sizes="100vw"
            priority
          />
          <div className={styles.heroImageOverlay} />
        </motion.div>

        <div className={styles.headerContent}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h1 className={styles.heading}>
              Our <span className={styles.gradient}>Creative Work</span>
            </h1>
            <p className={styles.subtitle}>
              A showcase of our most impactful projects across branding, photography, video, and digital campaigns.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className={styles.filterSection}>
        <div className={styles.filterButtons}>
          {categories.map((category) => (
            <button
              key={category}
              className={`${styles.filterBtn} ${
                activeCategory === category ? styles.active : ''
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className={styles.portfolioGrid}>
        <div className={styles.gridContainer}>
          {filteredItems.map((item) => (
            <PortfolioCard key={item.id} {...item} />
          ))}
        </div>
      </section>
    </div>
  );
}

function PortfolioCard({ category, title, client, image }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        className={styles.portfolioCard}
        onClick={() => setIsModalOpen(true)}
      >
        <div className={styles.portfolioImage}>
          {image ? <Image src={image} alt={title} fill style={{ objectFit: 'cover' }} quality={75} /> : null}
        </div>
        <div className={styles.portfolioGradient}></div>
        <div className={styles.portfolioContent}>
          <div className={styles.portfolioCategory}>{category}</div>
          <h3 className={styles.portfolioTitle}>{title}</h3>
          <p className={styles.portfolioClient}>{client}</p>
        </div>
      </div>

      {isModalOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.95)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999,
            cursor: 'pointer',
          }}
          onClick={() => setIsModalOpen(false)}
        >
          <div style={{ position: 'relative', width: '90%', height: '90vh', maxWidth: '1200px' }}>
            {image ? <Image src={image} alt={title} fill style={{ objectFit: 'contain' }} quality={90} /> : null}
            <button
              onClick={() => setIsModalOpen(false)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: '#5DCDDB',
                color: '#000',
                border: 'none',
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                fontSize: '28px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
}