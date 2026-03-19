import { CompanyDataEnum } from '../company/company-data.enum';
import { SkillKindDataEnum } from '../skill/skill-data.enum';
import { TechnologyDataModel } from '../technology/technology-data.model';

interface ExperienceModel {
  company: CompanyDataEnum;
  startDate: Date;
  endDate: Date | 'Present';
  role: string;
  experiences: string[];
  technologies: TechnologyDataModel[];
  skills: SkillKindDataEnum[];
}

export type ExperienceDataModel = ExperienceModel[];
