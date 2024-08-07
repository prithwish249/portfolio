import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400  body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="font-mono sm:text-4xl text-3xl font-medium title-font mb-4 text-green-500">
            <b>Projects I've Built</b>
          </h1>
          <p className="font-mono lg:w-2/3 mx-auto leading-relaxed text-base">
            Here are some of my projects with GitHub links...
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <div
              className="p-4 w-full sm:w-full md:w-1/2 lg:w-1/2"
              key={project.image}
            >
              <a href={project.link} className="block h-full">
                <div className="flex flex-col sm:flex-row relative bg-gray-800 border-4 border-gray-800 p-4 h-full">
                  <img
                    alt="gallery"
                    className="w-full sm:w-1/2 h-64 sm:h-full object-cover object-center"
                    src={project.image}
                  />
                  <div className="w-full sm:w-1/2 pl-4 flex flex-col justify-center mt-4 sm:mt-0">
                    <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                      {project.subtitle}
                    </h2>
                    <h1 className="title-font text-lg font-medium text-white mb-3">
                      {project.title}
                    </h1>
                    <p className="leading-relaxed">{project.description}</p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
