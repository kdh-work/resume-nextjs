import { ISkill } from '../component/skill/ISkill';

const languages: ISkill.Skill = {
  category: 'Languages',
  items: [{ title: 'Javascript' }, { title: 'Typescript' }, { title: 'HTML/CSS' }],
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

const skill: ISkill.Payload = {
  disable: false,
  skills: [languages, frameworksLibs, toolIdes],
};

export default skill;
