import Section from './ui/Section';
import Container from './ui/Container';
import SectionHeading from './ui/SectionHeading';
import Badge from './ui/Badge';
import { skillGroups } from '../data/skills';

const Skills = () => {
  return (
    <Section id="skills" className="bg-ink-900">
      <Container>
        <SectionHeading
          eyebrow="02 — Skills"
          title="Skills"
          subtitle="I enjoy diving into and learning new things. Here's a list of technologies I've worked with."
        />

        <div className="reveal space-y-10">
          {skillGroups.map(({ title, skills }) => (
            <div key={title}>
              <h3 className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-mist-500">
                <span aria-hidden="true" className="h-px w-8 bg-accent-400/60" />
                {title}
              </h3>

              <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                {skills.map(({ name, icon }) => (
                  <li key={name}>
                    <Badge icon={icon} label={name} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Skills;
