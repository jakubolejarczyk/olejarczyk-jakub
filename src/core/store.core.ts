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
import {
  TechnologyGroupDataModel,
  TechnologyDataModel,
} from '../data/technology/technology-data.model';

type StoreType = {
  aboutMe: AboutMeDataModel;
  education: EducationDataModel;
  experience: ExperienceDataModel;
  home: HomeDataModel;
  personal: PersonalDataModel;
  resume: ResumeDataModel;
  section: SectionDataModel;
  skill: SkillDataModel;
  technologyGroup: TechnologyGroupDataModel;
  technology: TechnologyDataModel;
};

export class StoreCore {
  protected readonly store: Store<StoreType> = inject(Store);
}
