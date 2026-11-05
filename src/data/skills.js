import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiDjango,
  SiPython,
  SiPostgresql,
  SiSqlite,
  SiVitest,
} from 'react-icons/si';

/**
 * Technologies shown in the Skills section, grouped by discipline.
 */
export const skillGroups = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', icon: SiHtml5 },
      { name: 'CSS', icon: SiCss },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'React', icon: SiReact },
      { name: 'TailwindCSS', icon: SiTailwindcss },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'Express', icon: SiExpress },
      { name: 'Django', icon: SiDjango },
      { name: 'Python', icon: SiPython },
    ],
  },
  {
    title: 'Data & Tools',
    skills: [
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'SQLite', icon: SiSqlite },
      { name: 'Testing', icon: SiVitest },
    ],
  },
];

export default skillGroups;
