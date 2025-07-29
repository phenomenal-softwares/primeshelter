import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo"><a href='/'>PrimeShelter</a></div>
      <ul className="navbar-links">
        <li><a href="/search?advert=for-sale">Listed Properties</a></li>
        <li><a href="/estate-agents">Estate Agents</a></li>
        <li><a href="/property-request">Property Request</a></li>
        <li><a href="/register">Register</a></li>
        <li><a href="/signin">Sign In</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
