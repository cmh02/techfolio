import NavBar from './components/NavBar';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { BrowserRouter } from 'react-router-dom';
import HeroBackground from './components/Background/HeroBackground';
import Bottom from './components/Background/WaveBottom';
import hero from './constants/hero';

function App() {
  return (
    <BrowserRouter>
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <NavBar></NavBar>
      </div>
      <HeroBackground>
        <div className="relative z-10 flex justify-between h-screen overflow-y-hidden w-full pt-20">
          <div className="flex flex-1">
            <div className="flex-none w-full">
              <div className="h-screen overflow-y-auto divide-y">
                <div className="relative text-center max-w-2xl mx-auto">
                  <h1 className="text-5xl font-extrabold sm:text-6xl">
                    <span className="text-blue-600">{hero.name}</span>
                  </h1>
                  <p className="mt-4 text-lg sm:text-xl font-medium text-gray-700">
                    {hero.tdlr}
                  </p>
                </div>
                <About />
                <Experience />
                <Projects />
                <div className="relative z-0">
                  <Contact />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <Bottom /> */}
      </HeroBackground>
    </BrowserRouter>
  );
}

export default App;
