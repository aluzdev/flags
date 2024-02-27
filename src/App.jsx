import { useState, useEffect } from "react";
import "./App.css";
// import { SingleView } from './component/singleView'
import { getCountryData } from "./api/countries";
import { Cards } from "./component/Card";

function App() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    getCountryData().then((countries) => setCountries(countries));
  }, []);

  return (
    <>
      {/* < SingleView/> */}
      <div className="flex justify-between text-white">
        <input
          type="text"
          className="bg-slate-600 text-xl px-4 py-3 shadow-2xl shadow-zinc-950"
          placeholder="Search for a country..."
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
        {/* countries.map(({capital, population, region})=> <Cards capital={capital} population={population} region={region} />)
         */}
        {countries.map(({ population, region, capital, name, flag, index }) => (
          <Cards
            key={index}
            capital={capital}
            population={population}
            region={region}
            name={name}
            flag={flag}
          />
        ))}
      </div>
    </>
  );
}

export default App;
