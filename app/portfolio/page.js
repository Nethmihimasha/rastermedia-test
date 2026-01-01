'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import styles from './portfolio.module.css';

const portfolioItems = [
  { id: 1, category: 'Photos', album: 'Christmas', title: 'Snowy Editorial', client: 'Elegance Co.', image: '/portfolio1.jpg' },
  { id: 2, category: 'Photos', album: 'Fashion', title: 'Tech Product Launch', client: 'Innovation Labs', image: '/portfolio2.jpg' },
  { id: 3, category: 'Photos', album: 'Architecture', title: 'Modern Architecture Series', client: 'Urban Spaces', image: '/portfolio3.jpg' },
  { id: 4, category: 'Design', album: 'Brand Refresh', title: 'Beauty Brand Refresh', client: 'Radiance Cosmetics', image: '/portfolio4.jpg' },
  { id: 5, category: 'Photos', album: 'Fashion', title: 'Editorial Fashion Story', client: 'Vogue Magazine', image: '/portfolio5.jpg' },
  { id: 6, category: 'Videos', album: 'Campaigns', title: 'Luxury Watch Campaign', client: 'Timepiece Co.', image: '/portfolio6.jpg', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
  { id: 7, category: 'Photos', album: 'Commercial', title: 'Commercial Product Series', client: 'Various Clients', image: '/portfolio7.jpg' },
  { id: 8, category: 'Projects', album: 'Identity Systems', title: 'Brand Identity System', client: 'StartUp Inc.', image: '/portfolio8.jpg' },
  { id: 9, category: 'Digital', album: 'Social', title: 'Social Media Campaign', client: 'Lifestyle Brand', image: '/portfolio9.jpg' },
  { id: 10, category: 'Design', album: 'Packaging', title: 'Packaging Design Series', client: 'Gourmet Goods', image: '/portfolio10.jpg' },
  // Additional sample items for albums
  { id: 11, category: 'Photos', album: 'Christmas', title: 'Holiday Lights', client: 'Local Shop', image: '/portfolio3.jpg' },
  { id: 12, category: 'Photos', album: 'Fashion', title: 'Runway Series', client: 'Vogue Magazine', image: '/portfolio5.jpg' },
];

const categories = ['All', 'Photos', 'Videos', 'Design', 'Projects', 'Digital'];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');

  const [isAlbumOpen, setIsAlbumOpen] = useState(false);
  const [activeAlbum, setActiveAlbum] = useState(null);
  const [isWorkOpen, setIsWorkOpen] = useState(false);
  const [activeWork, setActiveWork] = useState(null);

  const filteredItems = activeCategory === 'All' ? portfolioItems : portfolioItems.filter((item) => item.category === activeCategory);

  // Group filtered items into albums
  const albumsMap = filteredItems.reduce((acc, item) => {
    const key = item.album || item.title;
    if (!acc[key]) acc[key] = { name: key, items: [] };
    acc[key].items.push(item);
    return acc;
  }, {});

  const albums = Object.values(albumsMap);

  return (
    <div className={styles.portfolioPage}>
      {/* Header Section with Image */}
      <section className={styles.header}>
        {/* hero image removed per request; keep an empty decorative wrapper for layout */}
        <div className={styles.heroImageWrapper} aria-hidden="true" />
        <div className={styles.heroImageOverlay} aria-hidden="true" />

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

      {/* Portfolio Grid / Albums or Album Items (drill-in) */}
      {!isAlbumOpen && (
        <section className={styles.portfolioGrid}>
          <div className={styles.gridContainer}>
            {albums.map((album) => (
              <AlbumCard key={album.name} album={album} onOpen={() => { setActiveAlbum(album); setIsAlbumOpen(true); }} />
            ))}
          </div>
        </section>
      )}

      {isAlbumOpen && activeAlbum && (
        <section className={styles.portfolioGrid}>
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', maxWidth: '1800px', margin: '0 auto', padding: '0 48px'}}>
            <div>
              <button className="btn" onClick={() => { setIsAlbumOpen(false); setActiveAlbum(null); }} style={{marginRight:12}}>← Back</button>
              <span style={{marginLeft:8, fontFamily: 'Erbaum, Cousine, monospace', fontSize: '20px', color:'#fff'}}>{activeAlbum.name}</span>
            </div>
            <div style={{color:'#A0A0A0'}}>{activeAlbum.items.length} items</div>
          </div>
          <div className={styles.gridContainer} style={{marginTop:20}}>
            {activeAlbum.items.map((item) => (
              <WorkCard key={item.id} {...item} onOpen={() => { setActiveWork(item); setIsWorkOpen(true); }} />
            ))}
          </div>
        </section>
      )}

      {isWorkOpen && activeWork && (
        <WorkModal work={activeWork} onClose={() => setIsWorkOpen(false)} />
      )}
    </div>
  );
}

function AlbumCard({ album, onOpen }) {
  const rep = album.items[0];
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={styles.albumCard}
      onClick={onOpen}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter') onOpen(); }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
        boxShadow: isHovered ? '0 12px 40px rgba(93, 205, 219, 0.15)' : 'none',
        borderColor: isHovered ? 'rgba(93,205,219,0.5)' : 'rgba(93,205,219,0.06)'
      }}
    >
      <div className={styles.albumThumb} style={{ position: 'relative', overflow: 'hidden' }}>
        {rep.image ? <Image src={rep.image} alt={album.name} fill style={{ objectFit: 'cover', transform: isHovered ? 'scale(1.05)' : 'scale(1)', transition: 'transform 0.5s ease' }} /> : null}
      </div>
      <div className={styles.albumInfo}>
        <div className={styles.albumName}>{album.name}</div>
        <div className={styles.albumCount}>{album.items.length} items</div>
      </div>
    </div>
  );
}

function WorkCard({ id, title, client, image, videoUrl, onOpen }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={styles.portfolioCard}
      onClick={onOpen}
      style={{ cursor: 'pointer' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={styles.portfolioImage}
        style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)', transition: 'transform 0.5s ease' }}
      >
        {image ? <Image src={image} alt={title} fill style={{ objectFit: 'cover' }} /> : null}
      </div>
      <div className={styles.portfolioGradient} style={{ opacity: isHovered ? 0.85 : 0.6, transition: 'opacity 0.3s ease' }}></div>
      <div className={styles.portfolioContent} style={{ transform: isHovered ? 'translateY(-8px)' : 'translateY(0)', transition: 'transform 0.4s ease' }}>
        <div className={styles.portfolioCategory} style={{ color: isHovered ? '#7DD8E5' : '#5DCDDB', transition: 'color 0.3s ease' }}>{videoUrl ? 'Video' : 'Photo'}</div>
        <h3 className={styles.portfolioTitle}>{title}</h3>
        <p className={styles.portfolioClient}>{client}</p>
      </div>
    </div>
  );
}

function WorkModal({ work, onClose }) {
  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e)=>e.stopPropagation()}>
        <button className={styles.modalClose} onClick={onClose}>×</button>
        {work.videoUrl ? (
          <div style={{position:'relative', width:'100%', paddingTop:'56.25%'}}>
            <iframe src={work.videoUrl} title={work.title} style={{position:'absolute', top:0,left:0,width:'100%',height:'100%'}} frameBorder="0" allowFullScreen />
          </div>
        ) : (
          <div style={{position:'relative', width:'100%', height:'80vh'}}>
            {work.image ? <Image src={work.image} alt={work.title} fill style={{ objectFit: 'contain' }} /> : null}
          </div>
        )}
      </div>
    </div>
  );
}