import { SectionGroupDataEnum } from './section-data.enum';
import { SectionDataModel } from './section-data.model';

export const sectionDataConst: SectionDataModel[] = [
  {
    group: SectionGroupDataEnum.header,
    id: 'navigation',
    label: 'Navigation',
    route: {
      routable: false,
    },
    order: 0,
  },
  {
    group: SectionGroupDataEnum.header,
    id: 'home',
    label: 'Home',
    route: {
      routable: true,
      href: '#home',
    },
    order: 1,
  },
  {
    group: SectionGroupDataEnum.main,
    id: 'about-me',
    label: 'About me',
    route: {
      routable: true,
      href: '#about-me',
    },
    order: 0,
  },
  {
    group: SectionGroupDataEnum.main,
    id: 'technologies',
    label: 'Technologies',
    route: {
      routable: true,
      href: '#technologies',
    },
    order: 1,
  },
  {
    group: SectionGroupDataEnum.main,
    id: 'skills',
    label: 'Skills',
    route: {
      routable: true,
      href: '#skills',
    },
    order: 2,
  },
  {
    group: SectionGroupDataEnum.main,
    id: 'experience',
    label: 'Experience',
    route: {
      routable: true,
      href: '#experience',
    },
    order: 3,
  },
  {
    group: SectionGroupDataEnum.main,
    id: 'resume',
    label: 'Resume',
    route: {
      routable: true,
      href: '#resume',
    },
    order: 4,
  },
  {
    group: SectionGroupDataEnum.main,
    id: 'projects',
    label: 'Projects',
    route: {
      routable: true,
      href: '#projects',
    },
    order: 5,
  },
  {
    group: SectionGroupDataEnum.main,
    id: 'education',
    label: 'Education',
    route: {
      routable: true,
      href: '#education',
    },
    order: 6,
  },
  {
    group: SectionGroupDataEnum.main,
    id: 'blog',
    label: 'Blog',
    route: {
      routable: true,
      href: '#blog',
    },
    order: 7,
  },
  {
    group: SectionGroupDataEnum.footer,
    id: 'contact',
    label: 'Contact',
    route: {
      routable: true,
      href: '#contact',
    },
    order: 0,
  },
  {
    group: SectionGroupDataEnum.footer,
    id: 'copyright',
    label: 'Copyright',
    route: {
      routable: false,
    },
    order: 1,
  },
];
