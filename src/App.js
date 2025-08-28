import NavBar from './components/NavBar';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom';
import hero from './constants/hero';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-gray-100 dark:from-black-200 dark:via-black-100 dark:to-black-200 flex flex-col">
        <NavBar />
        <main className="pt-24 pb-10 flex-1">
          {/* Hero Card - split left/right, profile image, buttons, online status */}
          <section id="info" className="container mx-auto mb-5">
            <div className="bg-white dark:bg-black-100 rounded-2xl shadow-lg border border-gray-100 dark:border-black-200 p-0 md:p-0 flex flex-col md:flex-row items-stretch">
              {/* Left */}
              <div className="flex-1 flex flex-col justify-center p-8 md:p-10">
                <h3 className="text-lg font-semibold text-blue-600 dark:text-accent mb-2">
                  {hero.title}
                </h3>
                <div className="info">
                  <h1 className="text-4xl sm:text-5xl font-extrabold mb-2 text-gray-900 dark:text-white-100">
                    {hero.name}
                  </h1>
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                    {hero.tdlr}
                  </p>
                  <div className="flex gap-4">
                    <button className="hire bg-blue-600 dark:bg-accent text-white px-5 py-2 rounded-lg font-semibold flex items-center gap-2 hover:bg-blue-700 dark:hover:bg-cyan-400 transition">
                      Hire me
                      <span className="inline-block w-4 h-4 bg-white/30 rounded-full flex items-center justify-center">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 4v16m8-8H4"
                          />
                        </svg>
                      </span>
                    </button>
                    <button className="email bg-gray-100 dark:bg-black-200 text-gray-700 dark:text-white-100 px-5 py-2 rounded-lg font-semibold flex items-center gap-2 hover:bg-gray-200 dark:hover:bg-black-100 transition">
                      Copy Email
                      <span className="inline-block w-4 h-4 bg-white/30 rounded-full flex items-center justify-center">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <rect x="9" y="9" width="13" height="13" rx="2" />
                          <rect x="3" y="3" width="13" height="13" rx="2" />
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              {/* Right */}
              <div className="flex flex-col items-center justify-center p-8 md:p-10 gap-4 md:border-l border-gray-100 bg-gray-50 rounded-b-2xl md:rounded-b-none md:rounded-r-2xl">
                <button
                  type="button"
                  className="online flex items-center gap-2 text-green-600 font-medium mb-2 cursor-default"
                  tabIndex={-1}
                  aria-disabled="true"
                >
                  <span className="inline-block w-3 h-3 bg-green-500 rounded-full"></span>
                  Available For Job
                </button>
                {/* Profile image placeholder */}
                <div className="w-32 h-32 rounded-full bg-gray-200 border-4 border-white shadow-inner flex items-center justify-center overflow-hidden">
                  {/* Replace with <img src={profileImg} ... /> when available */}
                  <span className="text-gray-400 text-4xl">👤</span>
                </div>
              </div>
            </div>
          </section>
          {/* About & Experience 2-column card layout */}
          <section className="container mx-auto mb-5 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="order-2 md:order-1">
              <div className="bg-white dark:bg-black-100 rounded-2xl shadow-lg border border-gray-100 dark:border-black-200 p-4 h-full flex flex-col">
                <Experience />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="bg-white dark:bg-black-100 rounded-2xl shadow-lg border border-gray-100 dark:border-black-200 p-4 h-full flex flex-col">
                <About />
              </div>
            </div>
          </section>
          {/* Projects Section */}
          <section className="container mx-auto mb-5">
            <Projects />
          </section>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
