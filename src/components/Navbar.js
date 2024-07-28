import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-gray-800 bg-opacity-30  border-b border-blue-700 backdrop-blur-lg backdrop-filter md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <button
          className="ml-3 text-lg bg-transparent border-none text-blue-500 cursor-pointer"
          onClick={() => (window.location.href = "#about")}
        >
          Prithwish's Portfolio
        </button>

        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5">
            <b className="bg-purple-700 hover:bg-purple-500 text-white px-2 py-1 rounded transition duration-300">
              Projects
            </b>
          </a>
          <a href="#skills" className="mr-5">
            <b className="bg-yellow-500 hover:bg-yellow-600 text-white px-2 py-1 rounded transition duration-300">
              Skills
            </b>
          </a>
          <a href="#experience" className="mr-5">
            <b className="bg-blue-500 hover:bg-blue-700 text-white px-2 py-1 rounded transition duration-300">
              Experience
            </b>
          </a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center bg-red-500 border-10 py-2 px-3 focus:outline-none hover:bg-red-700 rounded text-base mt-4 md:mt-0 text-white"
          style={{ textDecoration: "none" }}
        >
          <b>Contact Me</b>
          <ArrowRightIcon className="w-8 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}
