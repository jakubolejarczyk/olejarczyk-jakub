import { createReducer } from '@ngrx/store';
import { skillDataConst } from '../../data/skill/skill-data.const';

export const skillReducer = createReducer(skillDataConst);
