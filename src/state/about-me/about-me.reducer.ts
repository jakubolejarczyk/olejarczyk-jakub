import { createReducer } from '@ngrx/store';
import { aboutMeDataConst } from '../../data/about-me/about-me-data.const';

export const aboutMeReducer = createReducer(aboutMeDataConst);
