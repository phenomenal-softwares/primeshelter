import "./Auth.css";

const AuthLayout = ({ children }) => {
  return (
    <section className="auth-page">
      <div className="auth-container">
        <div className="auth-left">
          <img src="/images/property-illustration.jpg" alt="Welcome" className="auth-illustration" />
          <h1>Join Our Property Community</h1>
          <p>Find, sell, or rent properties easily.</p>
        </div>
        <div className="auth-right">{children}</div>
      </div>
    </section>
  );
};

export default AuthLayout;
