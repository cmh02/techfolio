import projects from '../constants/projects';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white/80 dark:bg-black-100/80">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white-100 mb-4 text-center">
          Projects
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-10 text-center">
          A showcase of some of my favorite projects and what I’ve built
          recently.
        </p>
        <div className="flex flex-col md:flex-row gap-10">
          {/* Left column: vertical list of project roles/titles */}
          <div className="md:w-1/3 w-full flex flex-col gap-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center gap-2">
              <span className="inline-block w-3 h-3 bg-blue-500 rounded-full"></span>
              Recent Works
            </h3>
            <div className="flex flex-col gap-4">
              {projects.map((project, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className="flex-1">
                    <div
                      className={`font-semibold text-base ${idx === 0 ? 'text-blue-600 dark:text-accent' : 'text-gray-900 dark:text-white-100'}`}
                    >
                      {project.name}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      2024 - Present
                    </div>
                  </div>
                  <div className="text-xs text-gray-400">
                    {project.tags[0]?.name || ''}
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Right column: project detail cards */}
          <div className="md:w-2/3 w-full grid gap-8 sm:grid-cols-2">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-black-200 rounded-xl shadow hover:shadow-lg transition-shadow border border-gray-100 dark:border-black-200 flex flex-col h-full"
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-40 object-cover rounded-t-xl"
                />
                <div className="p-5 flex-1 flex flex-col">
                  <a
                    href={project.source_code_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-bold text-blue-600 hover:underline mb-2"
                  >
                    {project.name}
                  </a>
                  <p className="text-gray-700 text-sm mb-4 flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 rounded bg-blue-50 text-blue-600 font-medium"
                      >
                        {tag.name}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.source_code_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-auto text-blue-600 hover:underline font-medium"
                  >
                    View Code
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
