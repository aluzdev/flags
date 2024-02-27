// eslint-disable-next-line react/prop-types
export const Card = ({ population, region, capital, name, flag, onClick }) => {
  return (
    <div
      className="w-80 bg-slate-50 text-sm font-semibold shadow-lg shadow-zinc-700 rounded-lg"
      onClick={onClick}
    >
      <img src={flag} alt="" className="w-80 h-48 rounded-lg fit-cover" />

      <div className="px-5 py-4 ">
        <h3 className="font-bold mb-4 text-left text-base">{name}</h3>

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
      </div>
    </div>
  );
};
