import { github } from '../assets';
import socials from '../constants/socials';

const iconMap = {
  github: github,
  instagram: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/instagram.svg',
  linkedin: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linkedin.svg',
};

const Footer = () => {
  return (
    <footer className="w-full py-8 border-t mt-16 bg-primary border-secondary">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 gap-4">
        <a
          href="#"
          className="font-bold text-lg hover:underline mb-2 md:mb-0 text-on-primary"
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
              className="flex items-center gap-2 hover:underline text-foreground"
            >
              <img
                src={iconMap[social.icon]}
                alt={social.name}
                className="w-6 h-6"
              />
              <span className="hidden md:inline">{social.name}</span>
            </a>
          ))}
        </div>
        <a
          href="#"
          className="online flex items-center gap-2 font-medium text-green-600"
        >
          <span className="inline-block w-3 h-3 rounded-full bg-green-500"></span>
          Available For Job
        </a>
      </div>
    </footer>
  );
};

export default Footer;
