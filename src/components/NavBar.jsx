import logo from '../assets/logo/svg/logo-no-background.svg';
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';
import navlinks from '../constants/navigation';
import hero from '../constants/hero';

const NavBar = () => {
  const [active, setActive] = useState('info');
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-primary w-full fixed top-0 left-0 z-30 backdrop-blur shadow transition-colors duration-300">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <a
            href="#info"
            className="flex items-end gap-2"
            onClick={() => setActive('info')}
          >
            <img src={logo} alt="logo" className="h-10" />
            <span className="font-bold text-lg text-on-primary">
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
                  className={`transition-colors duration-200 font-medium text-base px-2 py-1 rounded font-semibold 
                    ${active === nav.id ? 'bg-primary-foreground text-tertiary' : 'text-on-primary'}
                  `}
                  onClick={() => setActive(nav.id)}
                >
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
          <button
            className="md:hidden flex items-center px-2 py-1 border rounded transition-colors duration-200 bg-primary text-primary-foreground border-secondary"
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
        <div className="md:hidden bg-primary border-t border-secondary shadow px-4 py-2 transition-colors duration-300">
          <div className="flex flex-col gap-3">
            <ul className="flex flex-col gap-3">
              {navlinks.map((nav) => (
                <li key={nav.id}>
                  <a
                    href={`#${nav.id}`}
                    className={`block px-2 py-1 rounded transition-colors duration-200 font-semibold 
                      ${active === nav.id ? 'bg-primary-foreground text-primary' : 'text-primary-foreground'}
                    `}
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
