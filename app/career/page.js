"use client";

import { useState } from 'react';
import styles from './career.module.css';


export default function CareersPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState('');

  function openModal(title) {
    setSelectedJob(title);
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
    setSelectedJob('');
  }

  function handleSubmit(e) {
    e.preventDefault();
    // TODO: wire up real submission
    closeModal();
  }

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

        {isModalOpen && (
          <div className={styles.modalOverlay} onClick={closeModal}>
            <div className={styles.modalContainer} onClick={(e) => e.stopPropagation()}>
              <div className={styles.modalInner}>
                <div className={styles.modalHeader}>
                  <h3 className={styles.modalTitle}>{selectedJob || 'Studio Assistant'}</h3>
                  <button className={styles.modalClose} onClick={closeModal} aria-label="Close">×</button>
                </div>

                <div className={styles.modalBodyGrid}>
                  <div className={styles.modalDetails}>
                    <div className={styles.jobDetailsTop}>
                      <div className={styles.jobDetail}><span>New York, NY</span></div>
                      <div className={styles.jobDetail}><span>Full-time</span></div>
                      <div className={styles.jobDetail}><span>$35k - $45k</span></div>
                    </div>

                    <h4 className={styles.sectionHeading}>Responsibilities</h4>
                    <ul className={styles.modalList}>
                      <li>Assist studio sessions and prepare equipment</li>
                      <li>Support photographers and videographers on set</li>
                      <li>Manage gear inventory and studio upkeep</li>
                      <li>Help with client communication and logistics</li>
                    </ul>

                    <h4 className={styles.sectionHeading}>Requirements</h4>
                    <ul className={styles.modalList}>
                      <li>1+ years in a studio or production environment</li>
                      <li>Comfortable handling camera and lighting equipment</li>
                      <li>Strong communication and teamwork skills</li>
                      <li>Reliable, punctual, and detail oriented</li>
                    </ul>
                  </div>

                  <div className={styles.modalApply}> 
                    <p className={styles.modalSubtitle}>Apply for this Position</p>
                    <form className={styles.modalForm} onSubmit={handleSubmit}>
                      <div className={styles.modalRow}>
                        <input name="name" placeholder="Full Name" className={styles.modalInput} required />
                        <input name="email" type="email" placeholder="Email Address" className={styles.modalInput} required />
                      </div>
                      <label className={styles.uploadBox}>
                        <div className={styles.uploadIconPlaceholder}></div>
                        <div className={styles.uploadTextBlock}>
                          <span className={styles.uploadTitle}>Upload Resume & Portfolio</span>
                          <span className={styles.uploadSubtitle}>PDF or DOCX (Max 10MB)</span>
                        </div>
                        <input className={styles.hiddenFileInput} type="file" name="resume" accept=".pdf,.doc,.docx" />
                      </label>
                      <textarea name="cover" placeholder="Cover letter (optional)" className={styles.modalTextarea}></textarea>
                      <button type="submit" className={styles.modalSubmit}>Submit Application</button>
                    </form>
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}

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
            <div className={styles.jobCard}>
              <div className={styles.jobHeader}>
                <div className={styles.jobInfo}>
                  <h3 className={styles.jobTitle}>Studio Assistant</h3>
                  <span className={styles.jobCategory}>Production</span>
                </div>
                <button
                  className={styles.applyButton}
                  onClick={() => openModal('Studio Assistant')}
                >
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
                  <span>$35k - $45k</span>
                </div>
              </div>
              <p className={styles.jobExcerpt}>
                Support studio operations and assist on shoots. This role helps keep productions running smoothly and provides hands-on experience with equipment and client services.
              </p>
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
              <button 
                className={styles.modelButton}
                onClick={() => window.open('/modelregistry', '_blank')}
              >
                Apply as a Model
              </button>
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
            <h3 className={styles.customRoleHeading}>Don&apos;t See Your Role?</h3>
            <p className={styles.customRoleParagraph}>
              We are always interested in meeting talented individuals. Send us your resume and we&apos;ll keep you in mind for future opportunities.
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
                Submit Application
              </button>
            </form>
          </div>
        </section>
      </div>


    </div>
  );
}