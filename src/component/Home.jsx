import { useState, useEffect } from "react";
// import { SingleView } from './component/singleView'
import { getCountryData } from "../api/countries";
import { Card } from "./Card";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredCountries, setFilteredCountries] = useState(null);
  const navigate = useNavigate();
  // const [region, setRegion] = useState("");

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
    // por qué esto no funcionó con un estado?
    // setRegion(event.target.value);
    const region = event.target.value;

    const filtered = countries.filter((country) =>
      country.region.includes(region)
    );
    console.log(filtered);
    setFilteredCountries(filtered);
  };

  const getCountry = async (name) => {
    navigate(`/${name}`);
  };
  return (
    <>
      <div className="flex justify-between mb-7 mx-10 mt-12">
        <input
          type="text"
          className="bg-slate-50 text-xl px-4 py-3 shadow-2xl shadow-zinc-950 w-96"
          placeholder="Search for a country..."
          onChange={handleSearch}
          value={search}
        />
        <select
          className="bg-slate-50 rounded-lg text-xl shadow-2xl px-8"
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
      <div className="grid grid-cols-4 gap-8 place-items-center">
        {filteredCountries
          ? filteredCountries.map(
              ({ population, region, capital, name, flag }) => (
                <Card
                  key={name}
                  capital={capital}
                  population={population}
                  region={region}
                  name={name}
                  flag={flag}
                  onClick={() => getCountry(name)}
                />
              )
            )
          : countries.map(({ population, region, capital, name, flag }) => (
              <Card
                key={name}
                capital={capital}
                population={population}
                region={region}
                name={name}
                flag={flag}
                onClick={() => getCountry(name)}
              />
            ))}
      </div>
    </>
  );
};
