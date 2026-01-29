import { useState } from "react";
import "./Login.css";
import login_image from "./Login_image.png";
import Google_logo from "./Google_logo.png";
import Facebook_logo from "./Facebook_logo.png";
import Apple_logo from "./Apple_logo.png";
import {useNavigate} from 'react-router-dom';

function Login() {
  const [isRegister, setIsRegister] = useState(false);
   const navigate=useNavigate();
  return (
    <div className={`auth-container ${isRegister ? "active" : ""}`}>
      
      {/* IMAGE PANEL */}
      <div className="auth-image">
        <img src={login_image} alt="Illustration" /> 
      </div>

      {/* FORM PANEL */}
      <div className="auth-form"> 
        <h1>{isRegister ? "Create an Account" : "Sign in to Continue"}</h1>

        <button className="social-btn"> 
          <img src={Google_logo} />
          {isRegister ? "Sign up with Google" : "Sign in with Google"}
        </button>

        <button className="social-btn"> 
          <img src={Facebook_logo} />
          {isRegister ? "Sign up with Facebook" : "Sign in with Facebook"}
        </button>

        <button className="social-btn">
          <img src={Apple_logo} />
          {isRegister ? "Sign up with Apple" : "Sign in with Apple"}
        </button>

        <div className="or-divider"> 
          <span></span>
          <p>or</p>
          <span></span>
        </div>

        {isRegister && (
          <input type="text" placeholder="Full name" />
        )}

        <input type="email" placeholder="Email address" />
        <input type="password" placeholder="Password" />

        <button className="submit-btn" onClick={() => navigate("/")}>
          {isRegister ? "Register" : "Sign in"}
        </button>

        <p className="switch-text" onClick={() => setIsRegister(!isRegister)}>
          {isRegister
            ? "Already have an account? Sign in"
            : "Haven’t registered yet?"}
        </p>
      </div>
    </div>
  );
}

export default Login;
