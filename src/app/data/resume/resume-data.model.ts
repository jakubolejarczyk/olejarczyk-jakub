import { ResumeLangDataEnum } from './resume-data.enum';

interface ResumeModel {
  resumeFile: string;
  label: string;
  lang: ResumeLangDataEnum;
  order: number;
}

export type ResumeDataModel = ResumeModel[];
