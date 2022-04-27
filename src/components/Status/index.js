import { useState } from "react";

const Status = ({ status, onSubmit }) => {
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState(status);

  const save = () => {
    setVisible(false);
    onSubmit(value);
  };

  const cancel = () => {
    setVisible(false);
    setValue(status);
  };

  return !visible ? (
    <div style={{ display: "flex" }}>
      <div className="grey-box">{value}</div>
      <button onClick={() => setVisible(true)}>Изменить статус</button>
    </div>
  ) : (
    <div className="input">
      <input
        style={{ fontSize: "20px" }}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={save}>Сохранить</button>
      <button onClick={cancel}>Отменить</button>
    </div>
  );
};
export default Status;
