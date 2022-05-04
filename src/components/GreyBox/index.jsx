import { useState } from "react";
import "../../index.css";
const GreyBox = ({ open, status, onSubmit, setOpen }) => {
  const [value, setValue] = useState(status);

  const save = () => {
    setOpen(false);
    onSubmit(value);
  };
  const cancel = () => {
    setOpen(false);
    setValue(status);
  };
  return !open ? (
    <div className="grey-box">
      <div className="square"></div>
      <div className="box">{value}</div>
    </div>
  ) : (
    <div className="grey-box">
      <div className="square"></div>
      <div className="box">
        <input
          style={{ fontSize: "20px" }}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        <button onClick={save}>Сохранить</button>
        <button onClick={cancel}>Отменить</button>
      </div>
    </div>
  );
};
export default GreyBox;
