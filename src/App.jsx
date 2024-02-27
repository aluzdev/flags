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
    if (userInput == "") {
      setSearch("");
      setFilteredCountries(null);
    }
    setSearch(userInput);

    setFilteredCountries(
      countries.filter((country) =>
        country.name.toLowerCase().includes(search.toLowerCase())
      )
    );

    console.log(filteredCountries);
    console.log(userInput);
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
        <select className="bg-slate-600 text-xl px-4 py-3 shadow-2xl">
          <option value="">Filter by Region</option>
          <option value="africa">Africa</option>
          <option value="america">America</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
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
