import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Container from './ui/Container';

const Footer = () => {
  return (
    <footer data-print="hide" className="border-t border-white/5 bg-ink-950">
      <Container className="flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
        <p className="text-center text-sm text-mist-500 sm:text-left">
          © {new Date().getFullYear()} Nahuel Silva. Built with React &amp; Tailwind CSS.
        </p>

        <div className="flex items-center gap-2">
          <a
            href="https://github.com/Nahjuu"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="rounded-lg p-2 text-mist-400 transition-colors duration-300 hover:bg-white/5 hover:text-accent-300"
          >
            <FaGithub size={18} aria-hidden="true" />
          </a>

          <a
            href="https://www.linkedin.com/in/nahuel-silva-3b7799249/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="rounded-lg p-2 text-mist-400 transition-colors duration-300 hover:bg-white/5 hover:text-accent-300"
          >
            <FaLinkedin size={18} aria-hidden="true" />
          </a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
