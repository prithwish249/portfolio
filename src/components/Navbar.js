import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 bg-opacity-30  pb-2 border-b border-blue-700 backdrop-blur-lg backdrop-filter h-16 w-full fixed top-0 left-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center space-x-6">
          <h1 className="text-center text-lg">Portfolio |</h1>
          <a
            href="#projects"
            className="text-white bg-purple-700 hover:bg-purple-500 px-4 py-2 rounded transition duration-300"
          >
            Projects
          </a>
          <a
            href="#skills"
            className="text-white bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded transition duration-300"
          >
            Skills
          </a>
          <a
            href="#experience"
            className="text-white bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded transition duration-300"
          >
            Experience
          </a>
        </div>

        <a
          href="#contact"
          className="inline-flex items-center bg-red-500 py-2 px-3 focus:outline-none hover:bg-red-700 rounded text-base text-white"
        >
          <b>
            Contact Me <span className="text-bold text-lg">→</span>
          </b>
        </a>
      </div>
    </nav>
  );
}
