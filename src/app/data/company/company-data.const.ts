import { RecordType } from '../../common/common.type';
import { CompanyDataEnum } from './company-data.enum';
import { CompanyDataModel } from './company-data.model';

export const companyDataConst: RecordType<CompanyDataEnum, CompanyDataModel> = {
  aprSystem: {
    name: 'APR System',
    url: 'https://www.apr.pl',
  },
  primaris: {
    name: 'Primaris',
    url: 'https://primaris.eu',
  },
};
