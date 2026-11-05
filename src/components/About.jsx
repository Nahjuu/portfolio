import Section from './ui/Section';
import Container from './ui/Container';
import SectionHeading from './ui/SectionHeading';

const facts = [
  { label: 'Location', value: 'Uruguay' },
  { label: 'Languages', value: 'Spanish (native) · English (C1/C2)' },
  { label: 'Focus', value: 'Full-Stack web applications' },
  { label: 'Status', value: 'Open to opportunities' },
];

const About = () => {
  return (
    <Section id="about" className="bg-ink-950">
      <Container>
        <SectionHeading
          eyebrow="01 — About"
          title="Hi. I'm Nahuel, nice to meet you."
          subtitle="Please take a look around."
        />

        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-14">
          <div className="space-y-5 text-base leading-relaxed text-mist-400 sm:text-lg">
            <p>
              I'm a Junior Full-Stack Developer focused on building practical web applications and
              growing as a software engineer.
            </p>
            <p>
              I work primarily with JavaScript, React, Node.js, Express, PostgreSQL, and REST APIs,
              with hands-on experience integrating third-party services and AI APIs into
              applications.
            </p>
          </div>

          <div className="card-surface p-6 sm:p-7" data-print="block">
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-accent-400">
              Quick facts
            </h3>

            <dl className="mt-5 space-y-4">
              {facts.map(({ label, value }) => (
                <div key={label} className="flex flex-col gap-0.5 border-l border-accent-400/30 pl-4">
                  <dt className="font-mono text-xs uppercase tracking-wider text-mist-500">
                    {label}
                  </dt>
                  <dd className="text-sm font-medium text-mist-100">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default About;
