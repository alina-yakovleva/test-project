import {
  SET_SELECTED_CITY,
  SET_SELECTED_UNIVERSITY,
  SET_STATUS,
  SET_UNIVERSITIES,
} from "./constants";

const initialState = {
  universities: [],
  selectedUniversity: "",
  selectedCity: "",
  status: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_UNIVERSITIES: {
      return {
        ...state,
        universities: action.payload,
      };
    }
    case SET_SELECTED_UNIVERSITY: {
      return {
        ...state,
        selectedUniversity: action.payload,
      };
    }
    case SET_SELECTED_CITY: {
      return { ...state, selectedCity: action.payload };
    }
    case SET_STATUS: {
      return { ...state, status: action.payload };
    }
    default:
      return state;
  }
};
