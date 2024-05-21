import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1
            className="title-font sm:text-6xl text-4xl mb-2 font-medium text-green-500"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Hi, I'm Prithwish.
          </h1>
          <h2 className="title-font sm:text-3xl text-5xl mb-4 font-medium text-blue-400">
            Love to Learn new technologies.
          </h2>
          <p className="font-mono mb-8 leading-relaxed  text-white">
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
              download="./cv.pdf"
              className="ml-4 inline-flex text-white bg-blue-800 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg"
            >
              <b>Download CV</b>
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded-full"
            alt="hero"
            src="./prithwish.jpg"
          />
        </div>
      </div>
    </section>
  );
}
