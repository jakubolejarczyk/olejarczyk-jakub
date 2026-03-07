import { RecordType } from '../../common/common.type';
import { TechnologyDataKindEnum } from './technology-data.enum';
import { TechnologyDataModel } from './technology-data.model';

export const technologyDataConst: RecordType<TechnologyDataKindEnum, TechnologyDataModel> = {
  html: {
    name: 'HTML',
  },
};
