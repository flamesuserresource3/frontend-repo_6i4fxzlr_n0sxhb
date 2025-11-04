export default function Footer() {
  return (
    <footer id="contact" className="relative mt-20 border-t border-black/5 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-tr from-indigo-500 via-sky-500 to-emerald-400 text-white font-semibold">FB</span>
              <span className="font-semibold">Flames Blue</span>
            </div>
            <p className="mt-4 max-w-md text-sm text-neutral-600 dark:text-neutral-300">
              Crafted with care to help you create delightful experiences on the web. Powered by a modern stack and great developer ergonomics.
            </p>
          </div>
          <div className="md:justify-self-end">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="rounded-xl border border-black/5 dark:border-white/10 bg-white/70 dark:bg-neutral-900/60 backdrop-blur p-4 max-w-md"
            >
              <label htmlFor="email" className="block text-sm font-medium">Stay in the loop</label>
              <div className="mt-2 flex gap-2">
                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="flex-1 rounded-md border border-black/10 dark:border-white/10 bg-white dark:bg-neutral-950 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-md bg-indigo-600 text-white px-4 py-2 text-sm font-medium shadow hover:bg-indigo-500"
                >
                  Subscribe
                </button>
              </div>
              <p className="mt-2 text-xs text-neutral-500">No spam. Unsubscribe anytime.</p>
            </form>
          </div>
        </div>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} Flames Blue. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#privacy" className="hover:text-neutral-700 dark:hover:text-neutral-300">Privacy</a>
            <a href="#terms" className="hover:text-neutral-700 dark:hover:text-neutral-300">Terms</a>
            <a href="#contact" className="hover:text-neutral-700 dark:hover:text-neutral-300">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
