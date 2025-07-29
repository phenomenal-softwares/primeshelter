import "./RequestForm.css";

const RequestForm = () => {
  return (
    <form className="request-form">
      <h2>Tell Us What You Need</h2>

      {/* Add inputs later: property type, location, budget, urgency, etc. */}
      <div className="form-group">
        <label htmlFor="propertyType">Property Type</label>
        <select id="propertyType" name="propertyType">
          <option value="">Select Type</option>
          <option value="house">House</option>
          <option value="land">Land</option>
          <option value="apartment">Apartment</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="location">Preferred Location</label>
        <input type="text" id="location" name="location" placeholder="e.g. Lekki, Lagos" />
      </div>

      <div className="form-group">
        <label htmlFor="budget">Maximum Budget</label>
        <input type="number" id="budget" name="budget" placeholder="₦" />
      </div>

      <div className="form-group">
        <label htmlFor="details">Additional Details</label>
        <textarea id="details" name="details" rows="4" placeholder="Any other requirements?" />
      </div>

      <button type="submit" className="submit-btn">Submit Request</button>
    </form>
  );
};

export default RequestForm;
