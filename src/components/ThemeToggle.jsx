import React, { useEffect, useState } from 'react';

const getInitialTheme = () => {
  if (typeof window === 'undefined') return 'light';
  const stored = localStorage.getItem('theme');
  if (stored) return stored;
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark';
  return 'light';
};

const ThemeToggle = () => {
  const [theme, setTheme] = useState(getInitialTheme());
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (theme === 'system') {
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      document.documentElement.classList.toggle('dark', isDark);
      localStorage.removeItem('theme');
    } else {
      document.documentElement.classList.toggle('dark', theme === 'dark');
      localStorage.setItem('theme', theme);
    }
  }, [theme]);

  useEffect(() => {
    if (theme !== 'system') return;
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = (e) => {
      document.documentElement.classList.toggle('dark', e.matches);
    };
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, [theme]);

  return (
    <div className="relative">
      <button
        aria-label="Theme menu"
        className="flex items-center gap-2 p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
        onClick={() => setOpen((v) => !v)}
      >
        {theme === 'light' && (
          <span role="img" aria-label="Light">
            🌞
          </span>
        )}
        {theme === 'dark' && (
          <span role="img" aria-label="Dark">
            �
          </span>
        )}
        {theme === 'system' && (
          <span role="img" aria-label="System">
            💻
          </span>
        )}
        <svg
          className="w-4 h-4 ml-1"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-36 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded shadow-lg z-50">
          <button
            className={`flex items-center w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 ${theme === 'light' ? 'font-semibold' : ''}`}
            onClick={() => {
              setTheme('light');
              setOpen(false);
            }}
          >
            <span className="mr-2">🌞</span> Light
          </button>
          <button
            className={`flex items-center w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 ${theme === 'dark' ? 'font-semibold' : ''}`}
            onClick={() => {
              setTheme('dark');
              setOpen(false);
            }}
          >
            <span className="mr-2">🌚</span> Dark
          </button>
          <button
            className={`flex items-center w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 ${theme === 'system' ? 'font-semibold' : ''}`}
            onClick={() => {
              setTheme('system');
              setOpen(false);
            }}
          >
            <span className="mr-2">💻</span> System
          </button>
        </div>
      )}
    </div>
  );
};

export default ThemeToggle;
