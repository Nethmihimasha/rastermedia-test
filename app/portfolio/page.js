'use client';

import { useState } from 'react';
import styles from './page.module.css';

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
      {/* Header Section */}
      <section className={styles.header}>
        <div className={styles.headerContent}>
          <h1 className={styles.heading}>
            Our <span className={styles.gradient}>Creative Work</span>
          </h1>
          <p className={styles.subtitle}>
            A showcase of our most impactful projects across branding, photography, video, and digital campaigns.
          </p>
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
            <div key={item.id} className={styles.portfolioCard}>
              {/* Image Placeholder */}
              <div className={styles.imageContainer}>
                <div className={styles.imagePlaceholder} />
                <div className={styles.overlay} />
                
                {/* Hover Icon */}
                <div className={styles.hoverIcon}>
                  <div className={styles.iconBox}>
                    <svg width="28" height="28" fill="none" viewBox="0 0 28 28">
                      <circle cx="14" cy="14" r="6" stroke="white" strokeWidth="2.33" />
                    </svg>
                  </div>
                </div>

                {/* Card Content */}
                <div className={styles.cardContent}>
                  <div className={styles.category}>{item.category.toUpperCase()}</div>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.client}>{item.client}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}