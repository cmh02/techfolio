import experiences from '../constants/experience';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
          Experience
        </h2>
        <p className="text-lg text-gray-700 mb-10 text-center">
          Here’s a quick look at my professional journey and the companies I’ve
          worked with.
        </p>
        <div className="relative border-l-2 border-blue-100 ml-4">
          {experiences.map((exp, idx) => (
            <div key={idx} className="mb-10 ml-6">
              <div className="absolute -left-4 w-8 h-8 bg-blue-100 rounded-full border-2 border-blue-300 flex items-center justify-center">
                <span className="text-blue-600 font-bold text-lg">
                  {exp.title[0]}
                </span>
              </div>
              <div className="bg-white rounded-lg shadow p-5 border border-gray-100">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {exp.title}
                  </h3>
                  <span className="text-sm text-gray-500">{exp.date}</span>
                </div>
                <div className="text-blue-600 font-medium mb-2">
                  {exp.company_name}
                </div>
                <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                  {exp.points && exp.points.length > 0 ? (
                    exp.points.map((point, i) => <li key={i}>{point}</li>)
                  ) : (
                    <li>No details provided.</li>
                  )}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
