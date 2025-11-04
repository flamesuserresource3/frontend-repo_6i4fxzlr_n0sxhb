import { Rocket, Star, Shield, Zap } from 'lucide-react';

const features = [
  {
    title: 'Blazing Fast',
    description: 'Vite-powered dev server with instant HMR and zero config hassles.',
    Icon: Zap,
    color: 'from-amber-500 to-orange-500',
  },
  {
    title: 'Beautiful by Default',
    description: 'Tailwind utilities and polished components help you ship stunning UIs.',
    Icon: Star,
    color: 'from-indigo-500 to-sky-500',
  },
  {
    title: 'Secure & Robust',
    description: 'Best-practice patterns ensure confidence from prototype to production.',
    Icon: Shield,
    color: 'from-emerald-500 to-teal-500',
  },
  {
    title: 'Launch Ready',
    description: 'Build once and deploy anywhere. Start strong with sensible defaults.',
    Icon: Rocket,
    color: 'from-fuchsia-500 to-pink-500',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="pointer-events-none absolute inset-0 opacity-[0.15]">
        <div className="absolute -left-16 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-gradient-to-br from-indigo-500 to-emerald-400 blur-3xl" />
        <div className="absolute -right-20 top-10 h-72 w-72 rounded-full bg-gradient-to-br from-sky-500 to-fuchsia-500 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Everything you need to shine</h2>
          <p className="mt-4 text-neutral-600 dark:text-neutral-300">
            Modern tooling, elegant defaults, and thoughtful UX so you can focus on your idea.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ title, description, Icon, color }) => (
            <div
              key={title}
              className="group rounded-2xl border border-black/5 dark:border-white/10 bg-white/70 dark:bg-neutral-900/60 backdrop-blur p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${color} text-white shadow-md`}>
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
                {description}
              </p>
              <div className="mt-4 h-px bg-gradient-to-r from-transparent via-black/10 dark:via-white/10 to-transparent" />
              <a href="#contact" className="mt-4 inline-flex items-center text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:underline">
                Learn more →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
