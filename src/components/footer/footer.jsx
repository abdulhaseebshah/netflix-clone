import {
  RiGithubFill,
  RiLinkedinBoxFill,
  RiTwitterFill,
} from "@remixicon/react";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="pt-[2rem] px-[3rem] pb-[6.5rem] text-[#80868b]">
      <p className="my-[.2rem] text-sm">
        © 2024 Abdul Haseeb. All rights reserved.
      </p>
      <p className="my-[.2rem] text-sm">
        Designed and built by me, data provided by <u>TMDb</u>.
      </p>

      <ul className="flex my-4 mx-0">
        <li>
          <Link to="https://x.com/_abdulhaseeb26_" className="flex justify-center items-center w-12 h-12 hover:text-[#fff] transition-all duration-500">
            <RiTwitterFill />
          </Link>
        </li>
        <li>
          <Link to="https://github.com/abdulhaseebshah/" className="flex justify-center items-center w-12 h-12 hover:text-[#fff] transition-all duration-500">
            <RiGithubFill />
          </Link>
        </li>
        <li>
          <Link to="https://www.linkedin.com/in/abdulhaseeb26/" className="flex justify-center items-center w-12 h-12 hover:text-[#fff] transition-all duration-500">
            <RiLinkedinBoxFill />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
