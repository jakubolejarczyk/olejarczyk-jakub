import { ArrayType } from '../../common/common.type';
import { companyDataConst } from '../company/company-data.const';
import { ExperienceDataModel } from './experience-data.model';

export const experienceDataConst: ArrayType<ExperienceDataModel> = [
  {
    company: companyDataConst.aprSystem,
    startDate: new Date(2020, 8, 1),
    endDate: new Date(2025, 3, 1),
    role: 'Frontend Software Engineer',
    experiences: [
      'Designed, developed, and maintained Angular-based web applications.',
      'Built reusable metadata-driven Angular UI components with dynamic rendering.',
      'Implemented application state management using NGXS, RxJS, and Redux DevTools.',
      'Developed applications within an Nx monorepo architecture supporting a modular project structure.',
      'Enforced code quality standards using ESLint, Prettier, and Stylelint.',
      'Implemented unit testing using Jest.',
      'Integrated REST API communication between frontend and backend services.',
      'Containerized applications using Docker.',
      'Developed internal NPM packages to support workflow automation and CI/CD within the GitLab ecosystem.',
      'Modeled system architecture and business processes using UML.',
    ],
  },
  {
    company: companyDataConst.primaris,
    startDate: new Date(2025, 6, 1),
    endDate: 'Present',
    role: 'RPA Developer',
    experiences: [
      'Developed business process automations using UiPath.',
      'Worked with Microsoft SQL Server (MSSQL) and SQL to interact with databases.',
      'Communicated effectively in English within a professional work environment.',
    ],
  },
];
