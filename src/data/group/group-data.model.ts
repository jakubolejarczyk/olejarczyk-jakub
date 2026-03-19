import { GroupDataEnum } from './group-data.enum';

interface GroupModel {
  order: number;
}

export type GroupDataModel = Record<GroupDataEnum, GroupModel>;
