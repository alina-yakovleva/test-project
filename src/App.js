import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./index.css";
import {
  getUniversitiesAsync,
  setSelectedCity,
  setselectedUniversity,
  setStatus,
} from "./store/actions";

import UniversitySelect from "./components/UniversitySelect";
import CitySelect from "./components/CitySelect";
import Status from "./components/Status";

function App() {
  const selectedUniversity = useSelector((state) => state.selectedUniversity);
  const selectedCity = useSelector((state) => state.selectedCity);
  const universities = useSelector((state) => state.universities);
  const status = useSelector((state) => state.status);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUniversitiesAsync());
  }, []);

  const onChange = (value) => {
    dispatch(setselectedUniversity(value));
  };

  const onSubmit = () => {
    const data = {
      university: selectedUniversity,
      city: selectedCity,
      status,
    };

    if (!data.university || !data.city || !data.status) {
      alert("Заполните все поля");
    } else {
      console.log("data", data);
    }
  };

  const onChangeCity = (value) => {
    dispatch(setSelectedCity(value));
  };

  const onChangeStatus = (value) => {
    dispatch(setStatus(value));
  };
  return (
    <div className="App">
      <UniversitySelect
        value={selectedUniversity}
        onChange={onChange}
        items={universities}
      />
      <br />
      <CitySelect value={selectedCity} onChange={onChangeCity} />
      <br />
      <Status status={status} onSubmit={onChangeStatus} />
      <br />
      <button className="main-button" onClick={onSubmit}>
        Сохранить данные
      </button>
    </div>
  );
}

export default App;
