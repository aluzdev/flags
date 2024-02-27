import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCountryByName } from "../api/countries";

export const SingleView = () => {
  const [countryData, setCountryData] = useState(null);
  const { countryName } = useParams(); // Correct extraction of URL parameter

  useEffect(() => {
    if (countryName) {
      // Ensure countryName is valid
      getCountryByName(countryName).then((data) => {
        setCountryData(data);
      });
    }
  }, [countryName]); // Add countryName to dependency array to refetch on change

  // Conditional rendering in return statement to handle null state of countryData
  return (
    <>
      {countryData ? (
        <div className="flex flex-row justify-center">
          <div className="flex flex-row gap-8 w-9/12">
            <img
              src={countryData.flag || "https://picsum.photos/300"} // Using a placeholder image if no flag URL
              className="w-1/2 shadow-lg shadow-zinc-700"
              alt="Country Flag"
            />
            <div className="w-9/12 grid content-center">
              <h2 className="text-left font-bold text-xl">
                {countryData.name.common}
              </h2>
              {/* Updated to use common name */}
              <br />
              <div>
                <ul className="grid grid-cols-2 font-light text-sm">
                  <li>
                    Native Name:
                    <p className="ml-2">
                      {
                        Object.values(countryData.name.nativeName || {})[0]
                          ?.common
                      }
                    </p>
                  </li>
                  <li>
                    Population: <p className="ml-2">{countryData.population}</p>
                  </li>
                  <li>
                    Region: <p className="ml-2">{countryData.region}</p>
                  </li>
                  <li>
                    Sub Region: <p className="ml-2">{countryData.subregion}</p>
                  </li>
                  <li>
                    Capital:
                    <p className="ml-2">{countryData.capital?.join(", ")}</p>
                  </li>
                  <li>
                    Top Level Domain:
                    <p className="ml-2">{countryData.tld?.join(", ")}</p>
                  </li>
                  <li>
                    Currencies:
                    <p className="ml-2">
                      {Object.values(countryData.currencies || {})
                        .map((currency) => currency.name)
                        .join(", ")}
                    </p>
                  </li>
                  <li>
                    Languages:
                    <p className="ml-2">
                      {Object.values(countryData.languages || {}).join(", ")}
                    </p>
                  </li>
                </ul>
                <br />
                <div className="grid grid-cols-4 gap-2 w-4/5 text-sm">
                  <h4>Border countries:</h4>
                  {/* Dynamically render border countries if available */}
                  {countryData.borders?.map((border, index) => (
                    <button
                      key={index}
                      className="border-2 font-light shadow-2xl"
                    >
                      {border}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading or no country data available...</p> // Display loading or no data message
      )}
    </>
  );
};
