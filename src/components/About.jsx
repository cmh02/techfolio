
const About = () => {
  return (
    <section id="about" className="py-20 bg-white/80">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">About Me</h2>
        <p className="text-lg text-gray-700 mb-6">
          {/* You can replace this with data from your constants/about.js if desired */}
          I’m a passionate software engineer focused on building efficient, maintainable applications. I love solving problems and making developers’ lives easier.
        </p>
        {/* Add more details or skills here as needed */}
      </div>
    </section>
  );
};

export default About;
