import experiences from '../constants/experience';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-surface-container">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center text-on-surface">
          Experience
        </h2>
        <p className="text-lg mb-10 text-center text-on-surface-variant">
          Here’s a quick look at my professional journey and the companies I’ve
          worked with.
        </p>
        <div className="relative">
          {experiences.map((exp, idx) => (
            <div key={idx} className="mb-4">
              <div className="rounded-xl border border-outline bg-surface shadow-lg p-6 flex flex-col gap-2 transition-transform hover:scale-[1.015] hover:shadow-xl">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-2">
                  <div className="flex items-center gap-3">
                    {/* <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary text-xl font-bold shadow-sm border border-primary">
                      {exp.icon}
                    </span> */}
                    <h3 className="text-lg font-semibold text-tertiary">
                      {exp.title}
                    </h3>
                  </div>
                  <span className="font-medium text-sm px-3 py-1 rounded-full bg-primary-container text-on-primary-container border border-outline">
                    {exp.company_name}
                  </span>
                </div>
                <div className="text-sm text-on-surface-variant mb-1">
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
