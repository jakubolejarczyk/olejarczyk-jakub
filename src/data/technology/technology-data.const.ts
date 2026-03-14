import { TechnologyGroupDataEnum, TechnologyKindDataEnum } from './technology-data.enum';
import { TechnologyDataModel, TechnologyGroupDataModel } from './technology-data.model';

export const technologyGroupDataConst: Record<TechnologyGroupDataEnum, TechnologyGroupDataModel> = {
  frontend: {
    label: 'Frontend',
    order: 0,
  },
  programmingLanguage: {
    label: 'Programming Language',
    order: 1,
  },
  framework: {
    label: 'Framework',
    order: 2,
  },
  library: {
    label: 'Library',
    order: 3,
  },
  database: {
    label: 'Database',
    order: 4,
  },
  test: {
    label: 'Test',
    order: 5,
  },
  tool: {
    label: 'Tool',
    order: 6,
  },
  operatingSystem: {
    label: 'Operating System',
    order: 7,
  },
  architecture: {
    label: 'Architecture',
    order: 8,
  },
  ipaas: {
    label: 'iPaaS',
    order: 9,
  },
  rpa: {
    label: 'RPA',
    order: 10,
  },
  documentGeneration: {
    label: 'Document Generation',
    order: 11,
  },
};

export const technologyDataConst: Record<TechnologyKindDataEnum, TechnologyDataModel> = {
  // Frontend
  html: {
    label: 'HTML',
    order: 0,
    group: TechnologyGroupDataEnum.frontend,
  },
  css: {
    label: 'CSS',
    order: 1,
    group: TechnologyGroupDataEnum.frontend,
  },
  sass: {
    label: 'SASS',
    order: 2,
    group: TechnologyGroupDataEnum.frontend,
  },
  storybook: {
    label: 'Storybook',
    order: 3,
    group: TechnologyGroupDataEnum.frontend,
  },
  // Programming Language
  javascript: {
    label: 'JavaScript',
    order: 0,
    group: TechnologyGroupDataEnum.programmingLanguage,
  },
  typescript: {
    label: 'TypeScript',
    order: 1,
    group: TechnologyGroupDataEnum.programmingLanguage,
  },
  // Framework
  angular: {
    label: 'Angular',
    order: 0,
    group: TechnologyGroupDataEnum.framework,
  },
  // Library
  ngrx: {
    label: 'NgRx',
    order: 0,
    group: TechnologyGroupDataEnum.library,
  },
  rxjs: {
    label: 'RxJS',
    order: 1,
    group: TechnologyGroupDataEnum.library,
  },
  primeng: {
    label: 'PrimeNG',
    order: 2,
    group: TechnologyGroupDataEnum.library,
  },
  // Database
  sql: {
    label: 'SQL',
    order: 0,
    group: TechnologyGroupDataEnum.database,
  },
  microsoftSqlServer: {
    label: 'Microsoft SQL Server',
    order: 1,
    group: TechnologyGroupDataEnum.database,
  },
  // Test
  jest: {
    label: 'Jest',
    order: 0,
    group: TechnologyGroupDataEnum.test,
  },
  postman: {
    label: 'Postman',
    order: 1,
    group: TechnologyGroupDataEnum.test,
  },
  soapui: {
    label: 'SoapUI',
    order: 2,
    group: TechnologyGroupDataEnum.test,
  },
  // Tool
  nodejs: {
    label: 'Node.js',
    order: 0,
    group: TechnologyGroupDataEnum.tool,
  },
  nx: {
    label: 'Nx',
    order: 1,
    group: TechnologyGroupDataEnum.tool,
  },
  docker: {
    label: 'Docker',
    order: 2,
    group: TechnologyGroupDataEnum.tool,
  },
  git: {
    label: 'Git',
    order: 3,
    group: TechnologyGroupDataEnum.tool,
  },
  github: {
    label: 'GitHub',
    order: 4,
    group: TechnologyGroupDataEnum.tool,
  },
  gitlab: {
    label: 'GitLab',
    order: 5,
    group: TechnologyGroupDataEnum.tool,
  },
  npm: {
    label: 'npm',
    order: 6,
    group: TechnologyGroupDataEnum.tool,
  },
  pnpm: {
    label: 'pnpm',
    order: 7,
    group: TechnologyGroupDataEnum.tool,
  },
  eslint: {
    label: 'ESLint',
    order: 8,
    group: TechnologyGroupDataEnum.tool,
  },
  prettier: {
    label: 'Prettier',
    order: 9,
    group: TechnologyGroupDataEnum.tool,
  },
  stylelint: {
    label: 'Stylelint',
    order: 10,
    group: TechnologyGroupDataEnum.tool,
  },
  webstorm: {
    label: 'WebStorm',
    order: 11,
    group: TechnologyGroupDataEnum.tool,
  },
  visualStudioCode: {
    label: 'Visual Studio Code',
    order: 12,
    group: TechnologyGroupDataEnum.tool,
  },
  // Operating System
  windows: {
    label: 'Windows',
    order: 0,
    group: TechnologyGroupDataEnum.operatingSystem,
  },
  linux: {
    label: 'Linux',
    order: 1,
    group: TechnologyGroupDataEnum.operatingSystem,
  },
  // Architecture
  enterpriseArchitect: {
    label: 'Enterprise Architect',
    order: 0,
    group: TechnologyGroupDataEnum.architecture,
  },
  // iPaaS
  snapLogic: {
    label: 'SnapLogic',
    order: 0,
    group: TechnologyGroupDataEnum.ipaas,
  },
  // RPA
  uiPath: {
    label: 'UIPath',
    order: 0,
    group: TechnologyGroupDataEnum.rpa,
  },
  // Document Generation
  goSmartDesigner: {
    label: 'goSmart Designer',
    order: 0,
    group: TechnologyGroupDataEnum.documentGeneration,
  },
};
