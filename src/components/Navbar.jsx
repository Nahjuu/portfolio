import { useEffect, useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-scroll';
import Container from './ui/Container';
import { cx } from '../utils/cx';

const NAV_LINKS = [
  { to: 'home', label: 'Home' },
  { to: 'about', label: 'About' },
  { to: 'skills', label: 'Skills' },
  { to: 'work', label: 'Work' },
  { to: 'contact', label: 'Contact' },
];

const linkedinUrl = 'https://www.linkedin.com/in/nahuel-silva-3b7799249/';
const githubUrl = 'https://github.com/Nahjuu';

const navItemClasses =
  'block cursor-pointer font-mono text-sm text-mist-400 transition-colors duration-300 hover:text-accent-300';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  // Prevent the page from scrolling behind the mobile overlay
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <header
        data-print="hide"
        className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-ink-950/80 backdrop-blur-md"
      >
        <Container>
          <nav className="flex h-20 items-center justify-between gap-4" aria-label="Main">
            <a href="#home" onClick={close} className="group flex items-center gap-2.5 rounded-lg">
              <span
                aria-hidden="true"
                className="h-2 w-2 rounded-full bg-accent-400 transition-transform duration-300 group-hover:scale-150"
              />
              <span className="text-lg font-semibold tracking-tight text-mist-100">
                Nahuel Silva
              </span>
            </a>

            <ul className="hidden items-center gap-8 md:flex">
              {NAV_LINKS.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    smooth
                    duration={500}
                    offset={-80}
                    spy
                    spyThrottle={100}
                    activeClass="text-accent-300"
                    className={navItemClasses}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="hidden items-center gap-2 lg:flex">
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="rounded-lg p-2 text-mist-400 transition-colors duration-300 hover:bg-white/5 hover:text-accent-300"
              >
                <FaGithub size={18} aria-hidden="true" />
              </a>
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="rounded-lg p-2 text-mist-400 transition-colors duration-300 hover:bg-white/5 hover:text-accent-300"
              >
                <FaLinkedin size={18} aria-hidden="true" />
              </a>
            </div>

            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Close menu' : 'Open menu'}
              className="rounded-lg p-2 text-mist-300 transition-colors duration-300 hover:bg-white/5 hover:text-accent-300 md:hidden"
            >
              {open ? (
                <FaTimes size={20} aria-hidden="true" />
              ) : (
                <FaBars size={20} aria-hidden="true" />
              )}
            </button>
          </nav>
        </Container>
      </header>

      {/* Overlay lives outside <header>: backdrop-filter would break fixed positioning */}
      <div
        id="mobile-menu"
        aria-hidden={!open}
        className={cx(
          'fixed inset-x-0 bottom-0 top-20 z-40 bg-ink-950/95 backdrop-blur-lg transition-all duration-300 ease-snappy md:hidden',
          open ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-2 opacity-0'
        )}
      >
        <ul className="flex h-full flex-col items-center justify-center gap-2 pb-20">
          {NAV_LINKS.map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                smooth
                duration={500}
                offset={-80}
                onClick={close}
                tabIndex={open ? 0 : -1}
                className="block cursor-pointer px-6 py-4 text-2xl font-semibold text-mist-300 transition-colors duration-300 hover:text-accent-300"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <aside
        data-print="hide"
        aria-label="Social links"
        className="fixed left-0 top-[35%] z-40 hidden flex-col lg:flex"
      >
        <ul>
          <li className="flex h-14 w-40 -translate-x-[100px] items-center rounded-r-xl bg-ink-700 transition-transform duration-300 ease-snappy hover:-translate-x-2.5">
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-between px-4 text-sm font-medium text-mist-300 transition-colors hover:text-white"
            >
              LinkedIn <FaLinkedin size={22} aria-hidden="true" />
            </a>
          </li>
          <li className="mt-1 flex h-14 w-40 -translate-x-[100px] items-center rounded-r-xl bg-ink-800 transition-transform duration-300 ease-snappy hover:-translate-x-2.5">
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-between px-4 text-sm font-medium text-mist-300 transition-colors hover:text-white"
            >
              Github <FaGithub size={22} aria-hidden="true" />
            </a>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default Navbar;
