'use client';

import { useState, useEffect } from 'react';
import styles from './review.module.css';

export default function ReviewsPage() {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    review: ''
  });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ ...formData, rating });
    alert('Thank you for your review! We appreciate your feedback.');
  };

  const recentReviews = [
    { text: "Absolutely amazing experience! The team exceeded all our expectations.", author: "Sarah M.", rating: 5, time: "2 hours ago", avatar: "👩‍💼" },
    { text: "Best decision we made for our brand! Professional and creative.", author: "John D.", rating: 5, time: "5 hours ago", avatar: "👨‍💻" },
    { text: "Professional and creative team that truly understands vision.", author: "Emma R.", rating: 5, time: "1 day ago", avatar: "👩‍🎨" },
    { text: "Exceeded all expectations! Would highly recommend to everyone.", author: "Mike T.", rating: 5, time: "2 days ago", avatar: "👨‍🔧" },
    { text: "Outstanding quality and attention to detail in every aspect.", author: "Lisa K.", rating: 5, time: "3 days ago", avatar: "👩‍🏫" },
    { text: "Game-changing results for our business. Truly impressed!", author: "David W.", rating: 5, time: "4 days ago", avatar: "👨‍💼" },
  ];

  const ratingDistribution = [
    { stars: 5, count: 435, percentage: 87 },
    { stars: 4, count: 50, percentage: 10 },
    { stars: 3, count: 10, percentage: 2 },
    { stars: 2, count: 5, percentage: 1 },
    { stars: 1, count: 0, percentage: 0 },
  ];

  return (
    <div className={styles.page}>
      {/* Animated Background Orbs */}
      <div className={styles.orb1}></div>
      <div className={styles.orb2}></div>
      <div className={styles.orb3}></div>

      {/* Mouse Follower Effect */}
      <div 
        className={styles.mouseFollower}
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
        }}
      ></div>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}></div>
        <div className={styles.heroGrid}></div>
        
        <div className={styles.pixelPattern1}>
          <PixelPattern size="large" />
        </div>
        <div className={styles.pixelPattern2}>
          <PixelPattern size="medium" />
        </div>

        <div className={styles.heroContent}>
          <div className={styles.badge}>
            <span className={styles.badgeIcon}>⭐</span>
            Your Voice Matters
          </div>
          
          <h1 className={styles.heroTitle}>
            SHARE YOUR
            <br />
            <span className={styles.gradientText}>EXPERIENCE.</span>
          </h1>
          
          <p className={styles.heroSubtitle}>
            Join 500+ happy clients who&apos;ve shared their success stories. Your feedback shapes our future.
          </p>

          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <div className={styles.statValue}>4.9★</div>
              <div className={styles.statLabel}>Avg Rating</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statValue}>500+</div>
              <div className={styles.statLabel}>Reviews</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statValue}>98%</div>
              <div className={styles.statLabel}>Satisfied</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className={styles.mainSection}>
        <div className={styles.container}>
          <div className={styles.contentGrid}>
            
            {/* Left Column - Review Form */}
            <div className={styles.formColumn}>
              <div className={styles.formCard}>
                <div className={styles.formHeader}>
                  <div className={styles.formIcon}>
                    <span>✍️</span>
                  </div>
                  <h2 className={styles.formTitle}>Leave Your Review</h2>
                  <p className={styles.formSubtitle}>Share your experience with us</p>
                </div>

                <form onSubmit={handleSubmit} className={styles.form}>
                  <div className={styles.formGroup}>
                    <label className={styles.label}>How was your experience?</label>
                    <div className={styles.starRating}>
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          className={`${styles.star} ${
                            star <= (hoveredRating || rating) ? styles.starActive : ''
                          }`}
                          onClick={() => setRating(star)}
                          onMouseEnter={() => setHoveredRating(star)}
                          onMouseLeave={() => setHoveredRating(0)}
                        >
                          ★
                        </button>
                      ))}
                    </div>
                    {rating > 0 && (
                      <div className={styles.ratingText}>
                        {rating === 5 && "🎉 Excellent!"}
                        {rating === 4 && "😊 Great!"}
                        {rating === 3 && "👍 Good"}
                        {rating === 2 && "🤔 Fair"}
                        {rating === 1 && "😕 Poor"}
                      </div>
                    )}
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label className={styles.label}>Your Name *</label>
                      <input
                        type="text"
                        className={styles.input}
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.label}>Email Address *</label>
                      <input
                        type="email"
                        className={styles.input}
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.label}>Your Review *</label>
                    <textarea
                      className={styles.textarea}
                      placeholder="Tell us about your experience working with us..."
                      rows="5"
                      value={formData.review}
                      onChange={(e) => setFormData({ ...formData, review: e.target.value })}
                      required
                    ></textarea>
                    <div className={styles.charCount}>
                      {formData.review.length} characters {formData.review.length >= 50 && "✓"}
                    </div>
                  </div>

                  <button type="submit" className={styles.submitButton}>
                    <span>Submit Review</span>
                    <span className={styles.buttonIcon}>→</span>
                  </button>

                  <p className={styles.formNote}>
                    🔒 Your review will be visible on our website after approval
                  </p>
                </form>
              </div>
            </div>

            {/* Right Column - Stats & Info */}
            <div className={styles.infoColumn}>
              
              {/* Rating Distribution */}
              <div className={styles.infoCard}>
                <h3 className={styles.infoCardTitle}>
                  <span className={styles.iconBadge}>📊</span>
                  Rating Distribution
                </h3>
                <div className={styles.distributionList}>
                  {ratingDistribution.map((item) => (
                    <div key={item.stars} className={styles.distributionItem}>
                      <span className={styles.distributionStars}>{item.stars} ★</span>
                      <div className={styles.distributionBar}>
                        <div 
                          className={styles.distributionFill}
                          style={{ width: `${item.percentage}%` }}
                        ></div>
                      </div>
                      <span className={styles.distributionCount}>{item.count}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why Your Review Matters */}
              <div className={styles.infoCard}>
                <h3 className={styles.infoCardTitle}>
                  <span className={styles.iconBadge}>💡</span>
                  Why Your Review Matters
                </h3>
                <div className={styles.benefitsList}>
                  <div className={styles.benefitItem}>
                    <div className={styles.benefitIcon}>👥</div>
                    <div className={styles.benefitContent}>
                      <h4 className={styles.benefitTitle}>Help Others Decide</h4>
                      <p className={styles.benefitText}>Your honest feedback helps future clients make informed decisions</p>
                    </div>
                  </div>
                  <div className={styles.benefitItem}>
                    <div className={styles.benefitIcon}>⭐</div>
                    <div className={styles.benefitContent}>
                      <h4 className={styles.benefitTitle}>Get Featured</h4>
                      <p className={styles.benefitText}>Outstanding reviews get featured on our homepage and social media</p>
                    </div>
                  </div>
                  <div className={styles.benefitItem}>
                    <div className={styles.benefitIcon}>🎯</div>
                    <div className={styles.benefitContent}>
                      <h4 className={styles.benefitTitle}>Shape Our Future</h4>
                      <p className={styles.benefitText}>Your insights help us improve and deliver even better results</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className={styles.trustBadges}>
                <div className={styles.trustBadge}>
                  <div className={styles.trustIcon}>🏆</div>
                  <div className={styles.trustLabel}>Google</div>
                  <div className={styles.trustValue}>4.9/5</div>
                </div>
                <div className={styles.trustBadge}>
                  <div className={styles.trustIcon}>💎</div>
                  <div className={styles.trustLabel}>Trustpilot</div>
                  <div className={styles.trustValue}>4.8/5</div>
                </div>
                <div className={styles.trustBadge}>
                  <div className={styles.trustIcon}>🥇</div>
                  <div className={styles.trustLabel}>Clutch</div>
                  <div className={styles.trustValue}>5.0/5</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Recent Reviews with Masonry Layout */}
      <section className={styles.recentSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              Recent <span className={styles.gradientText}>Reviews</span>
            </h2>
            <p className={styles.sectionSubtitle}>
              See what our amazing clients are saying about their experience
            </p>
          </div>
          <div className={styles.reviewsGrid}>
            {recentReviews.map((review, index) => (
              <div key={index} className={styles.reviewCard} style={{ animationDelay: `${index * 0.1}s` }}>
                <div className={styles.reviewHeader}>
                  <div className={styles.reviewAvatar}>{review.avatar}</div>
                  <div className={styles.reviewInfo}>
                    <div className={styles.reviewAuthor}>{review.author}</div>
                    <div className={styles.reviewTime}>{review.time}</div>
                  </div>
                </div>
                <div className={styles.reviewStars}>
                  {'★'.repeat(review.rating)}
                </div>
                <p className={styles.reviewText}>&ldquo;{review.text}&rdquo;</p>
                <div className={styles.reviewBadge}>Verified Client</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Extraordinary Interactive Section */}
      <section className={styles.interactiveSection}>
        <div className={styles.container}>
          <div className={styles.interactiveGrid}>
            <div className={styles.interactiveCard}>
              <div className={styles.interactiveIcon}>🚀</div>
              <h3 className={styles.interactiveTitle}>Ready to Start?</h3>
              <p className={styles.interactiveText}>Let&apos;s create something extraordinary together</p>
              <button className={styles.interactiveButton}>Start Your Project</button>
            </div>
            <div className={styles.interactiveCard}>
              <div className={styles.interactiveIcon}>💬</div>
              <h3 className={styles.interactiveTitle}>Have Questions?</h3>
              <p className={styles.interactiveText}>Our team is here to help you every step of the way</p>
              <button className={styles.interactiveButton}>Contact Us</button>
            </div>
            <div className={styles.interactiveCard}>
              <div className={styles.interactiveIcon}>📱</div>
              <h3 className={styles.interactiveTitle}>Follow Our Journey</h3>
              <p className={styles.interactiveText}>Stay updated with our latest projects and insights</p>
              <button className={styles.interactiveButton}>Follow Us</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function PixelPattern({ size = 'small' }) {
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