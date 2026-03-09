import { RecordType } from '../../common/common.type';
import { SkillKindDataEnum } from './skill-data.enum';
import { SkillDataModel } from './skill-data.model';

export const skillDataConst: RecordType<SkillKindDataEnum, SkillDataModel> = {
  english: {
    name: 'English - B2',
    order: 0,
  },
  polish: {
    name: 'Polish - Native',
    order: 1,
  },
};
