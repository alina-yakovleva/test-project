import cities from "../../cities.json";

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
    <select
      className="select"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="" disabled>
        Выберите город
      </option>
      {largePopulationCity && (
        <option>
          {largePopulationCity.city}-{largePopulationCity.population}
        </option>
      )}

      {sortedCities.map((city) => (
        <option key={city.city}>
          {city.city}-{city.population}
        </option>
      ))}
    </select>
  );
};
export default CitySelect;
