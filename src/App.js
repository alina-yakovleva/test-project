import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./index.css";
import {
  getUniversitiesAsync,
  setSelectedCity,
  setselectedUniversity,
  setStatus,
  setParol,
  setEmail,
  setCompleted,
} from "./store/actions";

import UniversitySelect from "./components/UniversitySelect";
import CitySelect from "./components/CitySelect";

import GreyBox from "./components/GreyBox";
import Parol from "./components/Parol";
import Email from "./components/Email";
import CheckBox from "./components/CheckBox";

function App() {
  const selectedUniversity = useSelector((state) => state.selectedUniversity);
  const selectedCity = useSelector((state) => state.selectedCity);
  const universities = useSelector((state) => state.universities);
  const status = useSelector((state) => state.status);
  const parol = useSelector((state) => state.parol);
  const email = useSelector((state) => state.email);
  const completed = useSelector((state) => state.completed);
  const [visible, setVisible] = useState(false);

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
      parol,
      email,
      completed,
    };

    if (
      !data.university ||
      !data.city ||
      !data.status ||
      !data.parol ||
      !data.email ||
      data.completed
    ) {
      alert("Заполните все поля");
    } else if (parol.length < 5) {
      alert("Ошибка при вводе пароля");
    } else if (email.length < 8) {
      alert("Ошибка при вводе email");
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

  const onChangeParol = (parol) => {
    dispatch(setParol(parol));
  };
  const onChangeEmail = (value) => {
    dispatch(setEmail(value));
  };
  const onChangeCheckBox = (completed) => {
    dispatch(setCompleted(completed));
  };
  return (
    <div className="App">
      <div className="wrap">
        <div className="wrap__title">
          <div className="wrap__title-title">
            <div style={{ color: "#666666" }}>Здравствуйте,</div>
            <div>Человек №3596941</div>
          </div>
          <div
            className="wrap__title_change-status"
            onClick={() => setVisible(!visible)}
          >
            Сменить статус
          </div>
        </div>

        <GreyBox
          status={status}
          open={visible}
          setOpen={setVisible}
          onSubmit={onChangeStatus}
        />
        <div className="column">
          <CitySelect value={selectedCity} onChange={onChangeCity} />
          <UniversitySelect
            value={selectedUniversity}
            onChange={onChange}
            items={universities}
          />
          <hr />
          <Parol parol={parol} type={"password"} onChange={onChangeParol} />
          <hr />
          <Email email={email} onChange={onChangeEmail} />
          <CheckBox completed={completed} onChange={onChangeCheckBox} />
          <div className="button">
            <button className="main-button" onClick={onSubmit}>
              Изменить
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
