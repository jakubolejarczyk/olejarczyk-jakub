import { PaletteEnum } from '../../enum/palette.enum';
import { SizeEnum } from '../../enum/size.enum';
import { GroupDataEnum } from '../group/group-data.enum';
import { SectionDataEnum } from './section-data.enum';

interface StyleModel {
  palette: PaletteEnum;
  padding: {
    top: SizeEnum;
    right: SizeEnum;
    bottom: SizeEnum;
    left: SizeEnum;
  };
}

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
  style: StyleModel;
  order: number;
}

export type SectionDataModel = Record<SectionDataEnum, SectionModel>;
