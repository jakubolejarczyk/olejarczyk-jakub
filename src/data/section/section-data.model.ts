import { ColorEnum } from '../../enum/color.enum';
import { SizeEnum } from '../../enum/size.enum';
import { GroupDataEnum } from '../group/group-data.enum';
import { SectionDataEnum } from './section-data.enum';

interface StyleModel {
  color: ColorEnum;
  padding: {
    top: SizeEnum;
    bottom: SizeEnum;
    left: SizeEnum;
    right: SizeEnum;
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
