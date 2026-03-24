import { GroupDataEnum } from './group-data.enum';

interface GroupModel {
  view: any;
  order: number;
}

export type GroupDataModel = Record<GroupDataEnum, GroupModel>;
