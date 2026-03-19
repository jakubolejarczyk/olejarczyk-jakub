import { GroupDataEnum } from '../group/group-data.enum';
import { SectionDataEnum } from './section-data.enum';

interface HeaderEnabledModel {
  enable: true;
  label: string;
}

interface HeaderDisabledModel {
  enable: false;
}

type HeaderType = HeaderEnabledModel | HeaderDisabledModel;

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
  header: HeaderType;
  routable: SectionRouteType;
  group: GroupDataEnum;
  order: number;
}

export type SectionDataModel = Record<SectionDataEnum, SectionModel>;
