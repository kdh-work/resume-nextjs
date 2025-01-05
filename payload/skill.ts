import { ISkill } from '../component/skill/ISkill';

const languages: ISkill.Skill = {
  category: 'Languages',
  items: [{ title: 'Javascript' }, { title: 'Typescript' }, { title: 'HTML/CSS' }],
};

const kernelDevelopment: ISkill.Skill = {
  category: 'Kernel Development',
  items: [
    {
      title: 'Kernel Programming',
      level: 3,
    },
    {
      title: 'GNU Debugger',
      level: 3,
    },
    {
      title: 'Memory Management',
      level: 2,
    },
    {
      title: 'System Call Interface',
      level: 2,
    },
  ],
};

const frameworksLibs: ISkill.Skill = {
  category: 'Frameworks & Libraries',
  items: [
    { title: 'Vue.js' },
    { title: 'Pinia' },
    { title: 'Tanstack-Query' },
    { title: 'Echart.js' },
    { title: 'Ant Design' },
    { title: 'PrimeVue' },
  ],
};

const toolIdes: ISkill.Skill = {
  category: 'Tools & IDES',
  items: [
    { title: 'Git' },
    { title: 'GitLab' },
    { title: 'GitHub' },
    { title: 'SVN' },
    { title: 'Jira' },
    { title: 'BitBucket' },
    { title: 'Confluence' },
    { title: 'VS Code' },
    { title: 'WebStorm' },
    { title: 'Eclipse' },
    { title: 'Websquare5' },
  ],
};

const misc: ISkill.Skill = {
  category: 'Misc',
  items: [{ title: 'Traditional Archery' }],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [languages, frameworksLibs, toolIdes, misc],
};

export default skill;
