const Hero = () => {
  return (
    <section className="container mx-auto grid items-center gap-10 px-6 py-14 md:grid-cols-2 md:px-10 md:py-24">
      <div>
        <h1 className="text-center text-5xl font-extrabold leading-tight text-slate-900 md:text-left md:text-6xl">
          Build Your Ideal
          <span className="block brand-text">
            Development Stack
          </span>
        </h1>

        <p className="mt-6 max-w-lg text-center text-base leading-7 text-slate-500 md:text-left md:text-lg">
          Explore frontend, backend, database, and tooling options,
          compare them side by side, and put together the stack that
          fits your next project.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
          <button className="brand-gradient rounded-md px-6 py-4 text-base font-semibold text-white transition hover:scale-105">
            Explore Technologies
          </button>

          <button className="rounded-md border border-gray-300 px-6 py-4 text-base font-semibold text-slate-700 transition hover:border-pink-500 hover:text-pink-500">
            Learn More
          </button>
        </div>
      </div>

      <div className="flex justify-center">
        <img
          src="./banner-stack.png"
          alt="Development stack illustration"
          className="w-full max-w-lg"
          onError={(event: React.SyntheticEvent<HTMLImageElement>) => {
            event.currentTarget.style.display = "none";
          }}
        />
      </div>
    </section>
  );
};

export default Hero;