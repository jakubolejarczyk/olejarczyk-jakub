import { createReducer } from '@ngrx/store';
import {
  technologyDataConst,
  technologyGroupDataConst,
} from '../../data/technology/technology-data.const';

export const technologyGroupReducer = createReducer(technologyGroupDataConst);

export const technologyReducer = createReducer(technologyDataConst);
