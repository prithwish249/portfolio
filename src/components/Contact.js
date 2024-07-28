import React from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_yyi2cxg",
        "template_hs0bo2k",
        e.target,
        "B_wTZe0kI2Q9rYpZw"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section id="contact" className="relative ">
      <div className="container  px-7 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-1/2 md:w-full  rounded-lg overflow-hidden sm:mr-10 p-10  backdrop-filter backdrop-blur-sm bg-opacity-0 flex items-center justify-center relative border border-gray-700">
          <div className="text-2xs text-justify relative flex flex-col py-6 rounded-md shadow-md w-full">
            <div className="px-6">
              <h1 className="title-font font-sans pb-4 text-purple-500 sm:text-4xl text-3xl mb-1 font-medium title-font">
                Contact Information :
              </h1>
              <p className="font-mono text-green-500 mt-1">
                <span className="text-yellow-500 text-lg">ADDRESS:</span>
                <span className="text-lg">Kolkata-700006, West Bengal</span>
                <br />
                <span className="text-yellow-500 text-lg">GMAIL:</span>
                <span className="text-lg">prithwish9196@gmail.com</span>
                <br />
                <span className="text-yellow-500 text-lg">PHONE:</span>
                <span className="text-lg">(+91)-7029041914</span>
              </p>
              <div className="flex mt-4">
                <a
                  href="https://www.linkedin.com/in/prithwish-adhikari-432417247/"
                  className="ml-4 inline-flex items-center py-2 px-6 focus:outline-none hover:border-blue-600 rounded-md bg-gray-700 border"
                >
                  <svg
                    className="h-8 w-8 fill-current text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.787-1.75-1.75s.784-1.75 1.75-1.75 1.75.787 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.359c0-3.666-4-3.376-4 0v5.359h-3v-10h3v1.798c1.396-2.586 7-2.777 7 2.475v5.727z" />
                  </svg>
                </a>
                <a
                  href="https://github.com/prithwish249"
                  className="ml-4 inline-flex items-center py-2 px-6 focus:outline-none hover:border-blue-600 rounded-md bg-gray-700 border"
                >
                  <svg
                    className="h-8 w-8 fill-current text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.168c-3.338.724-4.033-1.415-4.033-1.415-.546-1.387-1.333-1.757-1.333-1.757-1.087-.743.083-.728.083-.728 1.205.084 1.838 1.236 1.838 1.236 1.068 1.834 2.803 1.304 3.492.997.108-.774.417-1.305.762-1.605-2.665-.306-5.466-1.335-5.466-5.931 0-1.31.47-2.381 1.236-3.221-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.984-.399 3.005-.404 1.02.005 2.048.138 3.006.404 2.292-1.552 3.298-1.23 3.298-1.23.654 1.653.242 2.873.118 3.176.768.84 1.235 1.911 1.235 3.221 0 4.606-2.803 5.624-5.475 5.921.43.372.824 1.104.824 2.225v3.293c0 .322.218.694.825.577 4.765-1.585 8.2-6.084 8.2-11.385 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <form
          onSubmit={sendEmail}
          className="lg:w-1/2 md:w-full flex flex-col md:ml-auto w-full md:py-8 md:mt-0 border border-gray-700 p-10 rounded-lg"
        >
          <h2 className="text-green-500 sm:text-4xl text-3xl mb-1 font-medium title-font">
            Contact Me
          </h2>
          <p className="font-mono text-blue-600 leading-relaxed mb-5">
            Open to work with new technologies...
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-yellow-500">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="email"
              className="leading-7 text-sm text-yellow-500"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-yellow-500"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button
            type="submit"
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
