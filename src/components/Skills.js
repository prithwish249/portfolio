import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data";

export default function Skills() {
  return (
    <section id="skills" className="text-gray-400  body-font">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <ChipIcon className="w-10 inline-block mb-4" />
          <h1 className="font-mono sm:text-4xl text-3xl font-medium title-font text-green-500 mb-4">
            <b>Skills &amp; Technologies</b>
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            <i>
              I excel in diverse programming languages like JavaScript, Python,
              and Java, and leverage modern web technologies including React and
              Node.js for interactive interfaces and server-side solutions. With
              expertise in HTML, CSS, MongoDB, and Git, I craft seamless user
              experiences and efficient development workflows, delivering
              innovative software solutions.
            </i>
          </p>
        </div>
        <div className="flex flex-wrap justify-center w-full sm:w-full md:w-4/5 lg:w-full mx-auto sm:mb-2 ">
          {skills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
