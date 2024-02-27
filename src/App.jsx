import { Route, Routes } from "react-router-dom";
import { Home } from "./component/Home";
import { SingleView } from "./component/SingleView";
import { Navbar } from "./component/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/:countryName" element={<SingleView />}></Route>
      </Routes>
    </>
  );
}

export default App;
