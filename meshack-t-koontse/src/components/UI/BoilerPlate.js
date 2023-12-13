import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const BoilerPlate = (props) => {
  return (
    <>
      <Navbar />
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default BoilerPlate;
