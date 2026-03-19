import { inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { AboutMeDataModel } from '../data/about-me/about-me-data.model';
import { EducationDataModel } from '../data/education/education-data.model';
import { ExperienceDataModel } from '../data/experience/experience-data.model';
import { HomeDataModel } from '../data/home/home-data.model';
import { PersonalDataModel } from '../data/personal/personal-data.model';
import { ResumeDataModel } from '../data/resume/resume-data.model';
import { SectionDataModel } from '../data/section/section-data.model';
import { SkillDataModel } from '../data/skill/skill-data.model';
import { GroupDataModel } from '../data/group/group-data.model';
import { SectionDataEnum } from '../data/section/section-data.enum';
import { SkillKindDataEnum } from '../data/skill/skill-data.enum';
import { TechnologyGroupDataEnum } from '../data/technology-group/technology-group-data.enum';
import { TechnologyGroupDataModel } from '../data/technology-group/technology-group-data.model';
import { TechnologyDataModel } from '../data/technology/technology-data.model';
import { TechnologyDataEnum } from '../data/technology/technology-data.enum';

type StoreType = {
  aboutMe: AboutMeDataModel;
  education: EducationDataModel[];
  experience: ExperienceDataModel[];
  home: HomeDataModel;
  personal: PersonalDataModel;
  resume: ResumeDataModel[];
  group: GroupDataModel;
  section: Record<SectionDataEnum, SectionDataModel>;
  skill: Record<SkillKindDataEnum, SkillDataModel>;
  technologyGroup: Record<TechnologyGroupDataEnum, TechnologyGroupDataModel>;
  technology: Record<TechnologyDataEnum, TechnologyDataModel>;
};

export class StoreCore {
  protected readonly store: Store<StoreType> = inject(Store);
}
