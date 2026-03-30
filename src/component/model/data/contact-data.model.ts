import { BaseModel } from '../base/base.model';
import { DataBaseModel } from '../base/data-base.model';

interface SocialMedia {
  label: string;
  url: string;
}

export interface ContactDataModel extends BaseModel<
  DataBaseModel,
  {
    firstName: string;
    lastName: string;
    motto: string[];
    socialMedias: SocialMedia[];
    email: string;
    phone: string;
    country: string;
    city: string;
  }
> {}
