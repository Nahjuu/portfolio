import { Link } from 'react-scroll';
import { FiArrowUpRight } from 'react-icons/fi';
import { HiArrowNarrowRight } from 'react-icons/hi';
import Container from './ui/Container';
import Button from './ui/Button';
import TerminalCard from './TerminalCard';
import { cvUrl } from '../data/profile';

const Home = () => {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-dvh w-full items-center overflow-hidden pt-20"
    >
      {/* Decorative background */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-grid" />
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-[-12rem] -z-10 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-accent-500/20 blur-[130px]"
      />

      <Container className="grid items-center gap-14 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
        <div className="flex flex-col items-start">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent-400/30 bg-accent-400/10 px-3 py-1 font-mono text-xs text-accent-300">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent-400" />
            Available for opportunities
          </span>

          <h1 className="mt-6 text-hero font-extrabold text-mist-100">
            Nahuel <span className="text-gradient">Silva</span>
          </h1>

          <p className="mt-3 font-mono text-base text-accent-300 sm:text-lg">
            Full Stack Developer
          </p>

          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-mist-400 sm:text-lg">
            Full-Stack Developer specializing in building modern web applications with React,
            Node.js, and Supabase. Combining a scientific analytical mindset with real-world
            communication to solve practical problems through clean code.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button
              as="a"
              href={cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
            >
              Check my CV
              <FiArrowUpRight
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Button>

            <Button
              as={Link}
              to="work"
              smooth
              duration={500}
              offset={-80}
              variant="secondary"
              size="lg"
            >
              View Projects
              <HiArrowNarrowRight
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Button>
          </div>
        </div>

        <TerminalCard />
      </Container>
    </section>
  );
};

export default Home;
