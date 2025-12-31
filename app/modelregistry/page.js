"use client";

import { useState } from 'react';
import styles from './modelregistry.module.css';

export default function ModelRegistrationPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    email: '',
    phone: '',
    height: '',
    country: '',
    gender: '',
    portfolioLink: '',
    instagram: '',
    linkedin: '',
    twitter: '',
    tiktok: '',
    otherLinks: '',
    experience: '',
  });

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const categories = ['Fashion', 'Commercial', 'Editorial', 'Fitness', 'Runway', 'Print'];
  const languages = ['English', 'Spanish', 'French', 'German', 'Italian', 'Portuguese', 'Mandarin', 'Japanese', 'Korean', 'Arabic'];

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  function toggleCategory(category) {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  }

  function toggleLanguage(language) {
    setSelectedLanguages(prev =>
      prev.includes(language)
        ? prev.filter(l => l !== language)
        : [...prev, language]
    );
  }

  function handleFileUpload(e) {
    const files = Array.from(e.target.files);
    setUploadedFiles(prev => [...prev, ...files].slice(0, 10));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // TODO: Implement actual form submission
    console.log('Form Data:', formData);
    console.log('Categories:', selectedCategories);
    console.log('Languages:', selectedLanguages);
    console.log('Files:', uploadedFiles);
    alert('Application submitted successfully!');
  }

  return (
    <div className={styles.app}>
      <div className={styles.modelApplicationPage}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.heading1}>
            <span className={styles.becomeA}>Become a</span>
            <div className={styles.textWrapper}>
              <span className={styles.rasterModel}>Raster Model</span>
            </div>
          </div>
          <p className={styles.heroParagraph}>
            Join our exclusive roster of professional models and work with leading brands worldwide
          </p>
        </section>

        {/* Form */}
        <form className={styles.form} onSubmit={handleSubmit}>
          {/* Personal Information */}
          <div className={styles.formContainer}>
            <div className={styles.sectionHeader}>
              <svg className={styles.icon} viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="8" r="4" stroke="#5DCDDB" strokeWidth="2"/>
                <path d="M6 21v-2a4 4 0 014-4h4a4 4 0 014 4v2" stroke="#5DCDDB" strokeWidth="2"/>
              </svg>
              <h3 className={styles.heading3}>Personal Information</h3>
            </div>

            <div className={styles.formGrid}>
              <div className={styles.formRow}>
                <div className={styles.inputGroup}>
                  <label className={styles.label}>Full Name *</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    className={styles.textInput}
                    required
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label className={styles.label}>Age *</label>
                  <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleInputChange}
                    placeholder="Your age"
                    className={styles.textInput}
                    required
                  />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.inputGroup}>
                  <label className={styles.label}>Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    className={styles.textInput}
                    required
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label className={styles.label}>Phone *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+1 (555) 000-0000"
                    className={styles.textInput}
                    required
                  />
                </div>
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.label}>Height *</label>
                <input
                  type="text"
                  name="height"
                  value={formData.height}
                  onChange={handleInputChange}
                  placeholder="e.g., 5'9&quot; or 175cm"
                  className={styles.textInput}
                  required
                />
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.label}>Country *</label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  placeholder="Your country"
                  className={styles.textInput}
                  required
                />
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.label}>Gender *</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  className={styles.selectInput}
                  required
                >
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="non-binary">Non-binary</option>
                  <option value="other">Other</option>
                  <option value="prefer-not-to-say">Prefer not to say</option>
                </select>
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.label}>Portfolio Link (Optional)</label>
                <input
                  type="url"
                  name="portfolioLink"
                  value={formData.portfolioLink}
                  onChange={handleInputChange}
                  placeholder="https://yourportfolio.com"
                  className={styles.textInput}
                />
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className={styles.formContainer}>
            <div className={styles.sectionHeader}>
              <svg className={styles.icon} viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="#5DCDDB" strokeWidth="2"/>
                <circle cx="12" cy="12" r="3" fill="#5DCDDB"/>
                <path d="M12 2v4M12 18v4M2 12h4M18 12h4" stroke="#5DCDDB" strokeWidth="2"/>
              </svg>
              <h3 className={styles.heading3}>Social Media</h3>
            </div>

            <div className={styles.formGrid}>
              <div className={styles.inputGroup}>
                <label className={styles.label}>Instagram Handle *</label>
                <input
                  type="text"
                  name="instagram"
                  value={formData.instagram}
                  onChange={handleInputChange}
                  placeholder="@yourusername"
                  className={styles.textInput}
                  required
                />
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.label}>LinkedIn Profile (Optional)</label>
                <input
                  type="url"
                  name="linkedin"
                  value={formData.linkedin}
                  onChange={handleInputChange}
                  placeholder="linkedin.com/in/yourprofile"
                  className={styles.textInput}
                />
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.label}>Twitter Handle (Optional)</label>
                <input
                  type="text"
                  name="twitter"
                  value={formData.twitter}
                  onChange={handleInputChange}
                  placeholder="@yourusername"
                  className={styles.textInput}
                />
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.label}>TikTok Handle (Optional)</label>
                <input
                  type="text"
                  name="tiktok"
                  value={formData.tiktok}
                  onChange={handleInputChange}
                  placeholder="@yourusername"
                  className={styles.textInput}
                />
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.label}>Other Links (Optional)</label>
                <input
                  type="url"
                  name="otherLinks"
                  value={formData.otherLinks}
                  onChange={handleInputChange}
                  placeholder="https://yourwebsite.com"
                  className={styles.textInput}
                />
              </div>
            </div>
          </div>

          {/* Modeling Categories */}
          <div className={styles.formContainer}>
            <h3 className={styles.heading3}>Modeling Categories *</h3>
            <div className={styles.buttonGrid}>
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => toggleCategory(category)}
                  className={`${styles.categoryButton} ${
                    selectedCategories.includes(category) ? styles.active : ''
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Experience & Background */}
          <div className={styles.formContainer}>
            <h3 className={styles.heading3}>Experience & Background</h3>
            <textarea
              name="experience"
              value={formData.experience}
              onChange={handleInputChange}
              placeholder="Tell us about your modeling experience, training, and any notable work..."
              className={styles.textArea}
              rows="6"
            />
          </div>

          {/* Portfolio Photos */}
          <div className={styles.formContainer}>
            <h3 className={styles.heading3}>Portfolio Photos *</h3>
            <label className={styles.uploadBox}>
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleFileUpload}
                className={styles.hiddenFileInput}
                required
              />
              <svg className={styles.uploadIcon} viewBox="0 0 48 48" fill="none">
                <path d="M24 8v24M24 8l-8 8M24 8l8 8M8 32v8h32v-8" stroke="#5DCDDB" strokeWidth="4"/>
              </svg>
              <p className={styles.uploadTitle}>Upload Your Portfolio</p>
              <p className={styles.uploadSubtext}>
                Drag and drop or click to upload (Max 10 images, 5MB each)
              </p>
              {uploadedFiles.length > 0 && (
                <p className={styles.uploadedCount}>
                  {uploadedFiles.length} file(s) selected
                </p>
              )}
            </label>
          </div>

          {/* Languages Spoken */}
          <div className={styles.formContainer}>
            <h3 className={styles.heading3}>Languages Spoken *</h3>
            <div className={styles.buttonGrid}>
              {languages.map((language) => (
                <button
                  key={language}
                  type="button"
                  onClick={() => toggleLanguage(language)}
                  className={`${styles.categoryButton} ${
                    selectedLanguages.includes(language) ? styles.active : ''
                  }`}
                >
                  {language}
                </button>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <div className={styles.submitContainer}>
            <button type="submit" className={styles.submitButton}>
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}