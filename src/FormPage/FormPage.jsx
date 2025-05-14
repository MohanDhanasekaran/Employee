import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import "./FormPage.css";

function FormPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [mobile, setMobile] = useState("");
  const [image, setImage] = useState(null);
  const [workType, setWorkType] = useState("");
  const workOptions = [
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
    "UI/UX Designer",
    "DevOps Engineer", // New option added
    "Project Manager", // New option added
  ];

  const handleSaveClick = () => {
    const usernamePattern = /^[A-Z]+(?: [A-Z]+)*$/; // Ensures uppercase letters and optional spaces
    if (!usernamePattern.test(username)) {
      alert("Please enter name in format: FIRSTNAME INITIAL(S) (e.g., MOHAN D)");
      return;
    }

    if (mobile.length < 10) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }

    if (!image) {
      alert("Please upload an image between 500KB and 1MB.");
      return;
    }

    if (!workType) {
      alert("Please select a type of work.");
      return;
    }

    const mail = document.querySelector('input[type="email"]').value;

    // Navigate with state
    navigate("/new", {
      state: {
        username,
        mobile,
        mail,
        image: URL.createObjectURL(image), // Convert image to blob URL for display
        workType,
      },
    });
  };

  const handleUsernameChange = (e) => {
    let input = e.target.value.toUpperCase();

    // Remove any character that's not a letter or space
    input = input.replace(/[^A-Z\s]/g, "");

    setUsername(input); // Update the state with the formatted name
  };

  const handleMobileChange = (e) => {
    const input = e.target.value;
    const digitsOnly = input.replace(/\D/g, "");
    setMobile(digitsOnly);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileSizeKB = file.size / 1024; // Convert bytes to KB
      if (fileSizeKB < 500 || fileSizeKB > 1024) {
        alert("Image size must be between 500KB and 1MB.");
        e.target.value = ""; // Clear file input
        setImage(null);
      } else {
        setImage(file);
      }
    }
  };

  return (
    <div className="App">
      <div className="form-container">
        <h2>User Details Form</h2>
        <div className="form-group">
          <label>Username :</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={username}
            onChange={handleUsernameChange}
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label>Mobile No :</label>
          <input
            type="text"
            placeholder="Enter your mobile number"
            value={mobile}
            onChange={handleMobileChange}
            maxLength={10}
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label>Mail ID :</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label>Upload Image (500KB - 1MB) :</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label>Type of Work :</label>
          <div className="custom-select-wrapper">
            <select
              value={workType}
              onChange={(e) => setWorkType(e.target.value)}
              className="input-field custom-select"
            >
              <option value="">Select Work Type</option>
              {workOptions.map((work, index) => (
                <option key={index} value={work}>
                  {work}
                </option>
              ))}
            </select>
            <FaChevronDown className="dropdown-icon" />
          </div>
        </div>

        <button className="btn" onClick={handleSaveClick}>
          Save
        </button>
      </div>
    </div>
  );
}

export default FormPage;
