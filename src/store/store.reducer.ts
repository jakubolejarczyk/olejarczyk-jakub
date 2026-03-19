import { createReducer } from '@ngrx/store';
import { sectionDataConst } from '../data/section/section-data.const';
import { groupDataConst } from '../data/group/group-data.const';

export const groupReducer = createReducer(groupDataConst);

export const sectionReducer = createReducer(sectionDataConst);
