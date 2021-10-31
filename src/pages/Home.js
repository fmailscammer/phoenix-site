import React from "react";
import cosmetics from "../img/Cosmetics.png";

const Home = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative">
        <div className="container flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:mt-28">
          {/* Content */}
          <div className="flex flex-1 flex-col items-center lg:items-start">
            <h2 className="text-accent-light text-3xl md:text-4xl lg:text-5xl text-center lg:text-left mb-6">
              Cool Minecraft Capes
            </h2>
            <p className="text-gray-700 text-lg text-center lg:text-left mb-6">
              A wide variety of minecraft capes and cosmetics, including free,
              earned, and paid cosmetics. Try it today.
            </p>
            <div className="flex justify-center flex-wrap gap-6">
              <button className="btn btn-blue">Download Installer</button>
              <button className="btn btn-white">Manual Installation</button>
            </div>
          </div>
          {/* Image */}
          <div className="flex flex-1 justify-center mb-10 md:mb-16 lg:mb-0 z-10">
            <img
              className="w-5/6 h-5/6 top-10 sm:w-3/4 sm:h-3/4 md:w-full md:h-full rounded-md shadow-md"
              alt=""
              src={cosmetics}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
