import { RecordType } from '../../common/common.type';
import { CompanyDataKindEnum } from './company-data.enum';
import { CompanyDataModel } from './company-data.model';

export const companyDataConst: RecordType<CompanyDataKindEnum, CompanyDataModel> = {
  aprSystem: {
    name: 'APR System',
    url: 'https://www.apr.pl',
  },
  primaris: {
    name: 'Primaris',
    url: 'https://primaris.eu',
  },
};
