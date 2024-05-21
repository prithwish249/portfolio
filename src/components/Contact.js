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
    <section id="contact" className="relative">
      <div className="container px-7 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-full md:w-full bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <div className="bg-gray-800 text-2xs text-justify relative flex flex-col py-6 rounded shadow-md">
            <div className="px-6">
              <h1 className="title-font font-mono text-purple-500 tracking-widest text-2xl">
                Contact Information
              </h1>
              <p className="font-mono text-green-500 mt-1">
                <h1 className="text-yellow-500">ADDRESS:</h1>
                Beurgram,Irhpala-721222 <br />
                Paschim Medinipur,West Bengal
                <br />
                <h1 className="text-yellow-500">GMAIL:</h1>{" "}
                prithwish9196@gmail.com <br />
                <h1 className="text-yellow-500">PHONE:</h1> (+91)-7029041914
              </p>
              <div className="flex mt-4">
                <a
                  href="https://www.linkedin.com/in/prithwish-adhikari-432417247/"
                  className="ml-4 inline-flex text-white bg-green-700 border-0 py-2 px-6 focus:outline-none hover:bg-green-500 rounded text-lg"
                >
                  <b>LinkedIn</b>
                </a>
                <a
                  href="https://github.com/prithwish249"
                  className="ml-4 inline-flex text-white bg-blue-700 border-0 py-2 px-6 focus:outline-none hover:bg-blue-500 rounded text-lg"
                >
                  <b>Github</b>
                </a>
              </div>
            </div>
          </div>
        </div>

        <form
          netlify
          name="contact"
          onSubmit={sendEmail}
          className="lg:w-full md:w-full flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
        >
          <h2 className="text-green-500 sm:text-4xl text-3xl mb-1 font-medium title-font">
            Hire Me
          </h2>
          <p className="font-mono  text-blue-600 leading-relaxed mb-5">
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
