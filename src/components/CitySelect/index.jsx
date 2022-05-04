import cities from "../../cities.json";
import "./index.css";

const CitySelect = ({ value, onChange }) => {
  const filteredCities = cities.filter((city) => city.population > 50000);

  const largePopulationCity = filteredCities
    .slice()
    .sort((a, b) => b.population - a.population)[0];

  const sortedCities = filteredCities
    .filter((city) => city.city !== largePopulationCity.city)
    .sort((a, b) => {
      const nameA = a.city.toLowerCase(),
        nameB = b.city.toLowerCase();
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;
    });
  return (
    <div className="city-select">
      <div>Ваш город</div>
      <select
        className="select"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {largePopulationCity && <option>{largePopulationCity.city}</option>}

        {sortedCities.map((city) => (
          <option key={city.city}>{city.city}</option>
        ))}
      </select>
    </div>
  );
};
export default CitySelect;
