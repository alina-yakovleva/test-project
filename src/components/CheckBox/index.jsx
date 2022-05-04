import { useState } from "react";
import "./index.css";
const CheckBox = ({ completed, onChange }) => {
  const [checked, setChecked] = useState(completed);

  const onChangeCheckBox = (e) => {
    setChecked(e.target.checked);
    onChange(checked);
  };
  return (
    <div className="checkbox">
      <div>Я согласен</div>
      <div>
        <input type="checkbox" checked={checked} onChange={onChangeCheckBox} />
        <label>принимать актуальную информацию на емэйл</label>
      </div>
    </div>
  );
};
export default CheckBox;
