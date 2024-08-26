import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Navbar } from "flowbite-react";
import BoxMediaLogo from "../../assets/Box Media Logo.png";
const Navigate = () => {
  const location = useLocation();
  const [navbarList, setNavbarList] = useState([
    { title: "About", path: "/about" },
    { title: "Photo", path: "/photo" },
    { title: "Video", path: "/video" },
    { title: "Sound", path: "/sound" },
    { title: "Contact", path: "/contact" },
  ]);

  return (
    <div className="w-[80%] mx-auto text-gray-300">
      <Navbar fluid rounded className="bg-black">
        <Navbar.Brand as={Link} to="/">
          <img
            src={BoxMediaLogo}
            className="mr-6 h-8 sm:h-14 ml-6"
            alt="Box media Logo"
          />
          <span className="text-2xl self-center space-x-2 whitespace-nowrap md:text-3xl text-white font-thin">
            <span>B</span>
            <span>O</span>
            <span className="space-x-4">
              <span>X</span>
              <span>M</span>
            </span>
            <span>E</span>
            <span>D</span>
            <span>I</span>
            <span>A</span>
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          {navbarList?.map((item, index) => {
            return (
              <Navbar.Link
                key={index}
                as={Link}
                to={item.path}
                className={`text-[18px] font-thin ${
                  location.pathname === item.path
                    ? "text-red-500 hover:text-red-700 md:hover:text-red-700"
                    : "text-gray-300 hover:text-red-700 md:hover:text-red-700"
                }`}
              >
                {item.title}
              </Navbar.Link>
            );
          })}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigate;
