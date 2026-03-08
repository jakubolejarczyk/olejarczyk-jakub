import { RecordType } from '../../common/common.type';
import { TechnologyGroupDataEnum, TechnologyKindDataEnum } from './technology-data.enum';
import { TechnologyDataModel } from './technology-data.model';

export const technologyDataConst: RecordType<TechnologyKindDataEnum, TechnologyDataModel> = {
  // Language
  html: {
    name: 'HTML',
    order: 0,
    group: TechnologyGroupDataEnum.language,
    devicon: 'devicon-html5-plain',
  },
  css: {
    name: 'CSS',
    order: 1,
    group: TechnologyGroupDataEnum.language,
    devicon: 'devicon-css3-plain',
  },
  sass: {
    name: 'SASS',
    order: 2,
    group: TechnologyGroupDataEnum.language,
    devicon: 'devicon-sass-original',
  },
  javascript: {
    name: 'JavaScript',
    order: 3,
    group: TechnologyGroupDataEnum.language,
    devicon: 'devicon-javascript-plain',
  },
  typescript: {
    name: 'TypeScript',
    order: 4,
    group: TechnologyGroupDataEnum.language,
    devicon: 'devicon-typescript-plain',
  },
  // Framework
  angular: {
    name: 'Angular',
    order: 0,
    group: TechnologyGroupDataEnum.framework,
    devicon: 'devicon-angular-plain',
  },
  // Library
  rxjs: {
    name: 'RxJS',
    order: 0,
    group: TechnologyGroupDataEnum.library,
    devicon: 'devicon-rxjs-plain',
  },
  ngxs: {
    name: 'NGXS',
    order: 1,
    group: TechnologyGroupDataEnum.library,
    devicon: '',
  },
  primeng: {
    name: 'PrimeNG',
    order: 2,
    group: TechnologyGroupDataEnum.library,
    devicon: 'devicon-primeng-plain',
  },
  // Database
  sql: {
    name: 'SQL',
    order: 0,
    group: TechnologyGroupDataEnum.database,
    devicon: 'devicon-azuresqldatabase-plain',
  },
  microsoftSqlServer: {
    name: 'Microsoft SQL Server',
    order: 1,
    group: TechnologyGroupDataEnum.database,
    devicon: 'devicon-microsoftsqlserver-plain',
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
  // Containerization
  docker: {
    name: 'Docker',
    order: 0,
    group: TechnologyGroupDataEnum.containerization,
    devicon: 'devicon-docker-plain',
  },
  // Version Control System
  git: {
    name: 'Git',
    order: 0,
    group: TechnologyGroupDataEnum.versionControlSystem,
    devicon: 'devicon-git-plain',
  },
  github: {
    name: 'GitHub',
    order: 1,
    group: TechnologyGroupDataEnum.versionControlSystem,
    devicon: 'devicon-github-original',
  },
  gitlab: {
    name: 'GitLab',
    order: 2,
    group: TechnologyGroupDataEnum.versionControlSystem,
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
  // Runtime
  nodejs: {
    name: 'Node.js',
    order: 0,
    group: TechnologyGroupDataEnum.runtime,
    devicon: 'devicon-nodejs-plain',
  },
  // Build System
  nx: {
    name: 'Nx',
    order: 0,
    group: TechnologyGroupDataEnum.buildSystem,
    devicon: '',
  },
  // Tool
  storybook: {
    name: 'Storybook',
    order: 0,
    group: TechnologyGroupDataEnum.tool,
    devicon: 'devicon-storybook-plain',
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
  // Architecture
  visualParadigm: {
    name: 'Visual Paradigm',
    order: 0,
    group: TechnologyGroupDataEnum.architecture,
    devicon: '',
  },
  // Operating System
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
  // iPaaS
  snapLogic: {
    name: 'SnapLogic',
    order: 0,
    group: TechnologyGroupDataEnum.ipaas,
    devicon: '',
  },
  // RPA
  uiPath: {
    name: 'UIPath',
    order: 0,
    group: TechnologyGroupDataEnum.rpa,
    devicon: '',
  },
  // Document Generation
  goSmartDesigner: {
    name: 'goSmart Designer',
    order: 0,
    group: TechnologyGroupDataEnum.documentGeneration,
    devicon: '',
  },
};
