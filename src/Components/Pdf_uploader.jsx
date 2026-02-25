import "./Pdf_uploader.css";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import logo from "./logo.png";

function PDFUploader() {

  const navigate = useNavigate();
  const fileInput = useRef();

  const [uploaded, setUploaded] = useState(false);
  const [progress, setProgress] = useState(0);
  const [shrunk, setShrunk] = useState(false);
  const [fileName, setFileName] = useState("");

  // HANDLE FILE
  const handleFile = (file) => {
    if (!file) return;

    setFileName(file.name);
    setUploaded(true);
    startUpload();
  };

  // FAKE UPLOAD
  const startUpload = () => {
    let p = 0;

    const timer = setInterval(() => {
      p++;
      setProgress(p);

      if (p >= 100) {
        clearInterval(timer);

        setTimeout(() => {
          setShrunk(true);
        }, 600);
      }
    }, 35);
  };

  return (
    <>
      {/* NAVBAR SAME AS HOME */}
      <div className="top-section">
        <div className="glow-soft"></div>
        <div className="glow-strong"></div>

        <nav className="navbar">

          <div className="logo">
            <div className="logo-icon">
              <img src={logo} alt="Learnify Logo" className="logo-image"/>
            </div>
            <span>Learnify</span>
          </div>

          <button
            className="login-button"
            onClick={() => navigate("/login")}
          >
            Login
          </button>

        </nav>
      </div>

      {/* PAGE */}
      <div className="page-container">

        {/* UPLOAD CARD */}
        <div className={`upload-card ${shrunk ? "shrink" : ""}`}>

          <input
            type="file"
            hidden
            ref={fileInput}
            accept=".pdf,.ppt,.pptx"
            onChange={(e) => handleFile(e.target.files[0])}
          />

          {/* BEFORE UPLOAD */}
          {!uploaded && (
            <div
              className="upload-ui"
              onClick={() => fileInput.current.click()}
              onDrop={(e) => {
                e.preventDefault();
                handleFile(e.dataTransfer.files[0]);
              }}
              onDragOver={(e) => e.preventDefault()}
            >
              <div className="plus-btn">+</div>

              <h2>Upload your file</h2>
              <p>PDF, PPT, PPTX supported</p>
              <p className="hint">Click or Drag & Drop</p>
            </div>
          )}

          {/* FILE PREVIEW */}
          {uploaded && (
            <div className="file-preview">
              <span>📄</span>
              <p>{fileName}</p>
            </div>
          )}

          {/* ROAD ANIMATION */}
          {uploaded && !shrunk && (
            <div className="road-box">
              <div className="road-track">

                <div className="road-text">
                  Uploading {progress}%
                </div>

                <div
                  className="road-van"
                  style={{ left: `calc(${progress}% - 35px)` }}
                ></div>

              </div>
            </div>
          )}

        </div>

        {/* SUMMARY */}
        {progress === 100 && shrunk && (
          <div className="summary-box">

            <h3>Summary Ready ✅</h3>

            <textarea placeholder="AI summary will appear here..."></textarea>

            <button className="quiz-btn">
              Generate Quiz
            </button>

          </div>
        )}

      </div>
    </>
  );
}

export default PDFUploader;