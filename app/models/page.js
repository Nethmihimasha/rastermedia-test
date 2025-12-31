"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styles from './models.module.css';

// Mock authentication - Replace with your actual auth system
const checkAdminAuth = () => {
  // TODO: Replace with real authentication check
  // For now, check localStorage or session
  if (typeof window !== 'undefined') {
    return localStorage.getItem('isAdmin') === 'true';
  }
  return false;
};

export default function ModelsPage() {
  const router = useRouter();
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedGender, setSelectedGender] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Mock models data - Replace with actual API call
  const [models] = useState([
    {
      id: 1,
      name: 'Sophia Anderson',
      category: 'Fashion',
      gender: 'female',
      height: '5\'9"',
      image: '/images/models/model1.jpg'
    },
    {
      id: 2,
      name: 'Marcus Chen',
      category: 'Commercial',
      gender: 'male',
      height: '6\'1"',
      image: '/images/models/model2.jpg'
    },
    {
      id: 3,
      name: 'Isabella Torres',
      category: 'Editorial',
      gender: 'female',
      height: '5\'10"',
      image: '/images/models/model3.jpg'
    },
    {
      id: 4,
      name: 'James Rodriguez',
      category: 'Fitness',
      gender: 'male',
      height: '6\'2"',
      image: '/images/models/model4.jpg'
    },
    {
      id: 5,
      name: 'Emma Wilson',
      category: 'Commercial',
      gender: 'female',
      height: '5\'8"',
      image: '/images/models/model5.jpg'
    },
    {
      id: 6,
      name: 'Alex Kim',
      category: 'Fashion',
      gender: 'male',
      height: '6\'0"',
      image: '/images/models/model6.jpg'
    }
  ]);

  useEffect(() => {
    // Check admin authentication
    const adminStatus = checkAdminAuth();
    setIsAdmin(adminStatus);
    setIsLoading(false);

    // Redirect if not admin
    if (!adminStatus) {
      router.push('/');
    }
  }, [router]);

  const handleApplyAsModel = () => {
    window.open('/modelregistry', '_blank');
  };

  // Filter models based on selection
  const filteredModels = models.filter(model => {
    const genderMatch = selectedGender === 'all' || model.gender === selectedGender;
    const categoryMatch = selectedCategory === 'all' || model.category.toLowerCase() === selectedCategory;
    return genderMatch && categoryMatch;
  });

  if (isLoading) {
    return (
      <div className={styles.loading}>
        <p>Loading...</p>
      </div>
    );
  }

  if (!isAdmin) {
    return null; // Will redirect, but show nothing while redirecting
  }

  return (
    <div className={styles.app}>
      <div className={styles.modelsPage}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <h1 className={styles.heading1}>
            <span className={styles.premium}>Premium</span>
            <span className={styles.talentDirectory}>Talent Directory</span>
          </h1>
          <p className={styles.heroParagraph}>
            Discover our diverse roster of professional models available for fashion, commercial, and editorial projects.
          </p>
          <button className={styles.applyButton} onClick={handleApplyAsModel}>
            Apply as a Model
          </button>
        </section>

        {/* Filter Section */}
        <section className={styles.filterSection}>
          <div className={styles.filterContainer}>
            <div className={styles.filterHeader}>
              <svg className={styles.filterIcon} viewBox="0 0 20 20" fill="none">
                <path d="M2 5h16M5 10h10M8 15h4" stroke="#5DCDDB" strokeWidth="1.67" strokeLinecap="round"/>
              </svg>
              <h4 className={styles.filterHeading}>Filter Models</h4>
            </div>

            <div className={styles.filterGrid}>
              {/* Gender Filter */}
              <div className={styles.filterGroup}>
                <label className={styles.filterLabel}>Gender</label>
                <div className={styles.filterButtons}>
                  <button
                    className={`${styles.filterButton} ${selectedGender === 'all' ? styles.active : ''}`}
                    onClick={() => setSelectedGender('all')}
                  >
                    All
                  </button>
                  <button
                    className={`${styles.filterButton} ${selectedGender === 'male' ? styles.active : ''}`}
                    onClick={() => setSelectedGender('male')}
                  >
                    Male
                  </button>
                  <button
                    className={`${styles.filterButton} ${selectedGender === 'female' ? styles.active : ''}`}
                    onClick={() => setSelectedGender('female')}
                  >
                    Female
                  </button>
                </div>
              </div>

              {/* Category Filter */}
              <div className={styles.filterGroup}>
                <label className={styles.filterLabel}>Category</label>
                <div className={styles.filterButtons}>
                  <button
                    className={`${styles.filterButton} ${selectedCategory === 'all' ? styles.active : ''}`}
                    onClick={() => setSelectedCategory('all')}
                  >
                    All
                  </button>
                  <button
                    className={`${styles.filterButton} ${selectedCategory === 'fashion' ? styles.active : ''}`}
                    onClick={() => setSelectedCategory('fashion')}
                  >
                    Fashion
                  </button>
                  <button
                    className={`${styles.filterButton} ${selectedCategory === 'commercial' ? styles.active : ''}`}
                    onClick={() => setSelectedCategory('commercial')}
                  >
                    Commercial
                  </button>
                  <button
                    className={`${styles.filterButton} ${selectedCategory === 'editorial' ? styles.active : ''}`}
                    onClick={() => setSelectedCategory('editorial')}
                  >
                    Editorial
                  </button>
                  <button
                    className={`${styles.filterButton} ${selectedCategory === 'fitness' ? styles.active : ''}`}
                    onClick={() => setSelectedCategory('fitness')}
                  >
                    Fitness
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Models Grid */}
        <section className={styles.modelsGrid}>
          {filteredModels.length > 0 ? (
            filteredModels.map((model) => (
              <div key={model.id} className={styles.modelCard}>
                <div className={styles.modelImage}>
                  <div className={styles.modelImagePlaceholder}>
                    {/* Replace with actual image */}
                    <span className={styles.imagePlaceholderText}>{model.name}</span>
                  </div>
                </div>
                <h3 className={styles.modelName}>{model.name}</h3>
                <p className={styles.modelCategory}>{model.category}</p>
                <p className={styles.modelHeight}>{model.height}</p>
              </div>
            ))
          ) : (
            <div className={styles.noResults}>
              <p>No models found matching your filters.</p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}