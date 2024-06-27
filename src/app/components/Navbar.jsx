"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useState } from "react";
const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <nav className="w-full bg-nav fixed top-0 left-0 right-0 z-10">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <Link href="/">
                {/* <h2 className="text-default-text     md:hover:text-blue-600 ">&#10096; Logo</h2> */}
                <h2 className="text-default-text     md:hover:text-blue-600 ">Vinit Patel</h2>
              </Link>
              {/* Hamburger Button for Mobile */}
              <div className="md:hidden">
                <button
                  onClick={() => setNavbar(!navbar)}
                  className="text-default-text focus:outline-none"
                >
                  {navbar ? (
                    <FontAwesomeIcon icon={faXmark} className="text-2xl" />
                  ) : (
                    <FontAwesomeIcon icon={faBars} className="text-2xl" />
                  )}
                </button>
              </div>
              {/* Hamburger menu ends */}
            </div>
          </div>

          <div>
            <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'p-12 md:p-0 block' : 'hidden'
            }`}>
                <ul className="h-screen md:h-auto items-center justify-center md:flex">
                <li className="pb-6 text-xl font-bold text-default-text py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-blue-600  border-blue-600  md:hover:text-blue-600 md:hover:bg-transparent">
                  <Link href="#about" onClick={() => setNavbar(!navbar)}>
                    About
                  </Link>
                </li>

                <li className="pb-6 text-xl font-bold text-default-text py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-blue-600  border-blue-600  md:hover:text-blue-600 md:hover:bg-transparent">
                  <Link href="#projects" onClick={() => setNavbar(!navbar)}>
                    Projects
                  </Link>
                </li>

                <li className="pb-6 text-xl font-bold text-default-text py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-blue-600  border-blue-600  md:hover:text-blue-600 md:hover:bg-transparent">
                  <Link href="#experience" onClick={() => setNavbar(!navbar)}>
                    Experience
                  </Link>
                </li>

                <li className="pb-6 text-xl font-bold text-default-text py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-blue-600  border-blue-600  md:hover:text-blue-600 md:hover:bg-transparent">
                  <Link href="#achievements" onClick={() => setNavbar(!navbar)}>
                    Achievements
                  </Link>
                </li>

                <li className="pb-6 text-xl font-bold text-default-text py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-blue-600  border-blue-600  md:hover:text-blue-600 md:hover:bg-transparent">
                  <Link href="#contact" onClick={() => setNavbar(!navbar)}>
                    Contact
                  </Link>
                </li>

                </ul>

            </div>
          </div>

    
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
