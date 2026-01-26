import "./Home.css"
import logo from "./logo.png"
import demo from "./demo.png" 
import {useNavigate} from "react-router-dom"
function Home() {
  const navigate = useNavigate();
  const scrollToLearn = () => {
     const section= document.getElementById("learn-more");
     if (section) {
       section.scrollIntoView({ behavior: "smooth" });
     }
  }
  return (
    <>
    <div className="top-section">
      <div className="glow-soft"></div>
       <div className="glow-strong"></div>
    <nav className="navbar">
      {/* Left Logo */}
      <div className="logo">
        <div className="logo-icon">
         <img src={logo} alt="Learnify Logo" className="logo-image"/>
        </div>
        <span>Learnify</span>
      </div>
   
      {/* Right Login */}
      <button className="login-button" onClick={() => navigate("/login")}>Login</button>
    </nav>

    <main className="main-content">
      <div className="text-section">
        <h1>Study Smarter with</h1>
        <h1>AI-Powered Learning</h1>
       <p className="hero-text">
  Upload your study materials, get{" "}
  <span className="highlight">summaries and quizzes</span>, and receive
  personalized video recommendations to help you master subjects.
</p>

      
        <button className="get-started-button">Get Started</button>
        <button className="learn-more-button" onClick={scrollToLearn}>Learn More</button>

      </div>
    </main>
    </div>

    <div id="learn-more" className="learn-more-section">
      <img src={demo} alt="Demo" className="demo-image"/>
    </div>
  </>
  );
}

export default Home;
