import bag from "../assets/bag.png";
import display from "../assets/display.png";
import home from "../assets/home.png";
import profile from "../assets/profile.png";
import starts from "../assets/starts.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50">
      <div className=" max-w-96 mx-auto">
        <div className="navBar border h-12 backdrop-filter backdrop-blur-lg bg-white bg-opacity-40 rounded-xl flex items-center justify-between shadow-md ">
          <div className="left flex gap-x-3 px-5 py-2">
            <Link to="/">
              <img src={home} lt="bag" width="20" height="20" />
            </Link>
            <Link to="/about">
              <img src={profile} lt="bag" width="20" height="20" />
            </Link>
            <Link to="/projects">
              <img src={display} lt="bag" width="20" height="20" />
            </Link>
            <Link to="/products">
              <img src={bag} lt="bag" width="20" height="20" />
            </Link>
          </div>
          <div>
            <div className="border flex mr-2 bg-black text-white rounded p-1">
              {/* <img src={starts} lt="bag" width="20" height="20" /> */}
              <h6 className="text-xs">Hire Me</h6>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
