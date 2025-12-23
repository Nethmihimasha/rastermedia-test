import styles from './career.module.css';


export default function CareersPage() {
  return (
    <div className={styles.app}>
      <div className={styles.careersPage}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.heading1}>
            <span className={styles.joinOur}>Join Our</span>
            <div className={styles.textWrapper}>
              <span className={styles.creativeTeam}>Creative Team</span>
            </div>
          </div>
          <p className={styles.heroParagraph}>
           Be part of a talented team creating exceptional work for world-class brands
          </p>
        </section>

        {/* Why Work With Us Section */}
        <section className={styles.whyWorkSection}>
          <div className={styles.container}>
            <h2 className={styles.heading2}>Why Work With Us</h2>
            <div className={styles.benefitsContainer}>
              <div className={styles.benefitCard}>
                <h3 className={styles.benefitTitle}>Creative Freedom</h3>
                <p className={styles.benefitText}>
                  Work on diverse projects with creative autonomy and collaborative support
                </p>
              </div>
              <div className={styles.benefitCard}>
                <h3 className={styles.benefitTitle}>Growth Opportunities</h3>
                <p className={styles.benefitText}>
                  Continuous learning, mentorship, and career advancement opportunities
                </p>
              </div>
              <div className={styles.benefitCard}>
                <h3 className={styles.benefitTitle}>Premium Benefits</h3>
                <p className={styles.benefitText}>
                  Competitive salary, health insurance, retirement plans, and more
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Open Positions Section */}
        <section className={styles.positionsSection}>
          <div className={styles.positionsHeader}>
            <h2 className={styles.heading2}>
              <span className={styles.openText}>Open </span>
              <span className={styles.positionsText}>Positions</span>
            </h2>
            <p className={styles.positionsSubtext}>
              Explore our current openings and find your perfect role
            </p>
          </div>

          <div className={styles.jobListings}>
            {/* Job 1 */}
            <div className={styles.jobCard}>
              <div className={styles.jobHeader}>
                <div className={styles.jobInfo}>
                  <h3 className={styles.jobTitle}>Senior Graphic Designer</h3>
                  <span className={styles.jobCategory}>Creative</span>
                </div>
                <button className={styles.applyButton}>
                  <span>Apply Now</span>
                </button>
              </div>
              <div className={styles.jobDetails}>
                <div className={styles.jobDetail}>
                  <svg className={styles.icon} viewBox="0 0 16 16">
                    <path d="M8 2a3 3 0 100 6 3 3 0 000-6zM4 11a3 3 0 00-3 3v1h14v-1a3 3 0 00-3-3H4z" />
                  </svg>
                  <span>New York, NY</span>
                </div>
                <div className={styles.jobDetail}>
                  <svg className={styles.icon} viewBox="0 0 16 16">
                    <path d="M8 2a6 6 0 100 12A6 6 0 008 2z" />
                  </svg>
                  <span>Full-time</span>
                </div>
                <div className={styles.jobDetail}>
                  <svg className={styles.icon} viewBox="0 0 16 16">
                    <path d="M2 4h12v8H2z" />
                  </svg>
                  <span>$80k - $100k</span>
                </div>
              </div>
            </div>

            {/* Job 2 */}
            <div className={styles.jobCard}>
              <div className={styles.jobHeader}>
                <div className={styles.jobInfo}>
                  <h3 className={styles.jobTitle}>Photographer</h3>
                  <span className={styles.jobCategory}>Production</span>
                </div>
                <button className={styles.applyButton}>
                  <span>Apply Now</span>
                </button>
              </div>
              <div className={styles.jobDetails}>
                <div className={styles.jobDetail}>
                  <svg className={styles.icon} viewBox="0 0 16 16">
                    <path d="M8 2a3 3 0 100 6 3 3 0 000-6zM4 11a3 3 0 00-3 3v1h14v-1a3 3 0 00-3-3H4z" />
                  </svg>
                  <span>New York, NY / Remote</span>
                </div>
                <div className={styles.jobDetail}>
                  <svg className={styles.icon} viewBox="0 0 16 16">
                    <path d="M8 2a6 6 0 100 12A6 6 0 008 2z" />
                  </svg>
                  <span>Full-time</span>
                </div>
                <div className={styles.jobDetail}>
                  <svg className={styles.icon} viewBox="0 0 16 16">
                    <path d="M2 4h12v8H2z" />
                  </svg>
                  <span>$70k - $90k</span>
                </div>
              </div>
            </div>

            {/* Job 3 */}
            <div className={styles.jobCard}>
              <div className={styles.jobHeader}>
                <div className={styles.jobInfo}>
                  <h3 className={styles.jobTitle}>Video Producer</h3>
                  <span className={styles.jobCategory}>Production</span>
                </div>
                <button className={styles.applyButton}>
                  <span>Apply Now</span>
                </button>
              </div>
              <div className={styles.jobDetails}>
                <div className={styles.jobDetail}>
                  <svg className={styles.icon} viewBox="0 0 16 16">
                    <path d="M8 2a3 3 0 100 6 3 3 0 000-6zM4 11a3 3 0 00-3 3v1h14v-1a3 3 0 00-3-3H4z" />
                  </svg>
                  <span>New York, NY</span>
                </div>
                <div className={styles.jobDetail}>
                  <svg className={styles.icon} viewBox="0 0 16 16">
                    <path d="M8 2a6 6 0 100 12A6 6 0 008 2z" />
                  </svg>
                  <span>Full-time</span>
                </div>
                <div className={styles.jobDetail}>
                  <svg className={styles.icon} viewBox="0 0 16 16">
                    <path d="M2 4h12v8H2z" />
                  </svg>
                  <span>$85k - $110k</span>
                </div>
              </div>
            </div>

            {/* Job 4 */}
            <div className={styles.jobCard}>
              <div className={styles.jobHeader}>
                <div className={styles.jobInfo}>
                  <h3 className={styles.jobTitle}>Social Media Strategist</h3>
                  <span className={styles.jobCategory}>Strategy</span>
                </div>
                <button className={styles.applyButton}>
                  <span>Apply Now</span>
                </button>
              </div>
              <div className={styles.jobDetails}>
                <div className={styles.jobDetail}>
                  <svg className={styles.icon} viewBox="0 0 16 16">
                    <path d="M8 2a3 3 0 100 6 3 3 0 000-6zM4 11a3 3 0 00-3 3v1h14v-1a3 3 0 00-3-3H4z" />
                  </svg>
                  <span>Remote</span>
                </div>
                <div className={styles.jobDetail}>
                  <svg className={styles.icon} viewBox="0 0 16 16">
                    <path d="M8 2a6 6 0 100 12A6 6 0 008 2z" />
                  </svg>
                  <span>Full-time</span>
                </div>
                <div className={styles.jobDetail}>
                  <svg className={styles.icon} viewBox="0 0 16 16">
                    <path d="M2 4h12v8H2z" />
                  </svg>
                  <span>$65k - $85k</span>
                </div>
              </div>
            </div>

            {/* Job 5 */}
            <div className={styles.jobCard}>
              <div className={styles.jobHeader}>
                <div className={styles.jobInfo}>
                  <h3 className={styles.jobTitle}>Creative Director</h3>
                  <span className={styles.jobCategory}>Creative</span>
                </div>
                <button className={styles.applyButton}>
                  <span>Apply Now</span>
                </button>
              </div>
              <div className={styles.jobDetails}>
                <div className={styles.jobDetail}>
                  <svg className={styles.icon} viewBox="0 0 16 16">
                    <path d="M8 2a3 3 0 100 6 3 3 0 000-6zM4 11a3 3 0 00-3 3v1h14v-1a3 3 0 00-3-3H4z" />
                  </svg>
                  <span>New York, NY</span>
                </div>
                <div className={styles.jobDetail}>
                  <svg className={styles.icon} viewBox="0 0 16 16">
                    <path d="M8 2a6 6 0 100 12A6 6 0 008 2z" />
                  </svg>
                  <span>Full-time</span>
                </div>
                <div className={styles.jobDetail}>
                  <svg className={styles.icon} viewBox="0 0 16 16">
                    <path d="M2 4h12v8H2z" />
                  </svg>
                  <span>$120k - $150k</span>
                </div>
              </div>
            </div>

            {/* Job 6 */}
            <div className={styles.jobCard}>
              <div className={styles.jobHeader}>
                <div className={styles.jobInfo}>
                  <h3 className={styles.jobTitle}>Account Manager</h3>
                  <span className={styles.jobCategory}>Client Services</span>
                </div>
                <button className={styles.applyButton}>
                  <span>Apply Now</span>
                </button>
              </div>
              <div className={styles.jobDetails}>
                <div className={styles.jobDetail}>
                  <svg className={styles.icon} viewBox="0 0 16 16">
                    <path d="M8 2a3 3 0 100 6 3 3 0 000-6zM4 11a3 3 0 00-3 3v1h14v-1a3 3 0 00-3-3H4z" />
                  </svg>
                  <span>New York, NY</span>
                </div>
                <div className={styles.jobDetail}>
                  <svg className={styles.icon} viewBox="0 0 16 16">
                    <path d="M8 2a6 6 0 100 12A6 6 0 008 2z" />
                  </svg>
                  <span>Full-time</span>
                </div>
                <div className={styles.jobDetail}>
                  <svg className={styles.icon} viewBox="0 0 16 16">
                    <path d="M2 4h12v8H2z" />
                  </svg>
                  <span>$60k - $80k</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Model Registration Section */}
        <section className={styles.modelSection}>
          <div className={styles.modelContainer}>
            <div className={styles.modelContent}>
              <div className={styles.modelBadge}>Model Registration</div>
              <h2 className={styles.modelHeading}>
                <span className={styles.joinOur}>Join Our</span>
                <br />
                <span className={styles.modelRaster}>Model Raster</span>
              </h2>
              <p className={styles.modelParagraph}>
                Are you interested in modeling opportunities? Join our roster and work with premium brands
              </p>
              <ul className={styles.modelList}>
                <li>Work with premium brands and top-tier clients</li>
                <li>Professional development and mentorship</li>
                <li>Competitive rates and flexible schedules</li>
              </ul>
              <button className={styles.modelButton}>Apply as a Model</button>
            </div>
            <div className={styles.modelImage}>
              {/* Replace with actual image */}
              <div className={styles.modelImagePlaceholder}></div>
            </div>
          </div>
        </section>

        {/* Don't See Your Role Section */}
        <section className={styles.customRoleSection}>
          <div className={styles.customRoleContainer}>
            <div className={styles.pixelPattern}></div>
            <h3 className={styles.customRoleHeading}>Don't See Your Role?</h3>
            <p className={styles.customRoleParagraph}>
              We're always interested in meeting talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <form className={styles.customRoleForm}>
              <div className={styles.formRow}>
                <input 
                  type="text" 
                  placeholder="Full Name" 
                  className={styles.textInput}
                />
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className={styles.emailInput}
                />
              </div>
              <div className={styles.uploadContainer}>
                <svg className={styles.uploadIcon} viewBox="0 0 32 32">
                  <path d="M16 4v16M16 4l-6 6M16 4l6 6M4 20v8h24v-8" stroke="currentColor" fill="none" strokeWidth="2"/>
                </svg>
                <p className={styles.uploadText}>Upload Resume</p>
                <p className={styles.uploadSubtext}>PDF or DOCX (Max 5MB)</p>
              </div>
              <button type="submit" className={styles.submitButton}>
                Submit Resume
              </button>
            </form>
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
                  <path d="M3 6l6 4 6-4M3 6v9h12V6" stroke="currentColor" fill="none"/>
                </svg>
                hello@rastermedia.com
              </li>
              <li>
                <svg className={styles.contactIcon} viewBox="0 0 18 18">
                  <path d="M3 3h12v12H3z" stroke="currentColor" fill="none"/>
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
                <circle cx="10" cy="10" r="8" stroke="currentColor" fill="none"/>
              </svg>
            </a>
            <a href="#" className={styles.socialLink}>
              <svg viewBox="0 0 20 20">
                <path d="M8 7h4v6H8z" fill="currentColor"/>
              </svg>
            </a>
            <a href="#" className={styles.socialLink}>
              <svg viewBox="0 0 20 20">
                <path d="M6 5h8v8H6z" stroke="currentColor" fill="none"/>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}