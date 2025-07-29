import './SearchBar.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const propertyTypes = ['All', 'Mansion', 'Hotel', 'Duplex', 'Land', 'Flat', 'Bungalow'];
const priceOptions = [
  500000, 1000000, 2000000, 5000000,
  10000000, 20000000, 30000000, 50000000
];

const SearchBar = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [advert, setAdvert] = useState('for-sale');
  const [type, setType] = useState('All');
  const [price, setPrice] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();

    const params = new URLSearchParams();
    if (query) params.append('query', query);
    if (advert) params.append('advert', advert);
    if (type !== 'All') params.append('type', type);
    if (price) params.append('price', price);

    navigate(`/search?${params.toString()}`);
  };

  return (
    <div className="search-bar-section">
      <form className="search-bar" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter city, state or property ref"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <select value={advert} onChange={(e) => setAdvert(e.target.value)}>
          <option value="for-sale">For Sale</option>
          <option value="for-rent">For Rent</option>
          <option value="short-let">Short Let</option>
        </select>

        <select value={type} onChange={(e) => setType(e.target.value)}>
          {propertyTypes.map((p, i) => (
            <option value={p.toLowerCase()} key={i}>{p}</option>
          ))}
        </select>

        <select value={price} onChange={(e) => setPrice(e.target.value)}>
          <option value="">Max Price</option>
          {priceOptions.map((amt, i) => (
            <option value={amt} key={i}>₦{amt.toLocaleString()}</option>
          ))}
        </select>

        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
