import {
  SiAngular,
  SiBootstrap,
  SiCss3,
  SiExpress,
  SiFirebase,
  SiFramer,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiJenkins,
  SiMicrosoftsqlserver,
  SiMongodb,
  SiMongoose,
  SiMui,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiReactrouter,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';
import { TbApi } from 'react-icons/tb';
import { FaInfinity } from 'react-icons/fa';

// `color: null` marks a black/white brand mark that should inherit the surrounding text colour.
export const TECH = {
  react: { name: 'React.js', short: 'React', icon: SiReact, color: '#61DAFB' },
  javascript: { name: 'JavaScript', icon: SiJavascript, color: '#EBC800' },
  html: { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
  css: { name: 'CSS3', icon: SiCss3, color: '#2D8CE8' },
  redux: { name: 'Redux Toolkit', icon: SiRedux, color: '#9B6FE0' },
  router: { name: 'React Router', icon: SiReactrouter, color: '#CA4245' },
  framer: { name: 'Framer Motion', icon: SiFramer, color: '#D946EF' },
  tailwind: { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
  bootstrap: { name: 'Bootstrap', icon: SiBootstrap, color: '#9D7DE0' },
  mui: { name: 'Material UI', icon: SiMui, color: '#007FFF' },
  node: { name: 'Node.js', short: 'Node', icon: SiNodedotjs, color: '#5FA04E' },
  express: { name: 'Express.js', short: 'Express', icon: SiExpress, color: null },
  rest: { name: 'REST APIs', icon: TbApi, color: '#38BDF8' },
  mongodb: { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  mongoose: { name: 'Mongoose', icon: SiMongoose, color: '#C94A4A' },
  mssql: { name: 'MSSQL / SQL Server', icon: SiMicrosoftsqlserver, color: '#CC2927' },
  git: { name: 'Git', icon: SiGit, color: '#F05032' },
  github: { name: 'GitHub', icon: SiGithub, color: null },
  firebase: { name: 'Firebase', icon: SiFirebase, color: '#FFA000' },
  jenkins: { name: 'Jenkins', icon: SiJenkins, color: '#D24939' },
  cicd: { name: 'CI/CD', icon: FaInfinity, color: '#34D399' },
  python: { name: 'Python', icon: SiPython, color: '#3776AB' },
  nextjs: { name: 'Next.js', icon: SiNextdotjs, color: null },
  angular: { name: 'Angular', icon: SiAngular, color: '#DD0031' },
  typescript: { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
};

const NEUTRAL_ACCENT = '#94A3B8';

// Colour used for glows and borders; neutral for the monochrome marks.
export const accentOf = (id) => TECH[id]?.color || NEUTRAL_ACCENT;
