import { AboutMeDataModel } from '../data/about-me/about-me-data.model';
import { CompanyDataModel } from '../data/company/company-data.model';
import { EducationDataModel } from '../data/education/education-data.model';
import { ExperienceDataModel } from '../data/experience/experience-data.model';
import { GroupDataModel } from '../data/group/group-data.model';
import { HomeDataModel } from '../data/home/home-data.model';
import { PersonalDataModel } from '../data/personal/personal-data.model';
import { ResumeDataModel } from '../data/resume/resume-data.model';
import { SectionDataModel } from '../data/section/section-data.model';
import { SkillDataModel } from '../data/skill/skill-data.model';
import { TechnologyGroupDataModel } from '../data/technology-group/technology-group-data.model';
import { TechnologyDataModel } from '../data/technology/technology-data.model';

export type StoreType = {
  aboutMe: AboutMeDataModel;
  company: CompanyDataModel;
  education: EducationDataModel;
  experience: ExperienceDataModel;
  group: GroupDataModel;
  home: HomeDataModel;
  personal: PersonalDataModel;
  resume: ResumeDataModel;
  section: SectionDataModel;
  skill: SkillDataModel;
  technologyGroup: TechnologyGroupDataModel;
  technology: TechnologyDataModel;
};
