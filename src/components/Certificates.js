import React from "react";
import { TerminalIcon, DocumentIcon } from "@heroicons/react/solid";
import { certificates } from "../data"; // Import your certificates data

export default function Certificates() {
  return (
    <section id="certificates">
      <div className="container px-5 py-10 mx-auto text-center">
        <DocumentIcon className="w-10 inline-block mb-4" />
        <h1 className="font-mono sm:text-4xl text-3xl font-medium title-font text-green-500 mb-12">
          My Certificates
        </h1>
        <div className="flex flex-wrap m-4">
          {certificates.map((certificate) => (
            <div className="p-4 md:w-1/2 w-full" key={certificate.id}>
              <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded border-4 border-blue-500">
                <h2 className="text-lg font-medium text-white mb-4">{certificate.name}</h2>
                <TerminalIcon className="block w-8 text-gray-500 mb-4" />
                <img
                  alt="certificate"
                  src={certificate.image}
                  className="w-24 mx-auto mb-4"
                />
                <a
                  href={certificate.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="leading-relaxed mb-6 hover:underline"
                >
                  <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 border-2 border-yellow-500 rounded-full">
                    View Certificate
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
