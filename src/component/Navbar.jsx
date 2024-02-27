import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="bg-neutral-700 text-white text-xl font-bold p-4">
      <div className="flex justify-between ">
        <ul className="flex justify-between">
          <li className="px-4">
            <Link to="/">Where is the world?</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
