'use client';

import { useState } from 'react';
import styles from './studio.module.css';

export default function StudioBookingPage() {
  return (
    <div className={styles.page}>
      <HeroSection />
      <BackdropPackagesSection />
      <PodcastPackagesSection />
      <BookingFormSection />
      <LocationSection />
    </div>
  );
}

function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          Book Our Professional
          <br />
          <span className={styles.gradientText}>Creative Studio</span>
        </h1>
        <p className={styles.heroSubtitle}>
          Fully-equipped studio space with professional lighting, backdrops, and equipment. Perfect for photography, videography, and creative productions.
        </p>
      </div>
    </section>
  );
}

function BackdropPackagesSection() {
  const packages = [
    {
      title: '1 Hour Package',
      price: '3,000',
      image: '/images/studio-1hr.jpg',
      equipment: [
        'Godox 600 BM II',
        'Nanlite FC-300B',
        'Nanlite FC-120B',
        'C-stand with boom arm',
        '120 Parabolic Softbox',
        '90 Softbox',
        'Godox SB-FW 35x160cm Softbox',
        'Makeup & Dressing Room',
        'Fully Air-Conditioned',
        'Pantry Area',
        'Parking',
      ],
      extraHour: '2,500',
    },
    {
      title: '2 Hours Package',
      price: '5,500',
      image: '/images/studio-2hr.jpg',
      equipment: [
        'Godox 600 BM II',
        'Nanlite FC-300B',
        'Nanlite FC-120B',
        'C-stand with boom arm',
        '120 Parabolic Softbox',
        '90 Softbox',
        'Godox SB-FW 35x160cm Softbox',
        'Makeup & Dressing Room',
        'Fully Air-Conditioned',
        'Pantry Area',
        'Parking',
      ],
      extraHour: '2,500',
    },
    {
      title: '5 Hours Package',
      price: '12,500',
      image: '/images/studio-5hr.jpg',
      popular: true,
      equipment: [
        'Godox 600 BM II',
        'Nanlite FC-300B',
        'Nanlite FC-120B',
        'ZSYB LC60C RGB Video Light',
        'C-stand with boom arm',
        '120 Parabolic Softbox',
        '90 Softbox',
        'Godox SB-FW 35x160cm Softbox',
        'Bowens Mount Spotlight Light Projector',
        'Makeup & Dressing Room',
        'Fully Air-Conditioned',
        'Pantry Area',
        'Parking',
      ],
      extraHour: '2,500',
    },
    {
      title: '8 Hours Package',
      price: '20,000',
      image: '/images/studio-8hr.jpg',
      equipment: [
        'Godox 600 BM II',
        'Nanlite FC-300B',
        'Nanlite FC-120B',
        'ZSYB LC60C RGB Video Light',
        'C-stand with boom arm',
        '120 Parabolic Softbox',
        '90 Softbox',
        'Godox SB-FW 35x160cm Softbox',
        'Bowens Mount Spotlight Light Projector',
        'Makeup & Dressing Room',
        'Fully Air-Conditioned',
        'Pantry Area',
        'Parking',
      ],
      extraHour: '2,500',
    },
  ];

  return (
    <section className={styles.packagesSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            Seamless Paper <span className={styles.gradientText}>Backdrop Packages</span>
          </h2>
          <p className={styles.sectionSubtitle}>
            Professional studio setups with complete lighting equipment for photography and videography
          </p>
        </div>
        <div className={styles.packagesGrid}>
          {packages.map((pkg, index) => (
            <PackageCard key={index} {...pkg} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PodcastPackagesSection() {
  const packages = [
    {
      title: '1 Hour Package',
      price: '4,000',
      image: '/images/podcast-1hr.jpg',
      equipment: [
        '1 Seated Sofa ×2',
        'Nanlite FC-300B',
        'Nanlite FC-120B',
        'Godox 600 BM II',
        'KF RGB Video Light',
        'Floor Lamp',
        'C-stand with boom arm',
        '120 Parabolic Softbox',
        '90 Softbox',
        'Makeup & Dressing Room',
        'Fully Air-Conditioned',
        'Pantry Area',
        'Parking',
      ],
      extraHour: '3,500',
    },
    {
      title: '2 Hours Package',
      price: '7,500',
      image: '/images/podcast-2hr.jpg',
      equipment: [
        '1 Seated Sofa ×2',
        'Nanlite FC-300B',
        'Nanlite FC-120B',
        'Godox 600 BM II',
        'KF RGB Video Light',
        'Floor Lamp',
        'C-stand with boom arm',
        '120 Parabolic Softbox',
        '90 Softbox',
        'Godox SB-FW 35x160cm Softbox',
        'Makeup & Dressing Room',
        'Fully Air-Conditioned',
        'Pantry Area',
        'Parking',
      ],
      extraHour: '3,500',
    },
    {
      title: '5 Hours Package',
      price: '14,500',
      image: '/images/podcast-5hr.jpg',
      popular: true,
      equipment: [
        '1 Seated Sofa ×2',
        'Nanlite FC-300B',
        'Nanlite FC-120B',
        'Godox 600 BM II',
        'KF RGB Video Light',
        'Floor Lamp',
        'ZSYB LC60C RGB Video Light',
        'C-stand with boom arm',
        '120 Parabolic Softbox',
        '90 Softbox',
        'Godox SB-FW 35x160cm Softbox',
        'Bowens Mount Spotlight Light Projector',
        'Makeup & Dressing Room',
        'Fully Air-Conditioned',
        'Pantry Area',
        'Parking',
      ],
      extraHour: '3,500',
    },
    {
      title: '8 Hours Package',
      price: '22,500',
      image: '/images/podcast-8hr.jpg',
      equipment: [
        '1 Seated Sofa ×2',
        'Nanlite FC-300B',
        'Nanlite FC-120B',
        'Godox 600 BM II',
        'KF RGB Video Light',
        'Floor Lamp',
        'ZSYB LC60C RGB Video Light',
        'C-stand with boom arm',
        '120 Parabolic Softbox',
        '90 Softbox',
        'Godox SB-FW 35x160cm Softbox',
        'Bowens Mount Spotlight Light Projector',
        'Makeup & Dressing Room',
        'Fully Air-Conditioned',
        'Pantry Area',
        'Parking',
      ],
      extraHour: '3,500',
    },
  ];

  return (
    <section className={styles.packagesSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            Podcast / Interior <span className={styles.gradientText}>Setup Packages</span>
          </h2>
          <p className={styles.sectionSubtitle}>
            Complete interior setups perfect for podcasts, interviews, and content creation
          </p>
        </div>
        <div className={styles.packagesGrid}>
          {packages.map((pkg, index) => (
            <PackageCard key={index} {...pkg} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PackageCard({ title, price, image, equipment, extraHour, popular }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const displayItems = isExpanded ? equipment : equipment.slice(0, 5);

  return (
    <div className={styles.packageCard}>
      {popular && <div className={styles.popularBadge}>Most Popular</div>}
      
      <div className={styles.packageImage}>
        {image && <img src={image} alt={title} />}
      </div>

      <div className={styles.packageContent}>
        <h3 className={styles.packageTitle}>{title}</h3>
        
        <div className={styles.packagePrice}>
          <span className={styles.currency}>LKR</span>
          <span className={styles.amount}>{price}</span>
        </div>

        <div className={styles.equipmentList}>
          <h4 className={styles.equipmentTitle}>Includes:</h4>
          <ul className={styles.equipmentItems}>
            {displayItems.map((item, index) => (
              <li key={index} className={styles.equipmentItem}>
                <span className={styles.checkIcon}>✓</span>
                {item}
              </li>
            ))}
          </ul>
          
          {equipment.length > 5 && (
            <button
              className={styles.readMoreButton}
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? 'Show Less' : `Show ${equipment.length - 5} More`}
              <span className={styles.arrow}>{isExpanded ? '↑' : '↓'}</span>
            </button>
          )}
        </div>

        <div className={styles.extraHour}>
          Extra Hour: <span className={styles.extraPrice}>LKR {extraHour}</span>
        </div>

        <button className={styles.selectButton}>Select Package</button>
      </div>
    </div>
  );
}

function BookingFormSection() {
  const [formData, setFormData] = useState({
    date: '',
    timeSlot: 'morning',
    name: '',
    email: '',
    phone: '',
    company: '',
    packageType: '',
    requirements: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Booking request submitted! We will contact you within 24 hours.');
  };

  return (
    <section className={styles.bookingSection}>
      <div className={styles.container}>
        <div className={styles.bookingCard}>
          <div className={styles.bookingHeader}>
            <div className={styles.iconWrapper}>
              <span className={styles.calendarIcon}>📅</span>
            </div>
            <div>
              <h2 className={styles.bookingTitle}>Book Your Session</h2>
              <p className={styles.bookingSubtitle}>Fill in the details and we'll confirm your booking</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className={styles.bookingForm}>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label className={styles.label}>Select Date *</label>
                <input
                  type="date"
                  className={styles.input}
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Select Time Slot *</label>
                <select
                  className={styles.select}
                  value={formData.timeSlot}
                  onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                  required
                >
                  <option value="morning">Morning (9:00 AM - 1:00 PM)</option>
                  <option value="afternoon">Afternoon (2:00 PM - 6:00 PM)</option>
                  <option value="evening">Evening (6:00 PM - 10:00 PM)</option>
                </select>
              </div>
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label className={styles.label}>Full Name *</label>
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
                <label className={styles.label}>Email *</label>
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

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label className={styles.label}>Phone Number *</label>
                <input
                  type="tel"
                  className={styles.input}
                  placeholder="+94 77 123 4567"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Company Name</label>
                <input
                  type="text"
                  className={styles.input}
                  placeholder="Your Company"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Package Type *</label>
              <select
                className={styles.select}
                value={formData.packageType}
                onChange={(e) => setFormData({ ...formData, packageType: e.target.value })}
                required
              >
                <option value="">Select package type</option>
                <option value="backdrop-1hr">Seamless Backdrop - 1 Hour</option>
                <option value="backdrop-2hr">Seamless Backdrop - 2 Hours</option>
                <option value="backdrop-5hr">Seamless Backdrop - 5 Hours</option>
                <option value="backdrop-8hr">Seamless Backdrop - 8 Hours</option>
                <option value="podcast-1hr">Podcast/Interior - 1 Hour</option>
                <option value="podcast-2hr">Podcast/Interior - 2 Hours</option>
                <option value="podcast-5hr">Podcast/Interior - 5 Hours</option>
                <option value="podcast-8hr">Podcast/Interior - 8 Hours</option>
              </select>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Special Requirements</label>
              <textarea
                className={styles.textarea}
                placeholder="Tell us about your project needs, equipment requirements, etc."
                rows="5"
                value={formData.requirements}
                onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
              ></textarea>
            </div>

            <button type="submit" className={styles.submitButton}>
              <span>Request Booking</span>
              <span className={styles.buttonArrow}>→</span>
            </button>

            <p className={styles.formNote}>
              We'll review your request and confirm availability within 24 hours
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

function LocationSection() {
  return (
    <section className={styles.locationSection}>
      <div className={styles.container}>
        <div className={styles.locationCard}>
          <div className={styles.locationIcon}>
            <span>📍</span>
          </div>
          <div className={styles.locationContent}>
            <h3 className={styles.locationTitle}>Studio Location</h3>
            <p className={styles.locationAddress}>
              123 Creative Avenue, Downtown Arts District
              <br />
              Los Angeles, CA 90012
            </p>
            <p className={styles.locationDetails}>
              Free parking available • Easy metro access • Elevator access
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}