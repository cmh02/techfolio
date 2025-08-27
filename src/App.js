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
      <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-gray-100 flex flex-col">
        <NavBar />
        <main className="pt-24 pb-10 flex-1">
          {/* Hero Card */}
          <section id="info" className="container mx-auto mb-5">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-10 flex flex-col items-center text-center">
              <h1 className="text-5xl font-extrabold sm:text-6xl mb-2">
                <span className="text-blue-600">{hero.name}</span>
              </h1>
              <h2 className="text-xl font-semibold text-gray-700 mb-4">
                {hero.title}
              </h2>
              <p className="mt-2 text-lg sm:text-xl font-medium text-gray-700">
                {hero.tdlr}
              </p>
            </div>
          </section>
          {/* About & Experience 2-column card layout */}
          <section className="container mx-auto mb-5 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="order-2 md:order-1">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 h-full flex flex-col">
                <Experience />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 h-full flex flex-col">
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
