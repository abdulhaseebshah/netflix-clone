import {
  RiHome5Line,
  RiMovieLine,
  RiSearchLine,
  RiTvLine,
} from "@remixicon/react";
import React from "react";
import "./sidebar.css";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <nav className="sideNavbar">
      <ul className="nolist">
        <li>
          <NavLink to={"/"}>
            <RiHome5Line
              size={28}
              className="text-white hover:text-stone-200"
            />
          </NavLink>
        </li>
        <li>
          <NavLink to={"/movie"}>
            <RiMovieLine
              size={28}
              className="text-white hover:text-stone-200"
            />
          </NavLink>
        </li>
        <li>
          <NavLink to={"/tv"}>
            <RiTvLine size={28} className="text-white hover:text-stone-200" />
          </NavLink>
        </li>
        <li>
          <a>
            <RiSearchLine
              size={28}
              className="text-white hover:text-stone-200"
            />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
