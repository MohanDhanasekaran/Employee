import React from "react";
import { useLocation } from "react-router-dom";
import "./NewComponent.css";
import logo from "../Assets/logo1.png";
import logo1 from "../Assets/Hardik.jpg";
import logo2 from "../Assets/side-logo-1.png";
import logo3 from "../Assets/InSightsSuccess.png";
import logo4 from "../Assets/Enterprise World.png";
import logo5 from "../Assets/The New Indian Express.png";
import logo6 from "../Assets/Akkineni foundation of America.jpeg";
import logo7 from "../Assets/IRCLASS.jpeg";
import logo8 from "../Assets/NASSCOM.png";
import logo9 from "../Assets/BQC.png";
import logo10 from "../Assets/Indian Business Congress.png";
import logo11 from "../Assets/Entrepreneurs Council of India.png";

import {
  FaFacebook,
  FaLinkedin,
 FaTwitterX,
  FaGlobe,
  FaPhone,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
// import { FiMail } from "react-icons/fi";
import { useRef } from "react";
import html2canvas from "html2canvas";

const NewComponent = () => {
  const location = useLocation();
  const { username, mobile, mail, image, workType } = location.state || {};
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
      <div className="left-panel">
        <div className="logo">
          <img src={logo} alt="" />
        </div>

        <div className="img-s">
          {image && (
            <div className="image-heads">
              <img src={image} alt="Uploaded" className="profile-pic" />
            </div>
          )}
        </div>

        <div className="icon-s">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook size={35} color="black" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={35} color="#0A66C2" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsTwitterX  size={35} color="#000000" />
          </a>
          <a
            href="https://www.example.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGlobe size={35} color="black" />
          </a>
        </div>
      </div>

      <div className="middle-panel">
        <div className="username-s">
          <h1>{username || "USERNAME"}</h1>
          <h3>{workType || "HR & ADMIN"}</h3>
        </div>

        <div className="contact-info">
          <p>
            <FaPhone className="icon-1 inverted-icon" /> +91 {mobile}
          </p>
          <p>
            <FaEnvelope className="icon-1" /> {mail}
          </p>
          <p>
            <FaGlobe className="icon-1" /> www.necurity.com
          </p>
          <p>
            <FaMapMarkerAlt className="icon-2" /> 6/13, North Avenue,Kesavaperumalpuram, Raja Annamalai Puram, Chennai-28.
          </p>
        </div>
      </div>

      <div className="right-panel">
        <div className="awards-header">
          <h2>Awards and Achievements</h2>
        </div>
        <div className="awards-middle-header">
          <div className="split-awards-middle para-4">
            <div className="left-s">
              <div className="awards-middle">
                <img src={logo2} alt="" />
              </div>
              <div className="awards-content ">
                <p className="fs-1">
                  Listed as " Top 10 Trusted Cyber Security Companies in India"
                  by Insight Success Magazine 2019
                </p>
              </div>
              <div className="company-logo">
                <img src={logo3} alt="" />
              </div>
            </div>

            <div className="left-s1">
              <div className="awards-middle1">
                <img src={logo2} alt="" />
              </div>
              <div className="awards-content1">
                <p className="para-1">Covered by the Enterprise World</p>
              </div>
              <div className="company-logo1">
                <img src={logo4} alt="" />
              </div>
            </div>


            <div className="left-s2">
              <div className="awards-middle2">
                <img src={logo2} alt="" />
              </div>
              <div className="awards-content2">
                <p className="fs-3">
                  Covered by the New Indian Express Newspaper for Extensive work
                  on Cyber Security
                </p>
              </div>
              <div className="company-logo3">
                <img src={logo5} alt="" />
              </div>
            </div>
          </div>

          <div className="split-awards-middle para-3">
            <div className="left-s">
              <div className="awards-middle">
                <img src={logo2} alt="" />
              </div>
              <div className="awards-content">
                <p className="para-1 fs-2">Best Cyber Security Expert by</p>
              </div>
              <div className="company-logo9">
                <img src={logo10} alt="" />
              </div>
            </div>

            <div className="left-s1">
              <div className="awards-middle1">
                <img src={logo2} alt="" />
              </div>
              <div className="awards-content1">
                <p className="para-1">Entrepreneurs of the year 2016</p>
              </div>
              <div className="company-logo4">
                <img src={logo11} alt="" />
              </div>
            </div>

            <div className="left-s2 t-1">
              <div className="awards-middle2">
                <img src={logo2} alt="" />
              </div>
              <div className="awards-content2">
                <p className="para-2 fs-2">
                  Vinutna Ratna Award by Akkineni Foundation of USA
                </p>
              </div>
              <div className="company-logo5">
                <img src={logo6} alt="" />
              </div>
            </div>
          </div>

          <div className="split-awards-middle">
            <div className="left-s">
              <div className="awards-middle">
                <img src={logo2} alt="" />
              </div>
              <div className="awards-content">
                <p className="para-1 fs-2">We are certified by IRCLASS</p>
              </div>
              <div className="company-logo6">
                <img src={logo7} alt="" />
              </div>
            </div>

            <div className="left-s1 t-3">
              <div className="awards-middle1">
                <img src={logo2} alt="" />
              </div>
              <div className="awards-content1">
                <p className="para-1 t-2">NASSCOM</p>
              </div>
              <div className="company-logo7">
                <img src={logo8} alt="" />
              </div>
            </div>

            <div className="left-s2 t-1">
              <div className="awards-middle2">
                <img src={logo2} alt="" />
              </div>
              <div className="awards-content2">
                <p className="para-1 fs-2">
                  We are ISO 27001 certified Organisation
                </p>
              </div>
              <div className="company-logo8">
                <img src={logo9} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Download Button - excluded from screenshot */}
      {/* <button onClick={handleDownloadWithHtml2Canvas} className="download-btn">
        Download
      </button> */}
    </div>
  );
};

export default NewComponent;
