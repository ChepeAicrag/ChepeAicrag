import { useState } from "react";

interface Body {
  "form-name": string;
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [name, _] = useState("");
  const [email, __] = useState("");
  const [message, ___] = useState("");

  function encode(data: Body) {
    return Object.keys(data)
      .map(
        (key) =>
          encodeURIComponent(key) +
          "=" +
          encodeURIComponent(data[key as keyof Body])
      )
      .join("&");
  }

  function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => alert("Message sent!"))
      .catch((error) => alert(error));
  }

  return (
    <>
      <section id="contact" className="relative">
        <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
          <form
            // netlify
            name="contact"
            className="md:w-3/4 flex flex-col md:mx-auto w-full md:py-8 mt-8 md:mt-0"
            onSubmit={handleSubmit}
          >
            <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
              ¡Contactame!
            </h2>
            <p className="leading-relaxed mb-5">
              Puedes enviarme un mensaje y me pondré en contacto contigo lo más
              antes posible 🤓.
            </p>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-400">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-400"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-400"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button
              type="submit"
              className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Send
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
