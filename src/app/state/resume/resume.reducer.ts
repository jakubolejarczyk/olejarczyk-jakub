import { createReducer } from '@ngrx/store';
import { resumeDataConst } from '../../data/resume/resume-data.const';

export const resumeReducer = createReducer(resumeDataConst);
