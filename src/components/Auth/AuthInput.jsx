const AuthInput = ({ icon, type, placeholder }) => {
  return (
    <div className="auth-input-group">
      <span className="auth-icon">{icon}</span>
      <input type={type} placeholder={placeholder} required />
    </div>
  );
};

export default AuthInput;
