import React, { useState } from "react";
import "./RequestPage.css";

const PropertyRequestPage = () => {
  const [formData, setFormData] = useState({
    propertyUse: "unspecified",
    propertyType: "",
    advertType: "",
    state: "",
    cities: "",
    bedrooms: "",
    bathrooms: "",
    toilets: "",
    budget: "",
    description: "",
    name: "",
    phone: "",
    email: "",
    isDirectNeed: false,
    isAgent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      "Property Request submitted successfully! This is only a demo site. No data is actually sent. If you need a real estate website, please contact us and let's work together."
    );
    window.location.href = "/";
  };

  // Options for dropdowns
  const propertyUseOptions = [
    "unspecified use",
    "residential use",
    "commercial use",
    "either commercial or residential use",
    "educational use",
    "religious use",
  ];

  const propertyTypeOptions = [
    "duplex",
    "flat apartment",
    "land",
    "bungalow",
    "terraced house",
    "semi-detached house",
    "commercial building",
    "office space",
    "warehouse",
  ];

  const advertTypeOptions = ["for sale", "for rent", "short let"];

  const nigerianStates = [
    "Abia",
    "Adamawa",
    "Akwa Ibom",
    "Anambra",
    "Bauchi",
    "Bayelsa",
    "Benue",
    "Borno",
    "Cross River",
    "Delta",
    "Ebonyi",
    "Edo",
    "Ekiti",
    "Enugu",
    "FCT",
    "Gombe",
    "Imo",
    "Jigawa",
    "Kaduna",
    "Kano",
    "Katsina",
    "Kebbi",
    "Kogi",
    "Kwara",
    "Lagos",
    "Nasarawa",
    "Niger",
    "Ogun",
    "Ondo",
    "Osun",
    "Oyo",
    "Plateau",
    "Rivers",
    "Sokoto",
    "Taraba",
    "Yobe",
    "Zamfara",
  ];

  const budgetOptions = [
    "Below ₦5,000,000",
    "₦5,000,000 - ₦10,000,000",
    "₦10,000,000 - ₦20,000,000",
    "₦20,000,000 - ₦50,000,000",
    "₦50,000,000 - ₦100,000,000",
    "Above ₦100,000,000",
  ];

  return (
    <div className="request-page">
      <div className="request-header">
        <h1 className="request-title">POST A PROPERTY REQUEST</h1>
      </div>

      <div className="info-box">
        <p>
          Fill this form to get top estate agents to help you with your property
          request. The more detailed your request, the better we can channel
          your request to the appropriate estate agents who can attend to you.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="request-form">
        <div className="form-section">
          <h2 className="section-title">Property Details</h2>

          <div className="form-group">
            <label className="form-label">I need a property for</label>
            <select
              name="propertyUse"
              value={formData.propertyUse}
              onChange={handleChange}
              className="form-select"
              required
            >
              {propertyUseOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Property type</label>
            <select
              name="propertyType"
              value={formData.propertyType}
              onChange={handleChange}
              className="form-select"
              required
            >
              <option value="">Select property type</option>
              {propertyTypeOptions.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Property advert</label>
            <select
              name="advertType"
              value={formData.advertType}
              onChange={handleChange}
              className="form-select"
              required
            >
              <option value="">Select advert type</option>
              {advertTypeOptions.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label">State</label>
              <select
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="form-select"
                required
              >
                <option value="">Select state</option>
                {nigerianStates.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">
                City (you can list multiple cities in the same state)
              </label>
              <input
                type="text"
                name="cities"
                value={formData.cities}
                onChange={handleChange}
                className="form-input"
                placeholder="e.g. Ikeja, Badagary"
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Bedrooms (optional)</label>
              <input
                type="number"
                name="bedrooms"
                value={formData.bedrooms}
                onChange={handleChange}
                className="form-input"
                min="0"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Bathrooms (optional)</label>
              <input
                type="number"
                name="bathrooms"
                value={formData.bathrooms}
                onChange={handleChange}
                className="form-input"
                min="0"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Toilets (optional)</label>
              <input
                type="number"
                name="toilets"
                value={formData.toilets}
                onChange={handleChange}
                className="form-input"
                min="0"
              />
            </div>
          </div>

          <div className="land-property-group">
            <h3>*FOR LAND</h3>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Land Size</label>
                <input
                  type="number"
                  name="landSize"
                  value={formData.landSize}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Enter numerical value"
                  min="0"
                  step="0.01"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Unit</label>
                <select
                  name="landUnit"
                  value={formData.landUnit}
                  onChange={handleChange}
                  className="form-select"
                >
                  <option value="">Select unit</option>
                  <option value="plot">Plot</option>
                  <option value="acre">Acre</option>
                  <option value="hectare">Hectare</option>
                  <option value="square meter">Square Meter</option>
                  <option value="square feet">Square Feet</option>
                </select>
              </div>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Your budget</label>
            <select
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="form-select"
              required
            >
              <option value="">Select budget range</option>
              {budgetOptions.map((budget) => (
                <option key={budget} value={budget}>
                  {budget}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Description (optional)</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="form-input form-textarea"
              placeholder="Provide additional details about your property needs"
            />
          </div>
        </div>

        <div className="form-section">
          <h2 className="section-title">Contact Information</h2>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Your name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label">Your phone number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label">Your email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>
          </div>

          <div className="checkbox-group">
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="isDirectNeed"
                checked={formData.isDirectNeed}
                onChange={handleChange}
                className="checkbox-input"
              />
              I am the one who directly needs this property
            </label>
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="isAgent"
                checked={formData.isAgent}
                onChange={handleChange}
                className="checkbox-input"
              />
              I am a real estate agent/professional
            </label>
          </div>
        </div>

        <button type="submit" className="submit-button">
          SEND REQUEST
        </button>
      </form>
    </div>
  );
};

export default PropertyRequestPage;
