import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  python,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  flask,
  git,
  expo,
  sql,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  flatiron,
  slohi,
  Omnium,
  microverse,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'UI/UX Design',
    icon: ux,
  },
  
];

const technologies = [
  {
    name: 'JavaScript',
    icon: javascript,
    
  },
  {
    name: 'React JS/ Native',
    icon: reactjs,
  },
  {
    name: 'Python',
    icon: python,

  },
  {
    name: 'Flask',
    icon: flask,
  },
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
 
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'expo',
    icon: expo,
  },
  {
    name: 'sql',
    icon: sql,
  },
];

const experiences = [
  {
    title: 'Flatiron School Graduate',
    company_name: 'Flatiron School',
    icon: flatiron,
    iconBg: '#333333',
    date: 'Jan 2023 - May 2023',
  },
  {
    title: 'Manager',
    company_name: 'SloHi Coffee Company',
    icon: slohi,
    iconBg: '#333333',
    date: 'Jul 2020 - Jan 2023',
  },
  {
    title: 'Owner/Co-Founder',
    company_name: 'Omnium',
    icon: Omnium,
    iconBg: '#333333',
    date: 'Oct 2018 - Jul 2020',
  },
  {
    title: 'Manager',
    company_name: 'Avant Bicycle and Cafe',
    // icon: space,
    iconBg: '#333333',
    date: 'Apr 2017 - Sept 2018',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Yeasty Bois Pizza Ranker',
    description: 'Pizza ranking application that allows the user to add their own pizza restaurant and leave comments and likes. ',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: komikult,
    repo: 'https://github.com/GageHarmon/Yeasty-Bois-Pizza-Portal',
    
  },
  {
    id: 'project-2',
    name: 'Kids Meals',
    description:
      'Initial version of Prepp that allows users to create and store meals in a local database',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: leaderboard,
    repo: 'https://github.com/vargasmichael/Kids-Meals',
    
  },
  {
    id: 'project-3',
    name: 'Prepp',
    description: 'A full-stack meal prepping app that allows users to create and add meals to a day in their meal plan..',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: math,
    repo: 'https://github.com/vargasmichael/prepp',
   
  },
 
];

export { services, technologies, experiences, projects };
