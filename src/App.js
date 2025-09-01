import NavBar from './components/NavBar';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom';
import hero from './constants/hero';
import personal from './assets/personal.jpg';
import { useState } from 'react';

function App() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(hero.email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-surface-container flex flex-col">
        <NavBar />
        <main className="pt-24 pb-10 flex-1">
          {/* Hero Card - split left/right, profile image, buttons, online status */}
          <section id="info" className="container mx-auto mb-5">
            <div className="bg-surface rounded-2xl shadow-lg border border-outline p-0 md:p-0 flex flex-col md:flex-row items-stretch">
              {/* Left */}
              <div className="flex-1 flex flex-col justify-center p-8 md:p-10">
                <h3 className="text-lg font-semibold text-primary mb-2">
                  {hero.title}
                </h3>
                <div className="info">
                  <h1 className="text-4xl sm:text-5xl font-extrabold mb-2 text-tertiary">
                    {hero.name}
                  </h1>
                  <p className="text-lg text-on-surface-variant mb-6">
                    {hero.tdlr}
                  </p>
                  <div className="flex gap-4">
                    <a
                      href="/resume.pdf"
                      download
                      className="hire bg-primary text-on-primary px-5 py-2 rounded-lg font-semibold flex items-center gap-2 hover:bg-primary/80 transition"
                      aria-label="Download Resume PDF"
                    >
                      Resume
                      <span className="inline-block w-4 h-4 bg-on-primary/30 rounded-full flex items-center justify-center">
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
                    </a>
                    <button
                      className="email bg-secondary text-on-secondary px-5 py-2 rounded-lg font-semibold flex items-center gap-2 hover:bg-secondary/80 transition"
                      aria-label="Copy Email to Clipboard"
                      onClick={handleCopyEmail}
                    >
                      {copied ? (
                        <>
                          Copied!
                          <span className="inline-block w-4 h-4 rounded-full flex items-center justify-center">
                            <svg
                              className="w-4 h-4 text-green-600"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </span>
                        </>
                      ) : (
                        <>
                          Copy Email
                          <span className="inline-block w-4 h-4 bg-on-secondary/30 rounded-full flex items-center justify-center">
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
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
              {/* Right */}
              <div className="flex flex-col items-center justify-center p-8 md:p-10 gap-4 md:border-l border-outline bg-surface-variant rounded-b-2xl md:rounded-b-none md:rounded-r-2xl">
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
                <div className="w-32 h-32 rounded-full bg-on-surface/10 border-4 border-surface shadow-inner flex items-center justify-center overflow-hidden">
                  <img
                    src={personal}
                    alt="profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </section>
          {/* About & Experience 2-column card layout */}
          <section className="container mx-auto mb-5 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="order-2 md:order-1">
              <div className="bg-surface rounded-2xl shadow-lg border border-outline p-4 h-full flex flex-col">
                <Experience />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="bg-surface rounded-2xl shadow-lg border border-outline p-4 h-full flex flex-col">
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
