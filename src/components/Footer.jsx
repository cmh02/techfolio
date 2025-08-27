import { github } from '../assets';
import socials from '../constants/socials';

const iconMap = {
  github: github,
  instagram: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/instagram.svg',
  linkedin: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linkedin.svg',
};

const Footer = () => {
  return (
    <footer className="w-full py-8 bg-white dark:bg-black-100 border-t border-gray-200 dark:border-black-200 mt-16">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 gap-4">
        <a
          href="#"
          className="font-bold text-lg text-blue-600 dark:text-accent hover:underline mb-2 md:mb-0"
        >
          My Portfolio
        </a>
        <div className="flex gap-6 items-center">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-700 dark:text-white-100 hover:text-blue-600 dark:hover:text-accent"
            >
              {iconMap[social.icon] && social.icon === 'github' ? (
                <img
                  src={iconMap[social.icon]}
                  alt={social.name}
                  className="w-6 h-6"
                />
              ) : (
                <img
                  src={iconMap[social.icon]}
                  alt={social.name}
                  className="w-6 h-6"
                />
              )}
              <span className="hidden md:inline">{social.name}</span>
            </a>
          ))}
        </div>
        <a
          href="#"
          className="online flex items-center gap-2 text-green-600 dark:text-green-400 font-medium"
        >
          <span className="inline-block w-3 h-3 bg-green-500 rounded-full"></span>
          Available For Job
        </a>
      </div>
    </footer>
  );
};

export default Footer;
