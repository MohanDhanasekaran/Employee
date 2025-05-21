import React from "react";
import { useLocation } from "react-router-dom";
import "./NewComponent.css";
import logo from "../Assets/logo1.png";
// import logo1 from "../Assets/Hardik.jpg";
// import logo2 from "../Assets/side-logo-1.png";
import logo3 from "../Assets/InSightsSuccess.png";
import logo4 from "../Assets/Enterprise-World.png";
import logo5 from "../Assets/The New Indian Express.png";
import logo6 from "../Assets/Akkineni foundation of America.jpeg";
// import logo7 from "../Assets/IRCLASS.jpeg";
// import logo8 from "../Assets/NASSCOM.png";
// import logo9 from "../Assets/BQC.png";
import logo10 from "../Assets/Indian Business Congress.png";
import logo11 from "../Assets/Entrepreneurs Council of India.png";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaGlobe,
  FaPhone,
  FaMapMarkerAlt,
  FaGoogle,
  FaEnvelope ,
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { useRef } from "react";
import html2canvas from "html2canvas";

const NewComponent = () => {
  const location = useLocation();
  const { username, image } = location.state || {};
  const captureRef = useRef(null); // Reference for capturing content

  const handleDownloadWithHtml2Canvas = () => {
    if (!captureRef.current) return;

    const downloadButton = document.querySelector(".download-btn");

    // Hide the button before capturing
    if (downloadButton) downloadButton.style.display = "none";

    // Wait for fonts to load
    document.fonts.ready.then(() => {
      captureRef.current.classList.add("screenshot-mode");

      html2canvas(captureRef.current, {
        scale: 2,
        useCORS: true,
        backgroundColor: "#fff",
      }).then((canvas) => {
        const link = document.createElement("a");
        link.download = `${username || "signature"}.jpg`;
        link.href = canvas.toDataURL("image/jpeg", 0.95);
        link.click();

        // Restore button after capture
        if (downloadButton) downloadButton.style.display = "block";

        captureRef.current.classList.remove("screenshot-mode");
      });
    });
  };

  return (
    <div className="Apps" ref={captureRef}>
      <div className="top-container">
        <div className="left-side">
          {image && (
            <div className="image-head">
              <img src={image} alt="Uploaded" className="profile-pic" />
            </div>
          )}
        </div>
        <div className="right-side">
          <div className="head-details">
            <div className="header-names">
              <h1 className="username-s">Ishwar Prasad Bhat</h1>
              <h4 className="sub-head">CEO & Founder</h4>
              <p className="para-s">
                Necurity Solutions Network Security Private Limited
              </p>
            </div>
            <div className="image-s">
              <img src={logo} alt="NO Logo" />
            </div>
          </div>
          <div className="contact-details">
            <div className="contact-inform">
              <p className="ic-2">
                <FaPhone
                  style={{ transform: "scaleX(-1)" }}
                  className="icon-1 ic-1"
                />{" "}
                +91 8122331401
              </p>
              <p>
                <FaEnvelope  className="icon-1" /> ishwar@necurity.com{" "}
              </p>
              <p>
                <a href="www.google.com"><FaGlobe className="icon-1" /></a> www.necurity.com
              </p>
              <p>
                <FaMapMarkerAlt className="icon-1" /> Block 3, II Floor, Equinox Managed Workspaces, 6/13, North Ave, Kesavaperumalpuram, <br /> Raja Annamalai Puram, Chennai, Tamil Nadu 600028
              </p>
            </div>
            <div className="company-inform">
              <FaFacebookF className="icon-2" />
              <FaTwitter className="icon-2" />
              <FaLinkedinIn className="icon-2" />
              <FaGoogle className="icon-2" />
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-container">
        <div className="awards-title">
          <h1>Awards and Achievements</h1>
        </div>
        <div className="awards-card">
          <div className="awards">
            <p>Top 10 most trusted cyber threat solution providers by</p>
            <img className="img-1" src={logo3} alt="NO image" />
          </div>
          <div className="awards">
            <p>Top 10 disruptive companies to watch in 2019 by</p>
            <img className="img-2" src={logo4} alt="NO image" />
          </div>
          <div className="awards">
            <p>Exclusive cyber Security article featured by</p>
            <img className="img-3" src={logo5} alt="NO image" />
          </div>
          <div className="awards">
            <p>
              Best cyber security expert <br /> by
            </p>
            <img className="img-4" src={logo10} alt="NO image" />
          </div>
          <div className="awards">
            <p>
              Entrepreneur of the year - 2016 <br /> by
            </p>
            <img className="img-5" src={logo11} alt="NO image" />
          </div>
          <div className="awards">
            <p>
              Vinutna Ratna <br /> Award  <br /> by
            </p>
            <img className="img-6" src={logo6} alt="NO image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewComponent;
