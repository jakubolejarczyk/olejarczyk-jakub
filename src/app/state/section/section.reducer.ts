import { createReducer } from '@ngrx/store';
import { sectionDataConst } from '../../data/section/section-data.const';

export const sectionReducer = createReducer(sectionDataConst);
