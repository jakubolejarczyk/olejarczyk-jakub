import { SkillKindDataEnum } from './skill-data.enum';
import { SkillDataModel } from './skill-data.model';

export const skillDataConst: Record<SkillKindDataEnum, SkillDataModel> = {
  dataStructuresAndAlgorithms: {
    label: 'Data Structures and Algorithms',
    order: 0,
  },
  english: {
    label: 'English - B2',
    order: 1,
  },
  polish: {
    label: 'Polish - Native',
    order: 2,
  },
};
