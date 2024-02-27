export const Cards = ({ population, region, capital, name, flag }) => {
  return (
    <div className="w-64 bg-slate-600 text-xs text-white font-semibold shadow-lg shadow-zinc-700 rounded-md">
      <img src={flag} alt="" className="" />

      <div className="p-3 ">
        <h3 className="font-bold mb-4 text-left text-sm">{name}</h3>

        <ul className="flex flex-col space-y-2">
          <li className="flex">
            Population:
            <p className="font-thin ml-2">{population}</p>
          </li>
          <li className="flex">
            Region:
            <p className="font-thin ml-2">{region}</p>
          </li>
          <li className="flex ">
            Capital:
            <p className="font-thin ml-2">{capital}</p>
          </li>
        </ul>
        <br />
        <br />
      </div>
    </div>
  );
};