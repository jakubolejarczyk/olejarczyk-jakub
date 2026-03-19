import { CompanyDataEnum } from '../company/company-data.enum';
import { SkillDataModel } from '../skill/skill-data.model';
import { TechnologyDataModel } from '../technology/technology-data.model';

interface ExperienceModel {
  company: CompanyDataEnum;
  startDate: Date;
  endDate: Date | 'Present';
  role: string;
  experiences: string[];
  technologies: TechnologyDataModel[];
  skills: SkillDataModel[];
}

export type ExperienceDataModel = ExperienceModel[];
