import { TechnologyGroupDataEnum } from './technology-data.enum';

export interface TechnologyGroupDataModel {
  label: string;
  order: number;
}

export interface TechnologyDataModel {
  label: string;
  order: number;
  group: TechnologyGroupDataEnum;
}
