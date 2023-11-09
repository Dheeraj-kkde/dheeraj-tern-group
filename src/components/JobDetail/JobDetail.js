import React from "react";
import { Link } from "react-router-dom";
import './JobDetail.css';

function JobDetail({ job, showSearch }) {
  if (!job) {
    return <p className="text-center text-gray-500">No job selected</p>;
  }

  return (
    <div className="job-details">
    <div className="job-detail-card">
      <h2 className="title">{job.title}</h2>
      <p className="type">{job.type}</p>
      <p className="location">{job.location}</p>
      <p className="company">{job.companyName}</p>
      <a
        href={job.link}
        target="_blank"
        rel="noreferrer"
        className="job-posting"
      >
        View Job Posting
      </a>
      <a
        href={job.companyUrl}
        target="_blank"
        rel="noreferrer"
        className="company-url"
      >
        Visit Company Website
      </a>
      <div className="skills">
        {job.skills.map((skill) => (
          <span
            key={skill}
            className="single-skill"
          >
            {"  "}{skill}
          </span>
        ))}
      </div>
      <Link
        to="/apply"
      >
        <button className="apply-btn" onClick={()=>!showSearch}>Apply Now</button>
      </Link>
      </div>
    </div>
  );
}

export default JobDetail;
