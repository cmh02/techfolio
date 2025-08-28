import logo from '../assets/logo/svg/logo-no-background.svg';
import React, { useState } from 'react';
import ThemeToggle from './ThemeToggle';
import navlinks from '../constants/navigation';
import hero from '../constants/hero';

const NavBar = () => {
  const [active, setActive] = useState('info');
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-30 bg-white/80 dark:bg-black-100/80 backdrop-blur shadow">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <a
            href="#info"
            className="flex items-end gap-2"
            onClick={() => setActive('info')}
          >
            <img src={logo} alt="logo" className="h-10 shadow" />
            <span className="font-bold text-lg text-gray-900 dark:text-white-100">
              {hero.name}
            </span>
          </a>
        </div>
        <div className="flex items-center gap-4">
          <ul className="hidden md:flex gap-8">
            {navlinks.map((nav) => (
              <li key={nav.id}>
                <a
                  href={`#${nav.id}`}
                  className={`transition-colors duration-200 font-medium text-base px-2 py-1 rounded hover:bg-blue-100 hover:text-blue-600 dark:hover:bg-black-200 dark:hover:text-accent ${active === nav.id ? 'text-blue-600 dark:text-accent font-semibold' : 'text-gray-700 dark:text-white-100'}`}
                  onClick={() => setActive(nav.id)}
                >
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
          <button
            className="md:hidden flex items-center px-2 py-1 border rounded text-gray-700 dark:text-white-100 border-gray-300 dark:border-black-200"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-black-100 border-t border-gray-200 dark:border-black-200 shadow px-4 py-2">
          <div className="flex flex-col gap-3">
            <ul className="flex flex-col gap-3">
              {navlinks.map((nav) => (
                <li key={nav.id}>
                  <a
                    href={`#${nav.id}`}
                    className={`block px-2 py-1 rounded hover:bg-blue-100 hover:text-blue-600 dark:hover:bg-black-200 dark:hover:text-accent ${active === nav.id ? 'text-blue-600 dark:text-accent font-semibold' : 'text-gray-700 dark:text-white-100'}`}
                    onClick={() => {
                      setActive(nav.id);
                      setMenuOpen(false);
                    }}
                  >
                    {nav.title}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-2">
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
