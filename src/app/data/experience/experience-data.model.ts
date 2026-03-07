import { CompanyDataModel } from '../company/company-data.model';

export interface ExperienceDataModel {
  company: CompanyDataModel;
  startDate: Date;
  endDate: Date | 'Present';
  role: string;
  experiences: string[];
}
