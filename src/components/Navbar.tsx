'use client';

import Image from 'next/image';

interface NavbarProps {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

export default function Navbar({ theme, onToggleTheme }: NavbarProps) {
  return (
    <nav className="fixed w-full top-0 left-0 z-50 border-b border-pink-100 dark:border-fuchsia-950 bg-white/85 dark:bg-[#211827]/90 backdrop-blur-md">
      <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Image
            src="/icons/icon-96x96.png"
            alt=""
            width={40}
            height={40}
            className="w-10 h-10 rounded-xl shadow-md"
          />
          <div>
            <h1 className="font-bold text-lg leading-none text-gray-900 dark:text-white">
              Salwa AI Asisten
            </h1>
            <p className="text-xs text-pink-600 dark:text-pink-300">
              Asisten AI Pribadimu
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onToggleTheme}
            className="px-3 py-1.5 rounded-md border border-pink-200 dark:border-fuchsia-900 hover:bg-pink-50 dark:hover:bg-fuchsia-950/60 transition-colors text-pink-700 dark:text-pink-200 flex items-center justify-center"
            title="Toggle theme"
            aria-label="Toggle theme"
          >
            <i className={`fas ${theme === 'dark' ? 'fa-sun' : 'fa-moon'} sm:mr-1.5`} />
            <span className="hidden sm:inline text-xs font-medium">{theme === 'dark' ? 'Light' : 'Dark'}</span>
          </button>
          <button
            className="px-3 py-1.5 rounded-md border border-pink-200 dark:border-fuchsia-900 hover:bg-pink-50 dark:hover:bg-fuchsia-950/60 transition-colors text-gray-700 dark:text-gray-300 flex items-center justify-center"
            title="API Status"
          >
            <i className="fas fa-circle text-green-500 sm:mr-1.5" style={{ fontSize: '0.65rem' }}></i>
            <span className="hidden sm:inline text-xs font-medium">Live</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
