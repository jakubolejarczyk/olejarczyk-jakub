import { ResumeLangDataModel } from './resume-data.enum';

export interface ResumeDataModel {
  filePath: string;
  label: string;
  lang: ResumeLangDataModel;
  order: number;
}
