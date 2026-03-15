import { inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { PersonalDataModel } from '../data/personal/personal-data.model';
import { SectionDataModel } from '../data/section/section-data.model';
import { HomeDataModel } from '../data/home/home-data.model';
import { AboutMeDataModel } from '../data/about-me/about-me-data.model';
import {
  TechnologyDataModel,
  TechnologyGroupDataModel,
} from '../data/technology/technology-data.model';
import { SkillDataModel } from '../view/main/skill/skill-data.model';
import { ExperienceDataModel } from '../data/experience/experience-data.model';
import { ResumeDataModel } from '../data/resume/resume-data.model';
import { EducationDataModel } from '../data/education/education-data.model';

type StoreType = {
  personal: PersonalDataModel;
  section: SectionDataModel;
  home: HomeDataModel;
  aboutMe: AboutMeDataModel;
  technologyGroup: TechnologyGroupDataModel;
  technology: TechnologyDataModel;
  skill: SkillDataModel;
  experience: ExperienceDataModel;
  resume: ResumeDataModel;
  education: EducationDataModel;
};

export class StoreCore {
  protected readonly store: Store<StoreType> = inject(Store);
}
