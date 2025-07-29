import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import AuthInput from "./AuthInput";

const AuthForm = ({ type }) => {
  return (
    <form className="auth-form">
      <h2>{type === "register" ? "Create Account" : "Welcome Back!"}</h2>

      {type === "register" && (
        <AuthInput icon={<FaUser />} type="text" placeholder="Full Name" />
      )}

      <AuthInput icon={<FaEnvelope />} type="email" placeholder="Email Address" />
      <AuthInput icon={<FaLock />} type="password" placeholder="Password" />

      {type === "register" && (
        <p className="auth-note">
          By registering, you agree to our <a href="/register">Terms</a> and{" "}
          <a href="/register">Privacy Policy</a>.
        </p>
      )}

      <button className="auth-btn">
        {type === "register" ? "Register" : "Sign In"}
      </button>

      <p className="auth-switch">
        {type === "register" ? (
          <>
            Already have an account? <a href="/signin">Sign In</a>
          </>
        ) : (
          <>
            Don’t have an account? <a href="/register">Register</a>
          </>
        )}
      </p>
    </form>
  );
};

export default AuthForm;
