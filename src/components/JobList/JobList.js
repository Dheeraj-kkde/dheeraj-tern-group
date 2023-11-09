// JobList.js
import React from "react";
import { Link } from "react-router-dom";
import "./JobList.css";

function JobList({ jobs, onJobSelect, updateShowSearch }) {

  return (
    <div className="joblist-container">
      {jobs.map((job) => (
        <div key={job.id} className="job-card" onClick={() => onJobSelect(job)}>
          <h3 className="title">{job.title}</h3>
          <p className="type">{job.type}</p>
          <p className="location">{job.location}</p>
          <p className="company">{job.companyName}</p>
          <div className="skills">
            {job.skills.map((skill) => (
              <span
                key={skill}
                className="bg-gray-200 rounded-full px-2 py-1 mr-2 mt-2"
              >
                {skill}
              </span>
            ))}
          </div>
          <div className="view-details" onClick={() => updateShowSearch(false)}>
          <Link
            to={`/job/${job.id}`}
            className="block text-center bg-blue-500 text-white rounded-lg py-2 mt-4"
          >
            View Details
          </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default JobList;
