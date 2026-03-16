interface SectionHeaderDataModel {
  show: true;
  label: string;
}

interface SectionNotHeaderDataModel {
  show: false;
}

type SectionHeaderType = SectionHeaderDataModel | SectionNotHeaderDataModel;

interface SectionRoutableDataModel {
  routable: true;
  href: string;
}

interface SectionNotRoutableDataModel {
  routable: false;
}

type SectionRouteType = SectionRoutableDataModel | SectionNotRoutableDataModel;

export interface SectionDataModel {
  id: string;
  header: SectionHeaderType;
  route: SectionRouteType;
}
