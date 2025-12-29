import styles from './contact.module.css';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className={styles.app}>
      <div className={styles.contactPage}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.heading1}>
            <h1 className={styles.mainTitle}>
              Let us Create Something
            </h1>
            <div className={styles.gradientText}>
              <span>Extraordinary</span>
            </div>
          </div>
          <p className={styles.heroParagraph}>
            Have a project in mind? We&apos;d love to hear from you
          </p>
        </section>

        {/* Main Content Section */}
        <section className={styles.mainSection}>
          {/* Left Column */}
          <div className={styles.leftColumn}>
            {/* Contact Information */}
            <div className={styles.contactInfoCard}>
              <h2 className={styles.cardTitle}>Contact Information</h2>
              
              <div className={styles.contactList}>
                {/* Email */}
                <div className={styles.contactItem}>
                  <div className={styles.iconBox}>
                    <Mail size={20} className={styles.icon} />
                  </div>
                  <div className={styles.contactDetails}>
                    <p className={styles.label}>Email</p>
                    <a href="mailto:hello@rastermedia.com" className={styles.link}>
                      hello@rastermedia.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className={styles.contactItem}>
                  <div className={styles.iconBox}>
                    <Phone size={20} className={styles.icon} />
                  </div>
                  <div className={styles.contactDetails}>
                    <p className={styles.label}>Phone</p>
                    <a href="tel:+15551234567" className={styles.link}>
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className={styles.contactItem}>
                  <div className={styles.iconBox}>
                    <MapPin size={20} className={styles.icon} />
                  </div>
                  <div className={styles.contactDetails}>
                    <p className={styles.label}>Office</p>
                    <div className={styles.address}>
                      <p>123 Creative Street</p>
                      <p>New York, NY 10001</p>
                      <p>United States</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className={styles.socialSection}>
                <h3 className={styles.socialTitle}>Follow Us</h3>
                <div className={styles.socialLinks}>
                  <a href="#" className={styles.socialLink}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2"/>
                      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
                      <circle cx="18" cy="6" r="1" fill="currentColor"/>
                    </svg>
                  </a>
                  <a href="#" className={styles.socialLink}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </a>
                  <a href="#" className={styles.socialLink}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className={styles.quickActionsCard}>
              <div className={styles.pixelPattern}>
                {[...Array(9)].map((_, i) => (
                  <div key={i} className={styles.pixel}></div>
                ))}
              </div>
              <h2 className={styles.cardTitle}>Quick Actions</h2>
              <div className={styles.actionsList}>
                <a href="#" className={styles.actionLink}>
                  <MessageCircle size={20} className={styles.icon} />
                  <span>WhatsApp</span>
                </a>
                <a href="mailto:hello@rastermedia.com" className={styles.actionLink}>
                  <Mail size={20} className={styles.icon} />
                  <span>Email Us</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className={styles.formCard}>
            <h2 className={styles.formTitle}>Send Us a Message</h2>
            <form className={styles.form}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="fullName" className={styles.formLabel}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    placeholder="John Doe"
                    className={styles.formInput}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.formLabel}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="john@example.com"
                    className={styles.formInput}
                  />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="phone" className={styles.formLabel}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="+1 (555) 000-0000"
                    className={styles.formInput}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="company" className={styles.formLabel}>
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    placeholder="Your Company"
                    className={styles.formInput}
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="projectType" className={styles.formLabel}>
                  Project Type *
                </label>
                <select id="projectType" className={styles.formSelect}>
                  <option value="">Select a project type</option>
                  <option value="branding">Branding</option>
                  <option value="web">Web Development</option>
                  <option value="photography">Photography</option>
                  <option value="video">Video Production</option>
                  <option value="marketing">Digital Marketing</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.formLabel}>
                  Message *
                </label>
                <textarea
                  id="message"
                  rows="6"
                  placeholder="Tell us about your project..."
                  className={styles.formTextarea}
                ></textarea>
              </div>

              <button type="submit" className={styles.submitButton}>
                <div className={styles.buttonShine}></div>
                <Send size={20} />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </section>

        {/* Visit Studio Section */}
        <section className={styles.studioSection}>
          <div className={styles.studioContent}>
            <MapPin size={48} className={styles.studioIcon} />
            <h2 className={styles.studioTitle}>Visit Our Studio</h2>
            <p className={styles.studioAddress}>
              123 Creative Street, New York, NY 10001
            </p>
            <a href="#" className={styles.mapsLink}>
              Open in Google Maps →
            </a>
          </div>
        </section>
      </div>


    </div>
  );
}