import { useState, useEffect } from "react";
import "./App.css";
// import { SingleView } from './component/singleView'
import { getCountryData } from "./api/countries";
import { Cards } from "./component/Card";

function App() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredCountries, setFilteredCountries] = useState(null);

  useEffect(() => {
    getCountryData().then((countries) => setCountries(countries));
  }, []);

  const handleSearch = (e) => {
    const userInput = e.target.value;
    setSearch(userInput);

    if (userInput === "") {
      setFilteredCountries(null);
    } else {
      const filtered = countries.filter((country) =>
        country.name.toLowerCase().includes(userInput.toLowerCase())
      );
      setFilteredCountries(filtered);
    }
  };

  // const handleDropdown = (e) => {
  //   const currentRegion = e.target.value;
  //   const filtered = countries.filter((country) =>
  //     country.region.toLowerCase().includes(currentRegion.toLowerCase())
  //   );
  //   console.log(filtered);
  // };

  const handleFilter = (event) => {
    const region = event.target.value;

    const filtered = countries.filter((country) =>
      country.region.includes(region)
    );
    console.log(filtered);
    setFilteredCountries(filtered);
  };

  return (
    <>
      <div className="flex justify-between text-white">
        <input
          type="text"
          className="bg-slate-600 text-xl px-4 py-3 shadow-2xl shadow-zinc-950"
          placeholder="Search for a country..."
          onChange={handleSearch}
          value={search}
        />
        <select
          className="bg-slate-600 text-xl px-4 py-3 shadow-2xl"
          onChange={handleFilter}
        >
          <option value="">Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>

      <br />
      <div className="grid grid-cols-4 gap-8">
        {filteredCountries
          ? filteredCountries.map(
              ({ population, region, capital, name, flag }) => (
                <Cards
                  key={flag}
                  capital={capital}
                  population={population}
                  region={region}
                  name={name}
                  flag={flag}
                />
              )
            )
          : countries.map(
              ({ population, region, capital, name, flag, index }) => (
                <Cards
                  key={index}
                  capital={capital}
                  population={population}
                  region={region}
                  name={name}
                  flag={flag}
                />
              )
            )}
      </div>
    </>
  );
}

export default App;
