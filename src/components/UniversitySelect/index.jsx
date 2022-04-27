const UniversitySelect = ({ value, onChange, items }) => {
  return (
    <select
      className="select"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="" disabled>
        Выберите университет
      </option>
      {items.map((university) => (
        <option>{university.name}</option>
      ))}
    </select>
  );
};
export default UniversitySelect;
