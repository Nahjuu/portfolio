import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import Section from './ui/Section';
import Container from './ui/Container';
import SectionHeading from './ui/SectionHeading';
import Button from './ui/Button';
import { projects } from '../data/projects';

const Works = () => {
  return (
    <Section id="work" className="bg-ink-950">
      <Container>
        <SectionHeading
          eyebrow="03 — Work"
          title="Work"
          subtitle="Check out some of my most recent work"
        />

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map(({ title, description, tags, demo, code }) => (
            <li key={title} className="reveal">
              <article className="card-surface print-links group flex h-full flex-col overflow-hidden hover:-translate-y-1 hover:border-accent-400/40 hover:shadow-glow">
                {/* Cover */}
                <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-gradient-to-br from-ink-700/70 via-ink-800 to-ink-950">
                  <div aria-hidden="true" className="absolute inset-0 bg-grid opacity-70" />
                  <h3 className="relative px-5 text-center text-2xl font-bold tracking-tight text-mist-100 sm:text-3xl">
                    {title}
                  </h3>
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-sm leading-relaxed text-mist-400">{description}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-[11px] text-mist-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex flex-wrap gap-3 pt-6">
                    {demo && (
                      <Button as="a" href={demo} variant="secondary" size="sm">
                        <FiExternalLink aria-hidden="true" />
                        Demo
                      </Button>
                    )}

                    {code && (
                      <Button
                        as="a"
                        href={code}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="secondary"
                        size="sm"
                      >
                        <FaGithub aria-hidden="true" />
                        Code
                      </Button>
                    )}
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
};

export default Works;
