import React from "react";
import './JobSuccess.css'

function JobSuccess({ formData }) {
  if (!formData) {
    return <p className="text-center text-gray-500">No data found</p>;
  }
  // Create a blob URL from the resume file
  const resumeUrl = URL.createObjectURL(formData.resume);

  return (
    <div className="my-8 job-success">
      <div className="success">
      <h2 className="text-3xl font-bold text-center">Application Submitted</h2>
      <p className="text-center text-gray-500">
        Here is a preview of your application:
      </p>
      <div className="border-2 border-gray-300 rounded-lg p-4 mt-4 preview-box">
        <p className="text-gray-700">
          <strong>Name:</strong> {formData.name}
        </p>
        <p className="text-gray-700">
          <strong>Email:</strong> {formData.email}
        </p>
        <p className="text-gray-700">
          <strong>Cover Letter:</strong> {formData.coverLetter}
        </p>
        <p className="text-gray-700">
          <strong>Resume:</strong>
        </p>
        <img src={resumeUrl} alt="Resume preview" className="w-full h-auto" />
      </div>
      </div>
    </div>
  );
}

export default JobSuccess;
