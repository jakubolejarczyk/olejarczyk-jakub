import { RecordType } from '../../common/common.type';
import { TechnologyGroupDataEnum, TechnologyKindDataEnum } from './technology-data.enum';
import { TechnologyDataModel, TechnologyGroupDataModel } from './technology-data.model';

export const technologyDataConst: RecordType<TechnologyKindDataEnum, TechnologyDataModel> = {
  // Language
  html: {
    name: 'HTML',
    order: 0,
    group: TechnologyGroupDataEnum.language,
  },
  css: {
    name: 'CSS',
    order: 1,
    group: TechnologyGroupDataEnum.language,
  },
  sass: {
    name: 'SASS',
    order: 2,
    group: TechnologyGroupDataEnum.language,
  },
  javascript: {
    name: 'JavaScript',
    order: 3,
    group: TechnologyGroupDataEnum.language,
  },
  typescript: {
    name: 'TypeScript',
    order: 4,
    group: TechnologyGroupDataEnum.language,
  },
  // Framework
  angular: {
    name: 'Angular',
    order: 0,
    group: TechnologyGroupDataEnum.framework,
  },
  // Library
  rxjs: {
    name: 'RxJS',
    order: 0,
    group: TechnologyGroupDataEnum.library,
  },
  ngxs: {
    name: 'NGXS',
    order: 1,
    group: TechnologyGroupDataEnum.library,
  },
  primeng: {
    name: 'PrimeNG',
    order: 2,
    group: TechnologyGroupDataEnum.library,
  },
  // Database
  sql: {
    name: 'SQL',
    order: 0,
    group: TechnologyGroupDataEnum.database,
  },
  microsoftSqlServer: {
    name: 'Microsoft SQL Server',
    order: 1,
    group: TechnologyGroupDataEnum.database,
  },
  // Test
  jest: {
    name: 'Jest',
    order: 0,
    group: TechnologyGroupDataEnum.test,
  },
  postman: {
    name: 'Postman',
    order: 1,
    group: TechnologyGroupDataEnum.test,
  },
  soapui: {
    name: 'SoapUI',
    order: 2,
    group: TechnologyGroupDataEnum.test,
  },
  // Containerization
  docker: {
    name: 'Docker',
    order: 0,
    group: TechnologyGroupDataEnum.containerization,
  },
  // Version Control System
  git: {
    name: 'Git',
    order: 0,
    group: TechnologyGroupDataEnum.versionControlSystem,
  },
  github: {
    name: 'GitHub',
    order: 1,
    group: TechnologyGroupDataEnum.versionControlSystem,
  },
  gitlab: {
    name: 'GitLab',
    order: 2,
    group: TechnologyGroupDataEnum.versionControlSystem,
  },
  // Package Manager
  npm: {
    name: 'npm',
    order: 0,
    group: TechnologyGroupDataEnum.packageManager,
  },
  pnpm: {
    name: 'pnpm',
    order: 1,
    group: TechnologyGroupDataEnum.packageManager,
  },
  // Code Quality
  eslint: {
    name: 'ESLint',
    order: 0,
    group: TechnologyGroupDataEnum.codeQuality,
  },
  prettier: {
    name: 'Prettier',
    order: 1,
    group: TechnologyGroupDataEnum.codeQuality,
  },
  stylelint: {
    name: 'Stylelint',
    order: 2,
    group: TechnologyGroupDataEnum.codeQuality,
  },
  // Runtime
  nodejs: {
    name: 'Node.js',
    order: 0,
    group: TechnologyGroupDataEnum.runtime,
  },
  // Build System
  nx: {
    name: 'Nx',
    order: 0,
    group: TechnologyGroupDataEnum.buildSystem,
  },
  // Tool
  storybook: {
    name: 'Storybook',
    order: 0,
    group: TechnologyGroupDataEnum.tool,
  },
  // IDE
  webstorm: {
    name: 'WebStorm',
    order: 0,
    group: TechnologyGroupDataEnum.ide,
  },
  visualStudioCode: {
    name: 'Visual Studio Code',
    order: 1,
    group: TechnologyGroupDataEnum.ide,
  },
  // Architecture
  enterpriseArchitect: {
    name: 'Enterprise Architect',
    order: 0,
    group: TechnologyGroupDataEnum.architecture,
  },
  // Operating System
  windows: {
    name: 'Windows',
    order: 0,
    group: TechnologyGroupDataEnum.operatingSystem,
  },
  linux: {
    name: 'Linux',
    order: 1,
    group: TechnologyGroupDataEnum.operatingSystem,
  },
  // iPaaS
  snapLogic: {
    name: 'SnapLogic',
    order: 0,
    group: TechnologyGroupDataEnum.ipaas,
  },
  // RPA
  uiPath: {
    name: 'UIPath',
    order: 0,
    group: TechnologyGroupDataEnum.rpa,
  },
  // Document Generation
  goSmartDesigner: {
    name: 'goSmart Designer',
    order: 0,
    group: TechnologyGroupDataEnum.documentGeneration,
  },
};

export const technologyGroupDataConst: RecordType<
  TechnologyGroupDataEnum,
  TechnologyGroupDataModel
> = {
  language: {
    label: 'Language',
    order: 0,
  },
  framework: {
    label: 'Framework',
    order: 1,
  },
  library: {
    label: 'Library',
    order: 2,
  },
  database: {
    label: 'Database',
    order: 3,
  },
  test: {
    label: 'Test',
    order: 4,
  },
  containerization: {
    label: 'Containerization',
    order: 5,
  },
  versionControlSystem: {
    label: 'Version Control System',
    order: 6,
  },
  packageManager: {
    label: 'Package Manager',
    order: 7,
  },
  codeQuality: {
    label: 'Code Quality',
    order: 8,
  },
  runtime: {
    label: 'Runtime',
    order: 9,
  },
  buildSystem: {
    label: 'Build System',
    order: 10,
  },
  tool: {
    label: 'Tool',
    order: 11,
  },
  ide: {
    label: 'IDE',
    order: 12,
  },
  architecture: {
    label: 'Architecture',
    order: 13,
  },
  operatingSystem: {
    label: 'Operating System',
    order: 14,
  },
  ipaas: {
    label: 'iPaaS',
    order: 15,
  },
  rpa: {
    label: 'RPA',
    order: 16,
  },
  documentGeneration: {
    label: 'Document Generation',
    order: 17,
  },
};
