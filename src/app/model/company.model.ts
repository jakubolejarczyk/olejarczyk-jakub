import { CompanyNameEnum } from '../enum/company/company-name.enum';
import { CompanyUrlEnum } from '../enum/company/company-url.enum';

export interface CompanyModel {
  name: CompanyNameEnum;
  url: CompanyUrlEnum;
}
