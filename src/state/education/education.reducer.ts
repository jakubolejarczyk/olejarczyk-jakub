import { createReducer } from '@ngrx/store';
import { educationDataConst } from '../../data/education/education-data.const';

export const educationReducer = createReducer(educationDataConst);
