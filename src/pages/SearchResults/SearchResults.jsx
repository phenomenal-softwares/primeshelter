import "./SearchResults.css";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { properties, formatPrice } from "../../data/properties";
import SearchBar from "../../components/SearchBar/SearchBar";
import {
  FaBath,
  FaBed,
  FaToilet,
  FaRulerCombined,
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
  FaRegBookmark,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaClipboardList,
  FaEnvelopeOpenText,
  FaTruckMoving,
} from "react-icons/fa";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const SearchResults = () => {
  const query = useQuery();
  const advert = query.get("advert")?.toLowerCase();
  const searchQuery = query.get("query")?.toLowerCase();
  const propertyType = query.get("type")?.toLowerCase();
  const maxPrice = parseInt(query.get("price"));

  const [filtered, setFiltered] = useState([]);
  const [sortBy, setSortBy] = useState("recent");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxSlides, setLightboxSlides] = useState([]);
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    let results = [...properties];

    if (advert) {
      results = results.filter((p) => p.advert.toLowerCase() === advert);
    }

    if (searchQuery) {
      results = results.filter(
        (p) =>
          p.city.toLowerCase().includes(searchQuery) ||
          p.state.toLowerCase().includes(searchQuery) ||
          p.title.toLowerCase().includes(searchQuery) ||
          p.reference?.toLowerCase().includes(searchQuery)
      );
    }

    if (propertyType && propertyType !== "all") {
      results = results.filter(
        (p) => p.propertyType.toLowerCase() === propertyType
      );
    }

    if (maxPrice) {
      results = results.filter((p) => p.price <= maxPrice);
    }

    if (sortBy === "high") {
      results.sort((a, b) => b.price - a.price);
    } else if (sortBy === "low") {
      results.sort((a, b) => a.price - b.price);
    } else {
      results.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
    }

    setFiltered(results);
  }, [advert, searchQuery, propertyType, maxPrice, sortBy]);

  return (
    <section className="results-page">
      {/* Search Bar */}
      <div className="results-searchbar-wrapper">
        <SearchBar />
      </div>

      {/* Layout */}
      <div className="results-layout">
        {/* LEFT - Properties */}
        <div className="results-main">
          <div className="results-header">
            <h2>
              Results for{" "}
              {advert
                ? `properties ${advert.replace("-", " ")}`
                : "all properties"}{" "}
              in {searchQuery || "Nigeria"}
            </h2>

            <div className="results-toolbar">
              <p>{filtered.length} result(s) found</p>
              <select
                className="sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="recent">Most Recent</option>
                <option value="high">Highest Price</option>
                <option value="low">Lowest Price</option>
              </select>
            </div>
          </div>

          {/* Property Cards */}
          <div className="results-grid">
            {filtered.map((property, index) => (
              <div className="property-card" key={index}>
                {/* Lightbox-Ready Image */}
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
                  <div className="property-badge">
                    {property.advert.replace("-", " ")}
                  </div>
                </div>

                <div className="property-details">
                  <div className="property-price-date">
                    <span className="price">{formatPrice(property.price)}</span>
                    <span className="date">
                      <FaCalendarAlt /> {property.dateAdded}
                    </span>
                  </div>

                  <h3>{property.title}</h3>

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

                  <p className="location">
                    <FaMapMarkerAlt /> {property.city}, {property.state}
                  </p>

                  <p className="desc">
                    {property.description.slice(0, 100)}...
                  </p>

                  <div className="highlights">
                    <span className="badge gold">{property.advert}</span>
                    <span className="badge blue">
                      {property.marketStatus || "Available"}
                    </span>
                  </div>

                  <div className="marketer">
                    <p>
                      Marketer:{" "}
                      <strong>{property.marketer || "Agent Co."}</strong>
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

            {filtered.length === 0 && (
              <p className="no-results">No matching properties found.</p>
            )}
          </div>
        </div>

        {/* RIGHT - CTA Sidebar */}
        <div className="results-sidebar">
          <div className="sticky-cta">
            <div className="cta-card">
              <div className="cta-icon">
                <FaClipboardList />
              </div>
              <h4>Post a Property Request</h4>
              <p>
                Can’t find what you’re looking for? Let agents know what you
                need.
              </p>
              <button className="cta-btn">Post Request</button>
            </div>

            <div className="cta-card">
              <div className="cta-icon">
                <FaEnvelopeOpenText />
              </div>
              <h4>Email Alerts</h4>
              <p>Get notified when new listings match your search.</p>
              <button className="cta-btn">Subscribe</button>
            </div>

            <div className="cta-card">
              <div className="cta-icon">
                <FaTruckMoving />
              </div>
              <h4>Moving Soon?</h4>
              <p>Book affordable moving services and start planning early.</p>
              <button className="cta-btn">Plan Move</button>
            </div>
          </div>
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
      </div>
    </section>
  );
};

export default SearchResults;
