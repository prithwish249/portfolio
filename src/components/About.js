import React from "react";
import { AcademicCapIcon, DocumentTextIcon } from "@heroicons/react/solid";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1
            className="title-font sm:text-4xl text-5xl mb-2 font-medium text-green-500"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Hi, I'm Prithwish .
          </h1>
          <span className="text-mono text-base">
            Full Stack developer | Freelancer | ML enthusiast
          </span>
          <h2 className="title-font sm:text-3xl text-4xl mb-4 font-medium text-blue-400">
            Love to Learn new technologies.
          </h2>
          <p className="font-mono mb-8 leading-relaxed text-white">
            <i>
              I am an enthusiastic, self-motivated, reliable, responsible and
              hard-working person. I am a mature team worker and adaptable to
              all challenging situations. I am able to work well both in a team
              environment as well as using own initiative. I am able to work
              well under pressure and adhere to strict deadlines.
            </i>
          </p>
          <div className="flex justify-center">
            <a
              href="#certificates"
              className="ml-4 inline-flex text-white bg-green-700 border-0 py-2 px-6 focus:outline-none hover:bg-green-500 rounded text-lg"
            >
              <b>Certificates</b>
            </a>
            <a
              href="./cv.pdf"
              className="ml-4 inline-flex items-center gap-2 text-white bg-blue-800 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="white"
              >
                <path d="M14 10h5l-7 8-7-8h5v-10h4v10zm4.213-8.246l-1.213 1.599c2.984 1.732 5 4.955 5 8.647 0 5.514-4.486 10-10 10s-10-4.486-10-10c0-3.692 2.016-6.915 5-8.647l-1.213-1.599c-3.465 2.103-5.787 5.897-5.787 10.246 0 6.627 5.373 12 12 12s12-5.373 12-12c0-4.349-2.322-8.143-5.787-10.246z" />
              </svg>
              Resume
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded-2xl"
            alt="hero"
            src="./prithwish.png"
          />
        </div>
      </div>
      <div className="container mx-auto my-8 p-8 rounded-lg">
        <div className="flex justify-center mb-4">
          <AcademicCapIcon className="w-10" />
        </div>
        <h2 className="text-4xl font-mono font-medium text-green-500 mb-4 text-center">
          Education
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
                <div className="relative mt-24">
                  <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                </div>
              </div>
              <div className="mb-6 ml-8">
                <h3 className="text-xl text-blue-500 font-semibold">
                  Beurgram High School (Secondary Education) Under WBBSE
                </h3>
                <p className="text-gray-400">92.3% Passing year – 2018</p>
              </div>
              <div className="mb-6 ml-8">
                <h3 className="text-xl text-blue-500 font-semibold">
                  Irhpala Krishna Mohan Institution (Higher Secondary) Under
                  WBCHSE
                </h3>
                <p className="text-gray-400">
                  Science; 89.6% July 2019 - July 2020
                </p>
              </div>
              <div className="ml-8">
                <h3 className="text-xl text-blue-500 font-semibold">
                  College of Engineering and Management, Kolaghat
                </h3>
                <p className="text-gray-400">
                  Bachelor of Technology - Computer Science and Technology,
                  DGPA: 9.25
                </p>
                <p className="text-gray-400">July 2020 - July 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto my-8 p-8 rounded-lg">
        <div className="flex justify-center mb-4">
          <DocumentTextIcon className="w-10" />
        </div>
        <h2 className="text-4xl font-mono font-medium text-green-500 mb-4 text-center">
          Research Work
        </h2>
        <div className="flex justify-center">
          <div className="w-full max-w-md">
            <div className="border-l-2 border-gray-600 pl-4 relative">
              <div className="absolute h-full top-0 left-0 transform -translate-x-2">
                <div className="relative">
                  <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                </div>
              </div>
              <div className="ml-8">
                <h3 className="text-xl text-blue-500 font-semibold">
                  Research paper published in IEEE Journal
                </h3>
                <p className="text-white">
                  Co-author of 'Preparing and Annotating a Set of Categorized
                  Data from the Online Newspaper Archives for Different Research
                  Works in Computational Linguistics.'
                </p>
                <p className="text-gray-400">
                  <a
                    href="https://ieeexplore.ieee.org/document/10468951"
                    className="text-blue-500 pt-3 ml-2"
                  >
                    [Read more ...]
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
