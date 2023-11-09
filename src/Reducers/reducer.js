// reducers.js
import { combineReducers } from "redux";
import { UPDATE_JOBS, SEARCH_JOBS, SELECT_JOB, SUBMIT_FORM } from "../actions/action";

const jobs = (state = [], action) => {
  switch (action.type) {
    case UPDATE_JOBS:
      return action.payload;
    default:
      return state;
  }
};

const initialState = "";

const searchText = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_JOBS:
      return action.payload;
    default:
      return state;
  }
};

const selectedJob = (state = null, action) => {
  switch (action.type) {
    case SELECT_JOB:
      return action.payload;
    default:
      return state;
  }
};

const formData = (state = null, action) => {
  switch (action.type) {
    case SUBMIT_FORM:
      return action.payload;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  jobs,
  searchText,
  selectedJob,
  formData
});

export default rootReducer;
