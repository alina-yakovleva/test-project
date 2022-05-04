import { useState } from "react";
import "./index.css";
const Email = ({ email, onChange }) => {
  const [value, setValue] = useState(email);
  const [active, setActive] = useState(true);
  const hasEmptyEmail = !value;
  const hasEmailError = value.length < 8;
  const hasErrors = hasEmailError && hasEmptyEmail;

  const onChangeEmail = (e) => {
    setValue(e.target.value);
    onChange(value);
  };
  return (
    <div>
      <div className="email">
        <div>Электронная почта</div>
        <input
          className={hasErrors && active ? "active" : "input"}
          type="email"
          value={value}
          onChange={onChangeEmail}
        />
        <span className="email helper-text">
          Можно изменить адрес, указанный при регистрации.
        </span>
      </div>
      {(hasEmptyEmail && <span className="error">Укажите E-mail</span>) ||
        (hasEmailError && <span className="error">Неверный E-mail</span>)}
    </div>
  );
};
export default Email;
