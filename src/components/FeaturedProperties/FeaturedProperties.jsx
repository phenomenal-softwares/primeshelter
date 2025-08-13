import "./FeaturedProperties.css";
import { useState } from "react";
import { properties, formatPrice } from "../../data/properties";
import {
  FaBed,
  FaBath,
  FaToilet,
  FaMapMarkerAlt,
  FaTag,
  FaRulerCombined,
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
  FaRegBookmark,
} from "react-icons/fa";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const FeaturedProperties = () => {
  const featured = properties.slice(0, 6); // Top 6 only

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxSlides, setLightboxSlides] = useState([]);
  const [slideIndex, setSlideIndex] = useState(0);

  return (
    <section className="featured-section">
      <h2 className="section-title">Featured Properties</h2>
      <div className="property-grid">
        {featured.map((property, index) => (
          <div className="property-card" key={index}>
            <div
              className="property-image"
              onClick={() => {
                const slides = property.photos.map((src) => ({ src }));
                setLightboxSlides(slides);
                setSlideIndex(0);
                setLightboxOpen(true);
              }}
            >
              <img src={property.photos[0]} alt={property.title} />
              <span className="property-tag">
                <FaTag className="icon" /> {property.advert.replace("-", " ")}
              </span>
            </div>

            <div className="info-side">
              <div className="text-group">
                <h3 className="property-title">{property.title}</h3>
                <p className="property-desc">{property.description}</p>
                <p className="location">
                  <FaMapMarkerAlt className="icon" /> {property.city},{" "}
                  {property.state}
                </p>
              </div>

              <div className="price-group">
                <div className="property-meta">
                  {property.propertyType === "land" ? (
                    <span className="meta-item">
                      <FaRulerCombined className="meta-icon" />
                      {property.totalArea}
                    </span>
                  ) : (
                    <>
                      <span className="meta-item">
                        <FaBed className="meta-icon" />
                        {property.bedroom} Bedrooms
                      </span>
                      <span className="meta-item">
                        <FaBath className="meta-icon" />
                        {property.bathroom} Bathrooms
                      </span>
                      <span className="meta-item">
                        <FaToilet className="meta-icon" />
                        {property.toilets} Toilets
                      </span>
                    </>
                  )}
                </div>
                <p className="price">
                  {formatPrice(property.price)}{" "}
                  <span className="per">per annum</span>
                </p>
              </div>

              <div className="marketer">
                <p>
                  Marketer: <strong>{property.marketer || "Agent Co."}</strong>
                </p>
                <div className="marketer-buttons">
                  <button className="btn email">
                    <FaEnvelope />
                  </button>
                  <button className="btn phone">
                    <FaPhone />
                  </button>
                  <button className="btn whatsapp">
                    <FaWhatsapp />
                  </button>
                  <button className="btn save">
                    <FaRegBookmark />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {lightboxOpen && (
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          slides={lightboxSlides}
          index={slideIndex}
          styles={{
            container: { backgroundColor: "rgba(0, 0, 0, 0.95)" },
            navigation: { color: "#FFD700" },
          }}
        />
      )}
    </section>
  );
};

export default FeaturedProperties;
