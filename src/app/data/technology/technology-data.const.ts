import { RecordType } from '../../common/common.type';
import { TechnologyGroupDataEnum, TechnologyKindDataEnum } from './technology-data.enum';
import { TechnologyDataModel } from './technology-data.model';

export const technologyDataConst: RecordType<TechnologyKindDataEnum, TechnologyDataModel> = {
  // Programming Languages
  javascript: {
    name: 'JavaScript',
    order: 0,
    group: TechnologyGroupDataEnum.programmingLanguage,
    devicon: 'devicon-javascript-plain',
  },
  typescript: {
    name: 'TypeScript',
    order: 1,
    group: TechnologyGroupDataEnum.programmingLanguage,
    devicon: 'devicon-typescript-plain',
  },
  // Frontend
  html: {
    name: 'HTML',
    order: 0,
    group: TechnologyGroupDataEnum.frontend,
    devicon: 'devicon-html5-plain',
  },
  css: {
    name: 'CSS',
    order: 1,
    group: TechnologyGroupDataEnum.frontend,
    devicon: 'devicon-css3-plain',
  },
  sass: {
    name: 'SASS',
    order: 2,
    group: TechnologyGroupDataEnum.frontend,
    devicon: 'devicon-sass-original',
  },
  angular: {
    name: 'Angular',
    order: 3,
    group: TechnologyGroupDataEnum.frontend,
    devicon: 'devicon-angular-plain',
  },
  rxjs: {
    name: 'RxJS',
    order: 4,
    group: TechnologyGroupDataEnum.frontend,
    devicon: 'devicon-rxjs-plain',
  },
  ngxs: {
    name: 'NGXS',
    order: 5,
    group: TechnologyGroupDataEnum.frontend,
    devicon: '',
  },
  storybook: {
    name: 'Storybook',
    order: 6,
    group: TechnologyGroupDataEnum.frontend,
    devicon: 'devicon-storybook-plain',
  },
  primeng: {
    name: 'PrimeNG',
    order: 7,
    group: TechnologyGroupDataEnum.frontend,
    devicon: 'devicon-primeng-plain',
  },
  // Backend
  nodejs: {
    name: 'Node.js',
    order: 0,
    group: TechnologyGroupDataEnum.backend,
    devicon: 'devicon-nodejs-plain',
  },
  // DevOps
  // AI
  // VCS
  git: {
    name: 'Git',
    order: 0,
    group: TechnologyGroupDataEnum.vcs,
    devicon: 'devicon-git-plain',
  },
  github: {
    name: 'GitHub',
    order: 1,
    group: TechnologyGroupDataEnum.vcs,
    devicon: 'devicon-github-original',
  },
  gitlab: {
    name: 'GitLab',
    order: 2,
    group: TechnologyGroupDataEnum.vcs,
    devicon: 'devicon-gitlab-plain',
  },
  // Package Manager
  npm: {
    name: 'npm',
    order: 0,
    group: TechnologyGroupDataEnum.packageManager,
    devicon: 'devicon-npm-original-wordmark',
  },
  pnpm: {
    name: 'pnpm',
    order: 1,
    group: TechnologyGroupDataEnum.packageManager,
    devicon: 'devicon-pnpm-plain',
  },
  // Containerization
  docker: {
    name: 'Docker',
    order: 0,
    group: TechnologyGroupDataEnum.containerization,
    devicon: 'devicon-docker-plain',
  },
  // Code Quality
  eslint: {
    name: 'ESLint',
    order: 0,
    group: TechnologyGroupDataEnum.codeQuality,
    devicon: 'devicon-eslint-plain',
  },
  prettier: {
    name: 'Prettier',
    order: 1,
    group: TechnologyGroupDataEnum.codeQuality,
    devicon: '',
  },
  stylelint: {
    name: 'Stylelint',
    order: 2,
    group: TechnologyGroupDataEnum.codeQuality,
    devicon: '',
  },
  // Build System
  nx: {
    name: 'Nx',
    order: 0,
    group: TechnologyGroupDataEnum.buildSystem,
    devicon: '',
  },
  // Test
  jest: {
    name: 'Jest',
    order: 0,
    group: TechnologyGroupDataEnum.test,
    devicon: 'devicon-jest-plain',
  },
  postman: {
    name: 'Postman',
    order: 1,
    group: TechnologyGroupDataEnum.test,
    devicon: 'devicon-postman-plain',
  },
  // Operations System
  windows: {
    name: 'Windows',
    order: 0,
    group: TechnologyGroupDataEnum.operatingSystem,
    devicon: 'devicon-windows11-original',
  },
  linux: {
    name: 'Linux',
    order: 1,
    group: TechnologyGroupDataEnum.operatingSystem,
    devicon: 'devicon-linux-plain',
  },
  // Architecture
  enterpriseArchitecture: {
    name: 'Enterprise Architecture',
    order: 0,
    group: TechnologyGroupDataEnum.architecture,
    devicon: '',
  },
  visualParadigm: {
    name: 'Visual Paradigm',
    order: 1,
    group: TechnologyGroupDataEnum.architecture,
    devicon: '',
  },
  // IDE
  webstorm: {
    name: 'WebStorm',
    order: 0,
    group: TechnologyGroupDataEnum.ide,
    devicon: 'devicon-webstorm-plain',
  },
  visualStudioCode: {
    name: 'Visual Studio Code',
    order: 1,
    group: TechnologyGroupDataEnum.ide,
    devicon: 'devicon-vscode-plain',
  },
};
