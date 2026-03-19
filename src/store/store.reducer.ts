import { createReducer } from '@ngrx/store';
import { sectionDataConst } from '../data/section/section-data.const';
import { groupDataConst } from '../data/group/group-data.const';
import { aboutMeDataConst } from '../data/about-me/about-me-data.const';
import { companyDataConst } from '../data/company/company-data.const';
import { educationDataConst } from '../data/education/education-data.const';
import { experienceDataConst } from '../data/experience/experience-data.const';

export const aboutMeReducer = createReducer(aboutMeDataConst);

export const companyReducer = createReducer(companyDataConst);

export const educationReducer = createReducer(educationDataConst);

export const experienceReducer = createReducer(experienceDataConst);

export const groupReducer = createReducer(groupDataConst);

export const sectionReducer = createReducer(sectionDataConst);
