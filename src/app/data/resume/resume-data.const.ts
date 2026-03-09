import { ArrayType } from '../../common/common.type';
import { ResumeLangDataModel } from './resume-data.enum';
import { ResumeDataModel } from './resume-data.model';

export const resumeDataConst: ArrayType<ResumeDataModel> = [
  {
    filePath: 'files/olejarczyk_jakub_en.pdf',
    label: 'Download (English)',
    lang: ResumeLangDataModel.polish,
    order: 0,
  },
  {
    filePath: 'files/olejarczyk_jakub_pl.pdf',
    label: 'Download (Polish)',
    lang: ResumeLangDataModel.polish,
    order: 1,
  },
];
