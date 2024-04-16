export default function About() {
  return (
    <>
      <section id="about">
        <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              Hola, soy Ángel García 👋
              <br className="hidden lg:inline-block " />
              <br className="hidden sm:flex max-sm:flex" />
              <br className="hidden max-sm:flex" />
              Desarrollador Backend & Mobile
            </h1>
            <p className="mb-8 leading-relaxed">
              ¡Hola! Soy un apasionado desarrollador con experiencia en el mundo
              del desarrollo de software. Mi enfoque principal se centra en la
              creación de aplicaciones móviles utilizando Flutter y el
              desarrollo de sólidas API backend con Node.js.
            </p>
            <div className="flex justify-center">
              <a
                href="#contact"
                className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
              >
                Contacto
              </a>
            </div>
          </div>
          <div className="lg:max-w-lg md:w-1/2 lg:w-1/3 xl:w-1/2 2xl:w-1/3">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="./assets/Developer.gif"
            />
          </div>
        </div>
      </section>
    </>
  );
}
