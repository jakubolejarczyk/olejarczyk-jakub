import { TechnologyGroupDataEnum } from './technology-group-data.enum';

interface TechnologyGroupModel {
  label: string;
  order: number;
}

export type TechnologyGroupDataModel = Record<TechnologyGroupDataEnum, TechnologyGroupModel>;
