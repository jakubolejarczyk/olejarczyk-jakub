import { TechnologyGroupDataEnum } from './technology-data.enum';

export interface TechnologyDataModel {
  name: string;
  order: number;
  group: TechnologyGroupDataEnum;
}
