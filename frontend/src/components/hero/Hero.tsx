function Hero() {
  return (
    <section className="mx-auto flex max-w-7xl flex-col items-center px-6 py-20 text-center">
      <span className="mb-4 rounded-full border border-slate-700 bg-slate-900 px-4 py-1 text-sm text-slate-300">
        AI-Powered Engineering Intelligence
      </span>

      <h1 className="max-w-4xl text-5xl font-bold tracking-tight text-white">
        <span className="text-blue-500"> Discover Software </span>
         Engineering Pain
      </h1>

      <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
        Search, explore and analyze recurring developer problems mined from
        thousands of GitHub issues using semantic embeddings, clustering and
        LLM-powered engineering analysis.
      </p>
    </section>
  );
}

export default Hero;