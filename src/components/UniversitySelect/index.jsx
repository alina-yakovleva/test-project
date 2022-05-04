import "./index.css";

const UniversitySelect = ({ value, onChange, items }) => {
  return (
    <div className="university-select">
      <div>Ваш университет</div>
      <select value={value} onChange={(e) => onChange(e.target.value)}>
        {items.map((university) => (
          <option>{university.name}</option>
        ))}
      </select>
    </div>
  );
};
export default UniversitySelect;
