import { ResumeLangDataEnum } from './resume-data.enum';

export interface ResumeDataModel {
  resumeFile: string;
  label: string;
  lang: ResumeLangDataEnum;
  order: number;
}
