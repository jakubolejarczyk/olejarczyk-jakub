import { createReducer } from '@ngrx/store';
import { personalDataConst } from '../data/personal/personal-data.const';

export const personalReducer = createReducer(personalDataConst);
