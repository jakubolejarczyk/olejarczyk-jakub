import { createReducer } from '@ngrx/store';
import { homeDataConst } from '../../data/home/home-data.const';

export const homeReducer = createReducer(homeDataConst);
