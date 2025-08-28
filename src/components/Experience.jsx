import experiences from '../constants/experience';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-black-200">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white-100 mb-4 text-center">
          Experience
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-10 text-center">
          Here’s a quick look at my professional journey and the companies I’ve
          worked with.
        </p>
        <div className="relative dark:border-black-100">
          {experiences.map((exp, idx) => (
            <div key={idx} className="mb-2">
              <div className="bg-white dark:bg-black-100 rounded-lg shadow p-5 border border-gray-100 dark:border-black-200">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white-100">
                    {exp.icon} {exp.title}
                  </h3>
                  <span className="text-blue-600 dark:text-accent font-medium mb-2">
                    {exp.company_name}
                  </span>
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {exp.date}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
