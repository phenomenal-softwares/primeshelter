import React, { useState } from 'react';
import './HeroSection.css';

function HeroSection() {
  const [activeTab, setActiveTab] = useState('buy');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <section className="hero-section">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>Discover Your Dream Property</h1>
          <p>Explore homes, lands, and rentals from trusted agents across Nigeria.</p>

          <div className="search-box">
            <div className="search-tabs">
              <button className={activeTab === 'buy' ? 'active' : ''} onClick={() => setActiveTab('buy')}>Buy</button>
              <button className={activeTab === 'rent' ? 'active' : ''} onClick={() => setActiveTab('rent')}>Rent</button>
              <button className={activeTab === 'land' ? 'active' : ''} onClick={() => setActiveTab('land')}>Land</button>
            </div>

            <div className="search-input">
              <input 
                type="text" 
                placeholder={`Enter city or state to ${activeTab}`} 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button>Search</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
