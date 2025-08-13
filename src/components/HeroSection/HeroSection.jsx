import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaMagnifyingGlass } from "react-icons/fa6";
import "./HeroSection.css";

function HeroSection() {
  const [activeTab, setActiveTab] = useState("buy");
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const advertValue = () => {
    if (activeTab === "buy") return "for-sale";
    if (activeTab === "rent") return "for-rent";
    return "short-let";
  };

  const handleSearch = () => {
    if (!searchQuery.trim()) return;
    navigate(
      `/search?advert=${advertValue()}&query=${encodeURIComponent(searchQuery)}`
    );
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  // Optional: detect if current location matches current advert & query
  const isActiveSearch = () =>
    location.pathname === "/search" &&
    location.search.includes(`advert=${advertValue()}`);

  return (
    <section className="hero-section">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>Discover Your Dream Property</h1>
          <p>
            Explore homes, lands, and rentals from trusted agents across
            Nigeria.
          </p>

          <div className="search-box">
            {/* Tabs */}
            <div className="search-tabs">
              <button
                className={activeTab === "buy" ? "active" : ""}
                onClick={() => setActiveTab("buy")}
              >
                Buy
              </button>
              <button
                className={activeTab === "rent" ? "active" : ""}
                onClick={() => setActiveTab("rent")}
              >
                Rent
              </button>
              <button
                className={activeTab === "short-let" ? "active" : ""}
                onClick={() => setActiveTab("short-let")}
              >
                Short Let
              </button>
            </div>

            {/* Search Input */}
            <div className={`search-input ${isActiveSearch() ? "active" : ""}`}>
              <input
                type="text"
                placeholder={`Enter city or state to ${
                  activeTab === "buy"
                    ? "buy"
                    : activeTab === "rent"
                    ? "rent"
                    : "short let"
                } a property`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleKeyPress}
              />
              <button onClick={handleSearch}>
                <FaMagnifyingGlass />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
