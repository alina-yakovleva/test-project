import { getUniversity } from "../api/university";
import {
  SET_COMPLETED,
  SET_EMAIL,
  SET_PAROL,
  SET_SELECTED_CITY,
  SET_SELECTED_UNIVERSITY,
  SET_STATUS,
  SET_UNIVERSITIES,
} from "./constants";

export const setUniversities = (universities) => ({
  type: SET_UNIVERSITIES,
  payload: universities,
});

export const getUniversitiesAsync = () => async (dispatch) => {
  try {
    const universities = await getUniversity();

    dispatch(setUniversities(universities));
  } catch (e) {
    alert("Ошибка при запросе университетов");
  }
};
export const setselectedUniversity = (selected) => ({
  type: SET_SELECTED_UNIVERSITY,
  payload: selected,
});

export const setSelectedCity = (selected) => ({
  type: SET_SELECTED_CITY,
  payload: selected,
});

export const setStatus = (value) => ({
  type: SET_STATUS,
  payload: value,
});

export const setParol = (value) => ({
  type: SET_PAROL,
  payload: value,
});
export const setEmail = (value) => ({
  type: SET_EMAIL,
  payload: value,
});
export const setCompleted = (completed) => ({
  type: SET_COMPLETED,
  payload: completed,
});
