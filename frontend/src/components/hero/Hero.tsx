function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div
          className="
            absolute
            left-1/2
            top-0
            h-150
            w-150
            -translate-x-1/2
            rounded-full
            bg-blue-500/10
            blur-[140px]
          "
        />

        <div
          className="
            absolute
            -right-37.5
            top-10
            h-100
            w-100
            rounded-full
            bg-cyan-500/10
            blur-[140px]
          "
        />
        </div>
      
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 py-28 text-center lg:py-36">
        <span className="
          mb-6
          rounded-full
          border
          border-blue-500/30
          bg-blue-500/10
          px-5
          py-2
          text-sm
          font-medium
          text-blue-300
          backdrop-blur
          ">
          AI-Powered Engineering Intelligence
        </span>

        <h1 className="max-w-5xl text-5xl font-extrabold tracking-tight lg:text-7xl">
          Explore Real{" "}

          <span className="bg-linear-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
            Engineering Problems
          </span>
        </h1>

        <p className="
          mt-8
          max-w-3xl
          text-lg
          leading-8
          text-slate-300
          lg:text-xl
          ">
          Search, explore and analyze recurring developer problems mined from
          thousands of GitHub issues using semantic embeddings, clustering and
          LLM-powered engineering analysis.
        </p>
      </div>
    </section>
  );
}

export default Hero;