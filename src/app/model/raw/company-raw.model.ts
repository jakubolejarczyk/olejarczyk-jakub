import { CompanyNameRawEnum } from '../../enum/raw/company/company-name-raw.enum';
import { CompanyUrlRawEnum } from '../../enum/raw/company/company-url-raw.enum';

export interface CompanyRawModel {
  name: CompanyNameRawEnum;
  url: CompanyUrlRawEnum;
}
