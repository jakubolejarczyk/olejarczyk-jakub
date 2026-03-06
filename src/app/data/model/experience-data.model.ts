import { CompanyData } from './company-data.model';

export namespace ExperienceData {
  interface Model {
    company: CompanyData.Model;
  }

  export type Type = Model[];
}
