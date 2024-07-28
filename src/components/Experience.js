import React from "react";
import { BriefcaseIcon } from "@heroicons/react/solid";

export default function Experience() {
  return (
    <section id="experience">
      <div className="container mx-auto my-8 p-8 rounded-lg">
        <div className="flex justify-center mb-4">
          <BriefcaseIcon className="w-10" />
        </div>
        <h2 className="text-4xl font-mono font-medium text-green-500 mb-4 text-center">
          Experience
        </h2>
        <div className="flex justify-center">
          <div className="w-full max-w-md">
            <div className="border-l-2 border-gray-600 pl-4 relative">
              <div className="absolute h-full top-0 left-0 transform -translate-x-2">
                <div className="relative">
                  <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                </div>
                <div className="relative mt-24">
                  <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                </div>
              </div>
              <div className="mb-6 ml-8 flex items-center">
                <img
                  src="./targetgrid.ico"
                  alt="Targetgrid"
                  className="w-11 h-11 rounded-sm mr-4"
                />
                <div>
                  <h3 className="text-xl text-blue-500 font-semibold">
                    Targetgrid
                  </h3>
                  <p className="text-gray-400">Full Stack Developer</p>
                  <p className="text-gray-400">February 2024 - April 2024</p>
                </div>
              </div>
              <div className="ml-8 flex items-center">
                <img
                  src="./agni.png"
                  alt="Agni Green Power Limited"
                  className="w-12 h-12 rounded-md mr-4"
                />
                <div>
                  <h3 className="text-xl text-blue-500 font-semibold">
                    Agni Green Power Limited
                  </h3>
                  <p className="text-gray-400">Frontend Developer</p>
                  <p className="text-gray-400">July 2024 - Present</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
