import { SectionGroupDataEnum } from './section-data.enum';

interface SectionRoutableDataModel {
  routable: true;
  href: string;
}

interface SectionNotRoutableDataModel {
  routable: false;
}

export interface SectionDataModel {
  group: SectionGroupDataEnum;
  id: string;
  label: string;
  route: SectionRoutableDataModel | SectionNotRoutableDataModel;
  component: any;
  order: number;
}
