import { createReducer } from '@ngrx/store';
import { experienceDataConst } from '../../data/experience/experience-data.const';

export const experienceReducer = createReducer(experienceDataConst);
