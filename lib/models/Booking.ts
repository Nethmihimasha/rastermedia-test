function BookingModal() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    additionalHours: '0',
    notes: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: formData.name,
          email: formData.email,
          phone: formData.phone,
          packageType: packageType === 'backdrop' 
            ? 'Seamless Backdrop Package' 
            : 'Podcast / Interior Package',
          preferredDate: formData.date,
          preferredTime: formData.time,
          additionalHours: parseInt(formData.additionalHours),
          additionalNotes: formData.notes,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus('success');
        // Reset form after 3 seconds and close modal
        setTimeout(() => {
          setFormData({
            name: '',
            email: '',
            phone: '',
            date: '',
            time: '',
            additionalHours: '0',
            notes: ''
          });
          setSubmitStatus(null);
          setIsModalOpen(false);
        }, 3000);
      } else {
        setSubmitStatus('error');
        console.error('Booking error:', data.error);
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Network error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const totalPrice = currentPackage.price + (parseInt(formData.additionalHours || 0) * currentPackage.extraHourPrice);

  return (
    <AnimatePresence>
      {isModalOpen && (
        <motion.div
          className={styles.modalOverlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsModalOpen(false)}
        >
          <motion.div
            className={styles.modalContent}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={styles.closeButton} onClick={() => setIsModalOpen(false)}>
              <X size={20} />
            </button>

            <div className={styles.modalHeader}>
              <Calendar size={48} className={styles.modalIcon} />
              <div>
                <h2 className={styles.modalTitle}>Book Your Studio Session</h2>
                <p className={styles.modalSubtitle}>
                  {packageType === 'backdrop' ? 'Seamless Backdrop Package' : 'Podcast / Interior Package'} - {selectedDuration}
                </p>
              </div>
            </div>

            {/* Success Message */}
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={styles.successMessage}
              >
                <Check size={24} />
                <div>
                  <strong>Booking Request Received!</strong>
                  <p>We've received your booking request and sent a confirmation email. We'll check availability and confirm your booking shortly.</p>
                </div>
              </motion.div>
            )}

            {/* Error Message */}
            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={styles.errorMessage}
              >
                <X size={24} />
                <div>
                  <strong>Submission Failed</strong>
                  <p>Please try again or contact us directly.</p>
                </div>
              </motion.div>
            )}

            <form className={styles.bookingForm} onSubmit={handleSubmit}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>
                    <User size={16} />
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder="John Doe"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label}>
                    <Mail size={16} />
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder="john@example.com"
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>
                    <Phone size={16} />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder="+94 77 123 4567"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label}>
                    <Calendar size={16} />
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className={styles.input}
                    min={new Date().toISOString().split('T')[0]}
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>
                    <Clock size={16} />
                    Preferred Time
                  </label>
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className={styles.select}
                    required
                    disabled={isSubmitting}
                  >
                    <option value="">Select time</option>
                    <option value="9:00 AM">9:00 AM</option>
                    <option value="10:00 AM">10:00 AM</option>
                    <option value="11:00 AM">11:00 AM</option>
                    <option value="12:00 PM">12:00 PM</option>
                    <option value="1:00 PM">1:00 PM</option>
                    <option value="2:00 PM">2:00 PM</option>
                    <option value="3:00 PM">3:00 PM</option>
                    <option value="4:00 PM">4:00 PM</option>
                    <option value="5:00 PM">5:00 PM</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label}>
                    <Clock size={16} />
                    Additional Hours
                  </label>
                  <select
                    name="additionalHours"
                    value={formData.additionalHours}
                    onChange={handleChange}
                    className={styles.select}
                    disabled={isSubmitting}
                  >
                    <option value="0">None</option>
                    <option value="1">+1 Hour (LKR {currentPackage.extraHourPrice.toLocaleString()})</option>
                    <option value="2">+2 Hours (LKR {(currentPackage.extraHourPrice * 2).toLocaleString()})</option>
                    <option value="3">+3 Hours (LKR {(currentPackage.extraHourPrice * 3).toLocaleString()})</option>
                    <option value="4">+4 Hours (LKR {(currentPackage.extraHourPrice * 4).toLocaleString()})</option>
                  </select>
                </div>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>
                  <MessageSquare size={16} />
                  Additional Notes
                </label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  className={styles.textarea}
                  placeholder="Any special requirements or questions?"
                  disabled={isSubmitting}
                />
              </div>

              <div className={styles.priceSummary}>
                <div className={styles.summaryRow}>
                  <span>Base Package ({selectedDuration})</span>
                  <span className={styles.summaryPrice}>LKR {currentPackage.price.toLocaleString()}</span>
                </div>
                {parseInt(formData.additionalHours) > 0 && (
                  <div className={styles.summaryRow}>
                    <span>Additional Hours ({formData.additionalHours})</span>
                    <span className={styles.summaryPrice}>
                      LKR {(currentPackage.extraHourPrice * parseInt(formData.additionalHours)).toLocaleString()}
                    </span>
                  </div>
                )}
                <div className={styles.summaryRow} style={{ borderTop: '1px solid rgba(93, 205, 219, 0.2)', paddingTop: '12px', marginTop: '12px' }}>
                  <span style={{ fontSize: '18px', color: '#FFFFFF' }}>Total</span>
                  <span className={styles.summaryPrice} style={{ fontSize: '24px' }}>
                    LKR {totalPrice.toLocaleString()}
                  </span>
                </div>
              </div>

              <button 
                type="submit" 
                className={styles.submitButton}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    Confirm Booking
                    <ArrowRight size={20} />
                  </>
                )}
              </button>

              <p className={styles.formNote}>
                * Final confirmation will be sent via email after reviewing your booking request.
              </p>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}