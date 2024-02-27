import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCountryByName } from "../api/countries";

export const SingleView = (props) => {
  const countryName = useParams();

  useEffect(() => {
    console.log(countryName);
    getCountryByName(countryName).then((data) => console.log(data));
  });

  return (
    <div className="flex flex-row justify-center">
      <div className=" flex flex-row  gap-8 w-9/12">
        <img
          src="https://picsum.photos/300"
          className="w-1/2 shadow-lg shadow-zinc-700"
        />
        <div className=" w-9/12 grid content-center">
          <h2 className="text-left font-bold text-xl"> Country </h2>
          <br />
          <div className="">
            <ul className="grid grid-cols-2 font-light text-sm">
              <li>
                Native Nam: <p>belgie</p>
              </li>
              <li>
                Population: <p>11,319,511</p>
              </li>
              <li>
                Region: <p>Europe</p>
              </li>
              <li>
                Sub Region: <p>Western Europe</p>
              </li>
              <li>
                Capital: <p>Brussels</p>
              </li>
              <li>
                Top Level Domain: <p>be</p>
              </li>
              <li>
                Currencies: <p>Euro</p>
              </li>
              <li>
                Lenguages: <p>Dutch, French, German</p>
              </li>
            </ul>
            <br />
            <div className=" grid grid-cols-4 gap-2 w-4/5 text-sm">
              <h4>Border countries:</h4>
              <button className="border-2 font-light shadow-2xl">France</button>
              <button className="border-2 font-light shadow-2xl">
                Germany
              </button>
              <button className="border-2 font-light shadow-2xl">
                Netherlands
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
