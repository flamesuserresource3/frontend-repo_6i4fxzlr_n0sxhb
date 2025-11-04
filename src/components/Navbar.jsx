import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Features', href: '#features' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 dark:bg-neutral-900/70 border-b border-black/5 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2 font-semibold tracking-tight text-xl">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-tr from-indigo-500 via-sky-500 to-emerald-400 text-white">FB</span>
            <span className="hidden sm:inline">Flames Blue</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-neutral-700 dark:text-neutral-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="md:hidden">
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex items-center justify-center rounded-md p-2 text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="grid gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-2 text-neutral-800 dark:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
