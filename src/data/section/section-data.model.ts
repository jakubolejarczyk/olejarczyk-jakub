import { GroupDataEnum } from '../group/group-data.enum';
import { SectionDataEnum, SectionPaletteEnum } from './section-data.enum';

interface HeaderModel {
  enable: boolean;
  label: string;
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
  header: HeaderModel;
  routable: SectionRouteType;
  group: GroupDataEnum;
  view: any;
  palette: SectionPaletteEnum;
  order: number;
}

export type SectionDataModel = Record<SectionDataEnum, SectionModel>;
