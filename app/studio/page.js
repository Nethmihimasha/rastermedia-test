import styles from './studio.module.css';

export default function StudioBookingPage() {
  return (
    <div className={styles.app}>
      {/* Header */}
      <header className={styles.header}>
        <button className={styles.logoButton}>
          <div className={styles.logo}></div>
        </button>
        
        <nav className={styles.nav}>
          <button className={styles.navButton}>Home</button>
          <button className={styles.navButton}>About</button>
          <button className={styles.navButton}>Services</button>
          <button className={styles.navButton}>Portfolio</button>
          <button className={`${styles.navButton} ${styles.active}`}>
            Studio
            <div className={styles.activeIndicator}></div>
          </button>
          <button className={styles.navButton}>Careers</button>
          <button className={styles.navButton}>Contact</button>
        </nav>

        <button className={styles.ctaButton}>Get in Touch</button>
      </header>

      <div className={styles.studioPage}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.heading1}>
            <span className={styles.bookOur}>Book Our Professional</span>
            <div className={styles.textWrapper}>
              <span className={styles.creativeStudio}>Creative Studio</span>
            </div>
          </div>
          <p className={styles.heroParagraph}>
            Fully-equipped studio space with professional lighting, backdrops, and equipment. Perfect for photography, videography, and creative productions.
          </p>
        </section>

        {/* Studio Gallery */}
        <section className={styles.gallerySection}>
          <div className={styles.galleryGrid}>
            <div className={styles.galleryItem}>
              <div className={styles.galleryImage}></div>
              <div className={styles.galleryOverlay}></div>
            </div>
            <div className={styles.galleryItem}>
              <div className={styles.galleryImage}></div>
              <div className={styles.galleryOverlay}></div>
            </div>
            <div className={styles.galleryItem}>
              <div className={styles.galleryImage}></div>
              <div className={styles.galleryOverlay}></div>
            </div>
            <div className={styles.galleryItem}>
              <div className={styles.galleryImage}></div>
              <div className={styles.galleryOverlay}></div>
            </div>
          </div>
        </section>

        {/* Rates and Amenities Section */}
        <section className={styles.ratesSection}>
          {/* Hourly Rates */}
          <div className={styles.ratesCard}>
            <h2 className={styles.ratesHeading}>Hourly Rates</h2>
            
            <div className={styles.priceContainer}>
              <div className={styles.price}>
                <span className={styles.priceAmount}>$75</span>
                <span className={styles.priceUnit}>/hour</span>
              </div>
              
              <ul className={styles.ratesList}>
                <li className={styles.ratesItem}>
                  <div className={styles.bullet}></div>
                  <span>4-hour minimum booking</span>
                </li>
                <li className={styles.ratesItem}>
                  <div className={styles.bullet}></div>
                  <span>Equipment included</span>
                </li>
                <li className={styles.ratesItem}>
                  <div className={styles.bullet}></div>
                  <span>Professional lighting setup</span>
                </li>
                <li className={styles.ratesItem}>
                  <div className={styles.bullet}></div>
                  <span>Flexible scheduling</span>
                </li>
              </ul>
            </div>

            <div className={styles.specialOffer}>
              <p>
                <span className={styles.offerLabel}>Special Offer:</span>
                {' '}Book 8+ hours and get 15% discount
              </p>
            </div>

            <div className={styles.pixelPatternSmall}></div>
          </div>

          {/* Studio Amenities */}
          <div className={styles.amenitiesContainer}>
            <h2 className={styles.amenitiesHeading}>Studio Amenities</h2>

            <div className={styles.amenityCard}>
              <div className={styles.amenityIcon}>
                <svg viewBox="0 0 24 24" className={styles.icon}>
                  <path d="M8 4a3 3 0 100 6 3 3 0 000-6zM4 11a3 3 0 00-3 3v1h14v-1a3 3 0 00-3-3H4z" />
                </svg>
              </div>
              <div className={styles.amenityContent}>
                <h4 className={styles.amenityTitle}>Professional Cameras</h4>
                <p className={styles.amenityText}>Sony A7 III & Canon EOS R5</p>
              </div>
            </div>

            <div className={styles.amenityCard}>
              <div className={styles.amenityIcon}>
                <svg viewBox="0 0 24 24" className={styles.icon}>
                  <path d="M6 2v8M12 18v1M12 23v1" />
                </svg>
              </div>
              <div className={styles.amenityContent}>
                <h4 className={styles.amenityTitle}>Studio Lighting</h4>
                <p className={styles.amenityText}>Godox & Profoto lighting kits</p>
              </div>
            </div>

            <div className={styles.amenityCard}>
              <div className={styles.amenityIcon}>
                <svg viewBox="0 0 24 24" className={styles.icon}>
                  <path d="M16 7l6 5M2 6h12" />
                </svg>
              </div>
              <div className={styles.amenityContent}>
                <h4 className={styles.amenityTitle}>Video Equipment</h4>
                <p className={styles.amenityText}>4K recording & gimbals</p>
              </div>
            </div>

            <div className={styles.amenityCard}>
              <div className={styles.amenityIcon}>
                <svg viewBox="0 0 24 24" className={styles.icon}>
                  <path d="M2 15l6-8M8 7l4-2M19 15l-3-6" />
                </svg>
              </div>
              <div className={styles.amenityContent}>
                <h4 className={styles.amenityTitle}>Props & Backdrops</h4>
                <p className={styles.amenityText}>Variety of backgrounds</p>
              </div>
            </div>
          </div>
        </section>

        {/* Booking Form Section */}
        <section className={styles.bookingSection}>
          <div className={styles.bookingContainer}>
            <div className={styles.pixelPatternLarge}></div>
            <div className={styles.pixelPatternSmallBottom}></div>

            <div className={styles.bookingHeader}>
              <svg className={styles.calendarIcon} viewBox="0 0 24 24">
                <path d="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z" />
              </svg>
              <h2 className={styles.bookingHeading}>Book Your Session</h2>
            </div>

            <form className={styles.bookingForm}>
              {/* Date Picker */}
              <div className={styles.formGroup}>
                <label className={styles.label}>Select Date</label>
                <div className={styles.datePicker}>
                  <svg className={styles.inputIcon} viewBox="0 0 20 20">
                    <path d="M5 2v2M15 2v2M3 4h14v14H3z" />
                  </svg>
                </div>
              </div>

              {/* Time Slot Selection */}
              <div className={styles.formGroup}>
                <label className={styles.label}>Select Time Slot</label>
                <div className={styles.timeSlots}>
                  <button type="button" className={`${styles.timeSlot} ${styles.active}`}>
                    <div className={styles.slotHeader}>
                      <div className={styles.slotInfo}>
                        <svg className={styles.slotIcon} viewBox="0 0 20 20">
                          <circle cx="10" cy="10" r="8" />
                        </svg>
                        <span className={styles.slotLabel}>Morning Slot</span>
                      </div>
                      <svg className={styles.checkIcon} viewBox="0 0 20 20">
                        <path d="M4 10l4 4 8-8" />
                      </svg>
                    </div>
                    <p className={styles.slotTime}>9:00 AM - 1:00 PM</p>
                    <span className={styles.slotStatus}>● Available</span>
                  </button>

                  <button type="button" className={styles.timeSlot}>
                    <div className={styles.slotHeader}>
                      <div className={styles.slotInfo}>
                        <svg className={styles.slotIcon} viewBox="0 0 20 20">
                          <circle cx="10" cy="10" r="8" />
                        </svg>
                        <span className={styles.slotLabel}>Evening Slot</span>
                      </div>
                    </div>
                    <p className={styles.slotTime}>2:00 PM - 6:00 PM</p>
                    <span className={styles.slotStatus}>● Available</span>
                  </button>
                </div>
              </div>

              {/* Contact Information */}
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Full Name *</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className={styles.textInput}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Email *</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className={styles.emailInput}
                  />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Phone Number *</label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    className={styles.phoneInput}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Company Name</label>
                  <input
                    type="text"
                    placeholder="Your Company"
                    className={styles.textInput}
                  />
                </div>
              </div>

              {/* Project Type */}
              <div className={styles.formGroup}>
                <label className={styles.label}>Project Type *</label>
                <select className={styles.dropdown}>
                  <option>Select project type</option>
                  <option>Product Photography</option>
                  <option>Portrait / Headshots</option>
                  <option>Fashion Shoot</option>
                  <option>Video Production</option>
                  <option>Commercial Shoot</option>
                  <option>Other</option>
                </select>
              </div>

              {/* Special Requirements */}
              <div className={styles.formGroup}>
                <label className={styles.label}>Special Requirements</label>
                <textarea
                  className={styles.textarea}
                  placeholder="Tell us about your project needs, equipment requirements, etc."
                  rows="5"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button type="submit" className={styles.submitButton}>
                <span>Request Booking</span>
                <svg className={styles.arrowIcon} viewBox="0 0 20 20">
                  <path d="M4 10h12M12 6l4 4-4 4" />
                </svg>
              </button>

              <p className={styles.formNote}>
                {`We'll review your request and confirm availability within 24 hours`}
              </p>
            </form>
          </div>
        </section>

        {/* Location Section */}
        <section className={styles.locationSection}>
          <div className={styles.locationIcon}>
            <svg viewBox="0 0 24 24">
              <path d="M12 2a8 8 0 00-8 8c0 5.5 8 14 8 14s8-8.5 8-14a8 8 0 00-8-8z" />
            </svg>
          </div>
          <div className={styles.locationContent}>
            <h3 className={styles.locationHeading}>Studio Location</h3>
            <p className={styles.locationAddress}>
              123 Creative Avenue, Downtown Arts District
              <br />
              Los Angeles, CA 90012
            </p>
            <p className={styles.locationDetails}>
              Free parking available • Easy metro access • Elevator access
            </p>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerBrand}>
            <div className={styles.footerLogo}></div>
            <p className={styles.footerTagline}>
              Responsible creativity for every pixel. Building brands that matter.
            </p>
            <div className={styles.footerPixelPattern}></div>
          </div>

          <div className={styles.footerLinks}>
            <h4 className={styles.footerHeading}>Quick Links</h4>
            <ul className={styles.footerList}>
              <li><a href="#">About</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Portfolio</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Studio Booking</a></li>
            </ul>
          </div>

          <div className={styles.footerLinks}>
            <h4 className={styles.footerHeading}>Portfolio</h4>
            <ul className={styles.footerList}>
              <li><a href="#">Branding Projects</a></li>
              <li><a href="#">Photography</a></li>
              <li><a href="#">Video Production</a></li>
              <li><a href="#">Digital Campaigns</a></li>
              <li><a href="#">Case Studies</a></li>
            </ul>
          </div>

          <div className={styles.footerLinks}>
            <h4 className={styles.footerHeading}>Contact</h4>
            <ul className={styles.footerContactList}>
              <li>
                <svg className={styles.contactIcon} viewBox="0 0 18 18">
                  <path d="M3 6l6 4 6-4M3 6v9h12V6" stroke="currentColor" fill="none" />
                </svg>
                hello@rastermedia.com
              </li>
              <li>
                <svg className={styles.contactIcon} viewBox="0 0 18 18">
                  <path d="M3 3h12v12H3z" stroke="currentColor" fill="none" />
                </svg>
                +1 (555) 123-4567
              </li>
              <li>
                <svg className={styles.contactIcon} viewBox="0 0 18 18">
                  <path d="M9 3a3 3 0 100 6 3 3 0 000-6zM5 13a3 3 0 00-3 3v1h14v-1a3 3 0 00-3-3H5z" />
                </svg>
                123 Creative Street, NY 10001
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p className={styles.copyright}>© 2024 Raster Media. All rights reserved.</p>
          <div className={styles.socialLinks}>
            <a href="#" className={styles.socialLink}>
              <svg viewBox="0 0 20 20">
                <circle cx="10" cy="10" r="8" stroke="currentColor" fill="none" />
              </svg>
            </a>
            <a href="#" className={styles.socialLink}>
              <svg viewBox="0 0 20 20">
                <path d="M8 7h4v6H8z" fill="currentColor" />
              </svg>
            </a>
            <a href="#" className={styles.socialLink}>
              <svg viewBox="0 0 20 20">
                <path d="M6 5h8v8H6z" stroke="currentColor" fill="none" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}