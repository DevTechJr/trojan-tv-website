import React from "react";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { RiTeamLine, RiCalendarEventFill } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className="navbar bg-white mx-5 rounded-2xl">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden hover:bg-darkBlue bg-darkBlue">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
           <li className="hover:-translate-y-1 transition duration-500 ease-in-out">
            <a>
              <span className="text-2xl">
                <MdOutlineVideoLibrary />
              </span>{" "}
              Broadcasts
            </a>
          </li>
          <li className="hover:-translate-y-1 transition duration-500 ease-in-out">
            <a>
              <span className="text-2xl">
                <RiCalendarEventFill />
              </span>{" "}
              Events
            </a>
          </li>
          <li className="hover:-translate-y-1 transition duration-500 ease-in-out">
            <a>
              <span className="text-2xl">
                <RiTeamLine />
              </span>{" "}
              About Us
            </a>
          </li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-3xl darkBlue mx-2 font-bold text-uppercase text-boldserif hover:-translate-y-1 transition duration-500 ease-in-out">
          <img
            className="w-16 lg:inline-block md:inline-block hidden"
            src="https://i.ibb.co/Bqrrcvh/trojan-TVBlue-1.png"
          />
          <span className="mx-2 text-darkBlue ">TROJAN TV</span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0 text-oxy text-darkBlue text-lg font-semibold">
          <li className="hover:-translate-y-1 transition duration-500 ease-in-out">
            <a>
              <span className="text-2xl">
                <MdOutlineVideoLibrary />
              </span>{" "}
              Broadcasts
            </a>
          </li>
          <li className="hover:-translate-y-1 transition duration-500 ease-in-out">
            <a>
              <span className="text-2xl">
                <RiCalendarEventFill />
              </span>{" "}
              Events
            </a>
          </li>
          <li className="hover:-translate-y-1 transition duration-500 ease-in-out">
            <a>
              <span className="text-2xl">
                <RiTeamLine />
              </span>{" "}
              About Us
            </a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn hover:bg-yellow-500 capitalize text-lg text-oxy text-white bg-darkBlue mx-2 font-semibold">
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default Navbar;
