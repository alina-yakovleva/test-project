import { findByLabelText } from "@testing-library/react";
import { useState } from "react";
import "./index.css";
const Parol = ({ type, parol, onChange }) => {
  const [value1, setValue1] = useState(parol);
  const [value2, setValue2] = useState(parol);
  const [isActive, setActive] = useState(true);

  const hasErrorLength1 = value1.length > 0 && value1.length < 5;
  const hasErrorLength2 = value2.length > 0 && value2.length < 5;

  const hasErrors =
    !value1 ||
    !value2 ||
    hasErrorLength1 ||
    hasErrorLength2 ||
    value1 !== value2;

  const onChangeValue = (e) => {
    const newValue = e.target.value;
    setValue1(newValue);
    onChange(newValue);
  };

  return (
    <div className="parol">
      <div className="parol create-parol">
        <div>Пароль</div>
        <div style={{ display: "flex", gap: "30px", alignItems: "center" }}>
          <input
            className={hasErrors && isActive ? "active" : "input"}
            onChange={onChangeValue}
            value={value1}
            type={type}
          />
          <span className="parol helper-text-1">
            Ваш новый пароль должен содержать не менее 5 символов.
          </span>
        </div>
      </div>
      {(!value1 && <span className="error">Укажите пароль</span>) ||
        (hasErrorLength1 && <span className="error">Неверный пароль</span>)}

      <div className="parol repeat-parol">
        <div>Пароль еще раз</div>
        <div
          style={{
            display: "flex",
            gap: "30px",
            alignItems: "center",
          }}
        >
          <input
            onChange={(e) => setValue2(e.target.value)}
            className={hasErrors && isActive ? "active" : "input"}
            value={value2}
            type={type}
          />

          <span className="parol helper-text-2">
            Повторите пароль, пожалуйста, это обезопасит вас с нами на случай
            ошибки.
          </span>
        </div>
      </div>
      {!value2 && <span className="error">Укажите пароль</span>}
      {(hasErrorLength2 && <span className="error">Неверный пароль</span>) ||
        (value2 && hasErrors && (
          <span className="error">Пароли не совпадают </span>
        ))}
    </div>
  );
};
export default Parol;
