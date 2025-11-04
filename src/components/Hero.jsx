import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] pt-20 overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/5IJwmL0U6FjUQC5M/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/30 to-white/90 dark:from-neutral-950/70 dark:via-neutral-950/40 dark:to-neutral-950 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center py-24">
          <div className="text-center lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/10 bg-white/70 dark:bg-neutral-900/70 px-3 py-1 text-xs font-medium text-neutral-700 dark:text-neutral-300 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Live sandbox ready
            </span>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-indigo-600 via-sky-500 to-emerald-400">
              Build beautiful apps, faster
            </h1>
            <p className="mt-6 text-neutral-600 dark:text-neutral-300 text-base sm:text-lg max-w-xl mx-auto lg:mx-0">
              Design, code and ship in a single flow. Craft responsive, aesthetic interfaces powered by a modern toolkit and live preview.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <a href="#features" className="inline-flex items-center justify-center rounded-md bg-indigo-600 text-white px-5 py-3 font-medium shadow hover:bg-indigo-500 transition-colors">
                Explore features
              </a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-white dark:bg-neutral-900 border border-black/10 dark:border-white/10 text-neutral-900 dark:text-neutral-100 px-5 py-3 font-medium hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors">
                Get started
              </a>
            </div>
          </div>
          <div className="hidden lg:block" />
        </div>
      </div>
    </section>
  );
}
