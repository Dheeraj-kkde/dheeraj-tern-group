// JobForm.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './JobForm.css';

function JobForm({ onFormSubmit }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [coverLetter, setCoverLetter] = useState("");
  const [resume, setResume] = useState(null);

  const navigate = useNavigate();

  // Handle the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate the input fields
    if (!name || !email || !coverLetter || !resume) {
      alert("Please fill in all the fields");
      return;
    }
    // Pass the form data to the parent component
    onFormSubmit({ name, email, coverLetter, resume });
    // Redirect to the success page
    navigate("/success");
  };

  return (
    <div className="application-form">
      <div className="app-form">
      <h2 className="text-3xl font-bold">Apply for this job</h2>
      <form onSubmit={handleSubmit} className="mt-4 form-container">
        <div className="mb-4 name-container">
          <label htmlFor="name" className="block text-gray-700">
            Name:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border-2 border-gray-300 rounded-lg p-2 w-full"
          />
        </div>
        <div className="mb-4 email-container">
          <label htmlFor="email" className="block text-gray-700">
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-2 border-gray-300 rounded-lg p-2 w-full"
          />
        </div>
        <div className="mb-4 cover-letter">
          <label htmlFor="coverLetter" className="block text-gray-700">
            Cover Letter:
          </label>
          <textarea
            id="coverLetter"
            value={coverLetter}
            onChange={(e) => setCoverLetter(e.target.value)}
            className="border-2 border-gray-300 rounded-lg p-2 w-full h-40"
          />
        </div>
        <div className="mb-4 resume">
          <label htmlFor="resume" className="block text-gray-700">
            Resume:
          </label>
          <input
            type="file"
            id="resume"
            accept=".pdf,.doc,.docx"
            onChange={(e) => setResume(e.target.files[0])}
            className="border-2 border-gray-300 rounded-lg p-2 w-full"
          />
        </div>
        <button
          type="submit"
          className="block text-center bg-green-500 text-white rounded-lg py-2 w-full submit-btn"
        >
          Submit Application
        </button>
      </form>
      </div>
    </div>
  );
}

export default JobForm;
