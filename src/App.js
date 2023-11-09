import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import JobList from "./components/JobList/JobList";
import JobDetail from "./components/JobDetail/JobDetail";
import JobForm from "./components/JobForm/JobForm";
import JobSuccess from './components/JobSuccess/JobSuccess';
import naukri from "./jobs.json";
import Header from "./components/Header/Header";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { searchJobs } from "./actions/action";

function App() {

  const search = useSelector((state) => state.searchText);
  const dispatch = useDispatch();

  const [jobs, setJobs] = useState(naukri);
  // const [searchText, setSearchText] = useState("");
  const [selectedJob, setSelectedJob] = useState(null);
  const [formData, setFormData] = useState(null);
  const [showSearch, setShowSearch] = useState(true);

  const [jobPerPage, setJobPerPage] = useState(8);
  const [currentPage, setCurrentPage] = useState(1);

  const totalNumberOfPages = Math.ceil(jobs.length / jobPerPage);
  const pages = [...Array(totalNumberOfPages + 1).keys()].slice(1);

  const indexOfLastJob = currentPage * jobPerPage;
  const indexOdFirstJob = indexOfLastJob - jobPerPage;
  const visiblejobs = jobs.slice(indexOdFirstJob, indexOfLastJob);

  const handlePrevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage !== totalNumberOfPages) setCurrentPage(currentPage + 1);
  };

  // Handle the input change for the language filter
  const handleInputChange = (e) => {
    e.preventDefault();
    dispatch(searchJobs(e.target.value));
  };

  // Handle the search button click
  const handleClick = () => {
    const value = search.toLowerCase();
    const filteredJobs = naukri.filter((job) =>
      job.skills.some((skill) => skill.toLowerCase().includes(value))
    );
    setJobs(filteredJobs);
  };

  // Handle the clear button click to reset the filter
  const handleClear = () => {
    dispatch(searchJobs(""));
    setJobs(naukri);
  };

  // Handle the job selection
  const handleJobSelect = (job) => {
    setSelectedJob(job);
  };

  // Handle the form submission
  const handleFormSubmit = (data) => {
    setFormData(data);
  };

  const updateShowSearch = (value) => {
    setShowSearch(value);
  };

  return (
    <div>
      <Header />
      <div className="homepage-container">
        {showSearch && <div className="searchjob-container">
          <h1 className="text-4xl font-bold text-center my-8">
            Find your dream job
          </h1>
          <div className="searching-container">
            <input
              type="text"
              placeholder="Enter a programming language..."
              className="border-2 border-gray-300 rounded-lg p-2 w-80"
              value={search}
                onChange={handleInputChange}
            />
            <button className="search-btn" onClick={handleClick}>
              Search
            </button>
            <button className="clear-btn" onClick={handleClear}>
              Clear
            </button>
          </div>
        </div>}
        <Routes>
          <Route
            exact
            path="/"
            element={<JobList jobs={visiblejobs} onJobSelect={handleJobSelect}  updateShowSearch={updateShowSearch}/>}
          />
          <Route path="/job/:id" element={<JobDetail  job={selectedJob}  />} />
          <Route
            path="/apply"
            element={<JobForm onFormSubmit={handleFormSubmit} />}
          />
          <Route path="/success" element={<JobSuccess formData={formData} />} />
        </Routes>
        {showSearch && <div className="pagination-container">
          <button onClick={handlePrevPage}>Prev</button>
            {pages.map((page) => {
              return (
                <button key={page} onClick={() => setCurrentPage(page)}>
                  {page}
                </button>
              );
            })}
            <button onClick={handleNextPage}>Next</button>
        </div>}
    </div>
    </div>
  );
}

export default App;
