import experience_summary from '../constants/summary';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white/80 dark:bg-black-100/80">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white-100 mb-4">
          About Me
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
          {/* You can replace this with data from your constants/about.js if desired */}
          I’m a passionate software engineer focused on building efficient,
          maintainable applications. I love solving problems and making
          developers’ lives easier.
        </p>
        {/* Add more details or skills here as needed */}
      </div>
      <div className="p-4 bg-gray-50 dark:bg-black-200 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-2">
        {experience_summary.map((exp, idx) => (
          <div key={idx} className="mb-2">
            <div className="bg-white dark:bg-black-100 rounded-lg shadow p-4 border border-gray-100 dark:border-black-200 h-full">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white-100">
                  {exp.title}
                </h3>
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
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
