import Banner from '../assets/banner-stack.png'

const Hero = () => {
  return (
    <section className="bg-white py-16">
      {" "}
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-12 px-6 md:flex-row">
        {" "}
        {/* Left Side */}{" "}
        <div className="flex-1 max-w-2xl">
          {" "}
          <h1 className="whitespace-nowrap text-4xl font-black leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            {" "}
            Build Your Ideal <br />{" "}
           <span className="gradient-text">
            Development Stack
          </span>{" "}
          </h1>{" "}
          <p className="mt-6 text-base leading-relaxed text-gray-600 sm:text-lg">
            {" "}
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.{" "}
          </p>{" "}
          {/* Buttons */}{" "}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            {" "}
            <button className="gradient-primary rounded-full px-8 py-3.5 font-semibold text-white shadow-md transition-opacity hover:opacity-90">
              Explore Technologies
            </button>{" "}
            <button className="rounded-full border border-gray-300 px-8 py-3.5 font-semibold text-gray-700 transition-colors hover:bg-gray-50">
              {" "}
              Learn More{" "}
            </button>{" "}
          </div>{" "}
        </div>{" "}
        {/* Right Side */}{" "}
        <div className="flex flex-1 justify-center">
          {" "}
          <img
            src={Banner}
            alt="Development Stack Banner"
            className="w-full max-w-md object-contain drop-shadow-xl lg:max-w-lg"
          />{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
};

export default Hero;
