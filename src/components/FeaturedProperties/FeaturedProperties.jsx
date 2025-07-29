import './FeaturedProperties.css';
import { properties, formatPrice } from '../../data/properties';
import { FaBed, FaBath, FaToilet, FaMapMarkerAlt, FaTag } from 'react-icons/fa';

const FeaturedProperties = () => {
  const featured = properties.slice(0, 6); // Top 6 only

  return (
    <section className="featured-section">
      <h2 className="section-title">Featured Properties</h2>
      <div className="property-grid">
        {featured.map((property, index) => (
          <div className="property-card" key={index}>
            <div className="image-side">
              <img src={property.photos[0]} alt={property.propertyType} />
              <span className="property-tag">
                <FaTag className="icon" /> {property.advert}
              </span>
            </div>

            <div className="info-side">
              <div className="text-group">
                <h3 className="property-title">{property.title}</h3>
                <p className="property-desc">{property.description}</p>
                <p className="location">
                  <FaMapMarkerAlt className="icon" /> {property.city}, {property.state}
                </p>
              </div>

              <div className="price-group">
                <p className="price">
                  {formatPrice(property.price)}{' '}
                  <span className="per">per annum</span>
                </p>
                <div className="features">
                  {property.bedroom && (
                    <span>
                      <FaBed className="feature-icon" /> {property.bedroom}
                    </span>
                  )}
                  {property.bathroom && (
                    <span>
                      <FaBath className="feature-icon" /> {property.bathroom}
                    </span>
                  )}
                  {property.toilets && (
                    <span>
                      <FaToilet className="feature-icon" /> {property.toilets}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProperties;
