export const UPDATE_JOBS = "UPDATE_JOBS";
export const SEARCH_JOBS = "SEARCH_JOBS";
export const SELECT_JOB = "SELECT_JOB";
export const SUBMIT_FORM = "SUBMIT_FORM";

export function updateJobs(jobs) {
  return { type: UPDATE_JOBS, payload: jobs };
}

export function searchJobs(searchText) {
  return { type: SEARCH_JOBS, payload: searchText };
}

export function selectJob(job) {
  return { type: SELECT_JOB, payload: job };
}

export function submitForm(formData) {
  return { type: SUBMIT_FORM, payload: formData };
}
