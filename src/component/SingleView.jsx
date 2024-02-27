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
        <div className="flex flex-row justify-center mt-10">
          <div className="flex flex-row gap-8 w-9/12 bg-slate-50 rounded-lg shadow-lg shadow-zinc-600">
            <img
              src={countryData.flag || "https://picsum.photos/300"} // Using a placeholder image if no flag URL
              className="w-1/2 "
              alt="Country Flag"
            />
            <div className="w-9/12 grid content-center">
              <h2 className="text-left font-bold text-xl">
                {countryData.name.common}
              </h2>
              {/* Updated to use common name */}
              <br />
              <div>
                <ul className="grid grid-cols-2 text-base font-semibold">
                  <li className="flex flex-row">
                    Native Name:
                    <p className="ml-4 font-extralight">
                      {
                        Object.values(countryData.name.nativeName || {})[0]
                          ?.common
                      }
                    </p>
                  </li>
                  <li className="flex flex-row">
                    Population:{" "}
                    <p className="ml-4 font-extralight">
                      {countryData.population}
                    </p>
                  </li>
                  <li className="flex flex-row">
                    Region:{" "}
                    <p className="ml-4 font-extralight">{countryData.region}</p>
                  </li>
                  <li className="flex flex-row">
                    Sub Region:{" "}
                    <p className="ml-4 font-extralight">
                      {countryData.subregion}
                    </p>
                  </li>
                  <li className="flex flex-row">
                    Capital:
                    <p className="ml-2">{countryData.capital?.join(", ")}</p>
                  </li>
                  <li className="flex flex-row">
                    Top Level Domain:
                    <p className="ml-4 font-extralight">
                      {countryData.tld?.join(", ")}
                    </p>
                  </li>
                  <li className="flex flex-row">
                    Currencies:
                    <p className="ml-4 font-extralight">
                      {Object.values(countryData.currencies || {})
                        .map((currency) => currency.name)
                        .join(", ")}
                    </p>
                  </li>
                  <li className="flex flex-row">
                    Languages:
                    <p className="ml-4 font-extralight">
                      {Object.values(countryData.languages || {}).join(", ")}
                    </p>
                  </li>
                </ul>
                <br />
                {/*      <div className="grid grid-cols-4 gap-2 w-4/5 text-sm">
                  <h4>Border countries:</h4>

                 {countryData.borders?.map((border, index) => (
                    <button
                      key={index}
                      className="border-2 font-light shadow-2xl bg-red-200"
                    >
                      {border}
                    </button>
                  ))} 
                </div>*/}
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
