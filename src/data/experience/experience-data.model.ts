import { CompanyDataModel } from '../company/company-data.model';
import { SkillDataModel } from '../skill/skill-data.model';
import { TechnologyDataModel } from '../technology/technology-data.model';

export interface ExperienceDataModel {
  company: CompanyDataModel;
  startDate: Date;
  endDate: Date | 'Present';
  role: string;
  experiences: string[];
  technologies: TechnologyDataModel[];
  skills: SkillDataModel[];
}
