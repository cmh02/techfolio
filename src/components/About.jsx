import experience_summary from '../constants/summary';

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4 text-tertiary">About Me</h2>
        <p className="text-lg mb-6 text-secondary">
          {/* You can replace this with data from your constants/about.js if desired */}
          I’m a passionate software engineer focused on building efficient,
          maintainable applications. I love solving problems and making
          developers’ lives easier.
        </p>
        {/* Add more details or skills here as needed */}
      </div>
      <div className="p-4 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 bg-surface-container">
        {experience_summary.map((exp, idx) => (
          <div key={idx} className="mb-4">
            <div className="rounded-xl border-2 border-tertiary bg-surface shadow-lg p-6 flex flex-col gap-2 transition-transform hover:scale-[1.015] hover:shadow-xl">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-lg font-semibold text-on-surface">
                  {exp.title}
                </h3>
              </div>
              <div className="text-sm text-on-surface-variant">
                {exp.summary}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
