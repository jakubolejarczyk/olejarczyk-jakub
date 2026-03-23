import { PaletteEnum } from '../../enum/palette.enum';
import { GroupDataEnum } from '../group/group-data.enum';
import { SectionDataEnum } from './section-data.enum';

interface StyleModel {
  palette: PaletteEnum;
}

interface RoutableEnabledModel {
  enable: true;
  href: string;
}

interface RoutableDisabledModel {
  enable: false;
}

type SectionRouteType = RoutableEnabledModel | RoutableDisabledModel;

interface SectionModel {
  id: string;
  type: SectionDataEnum;
  routable: SectionRouteType;
  group: GroupDataEnum;
  view: any;
  style: StyleModel;
  order: number;
}

export type SectionDataModel = Record<SectionDataEnum, SectionModel>;
