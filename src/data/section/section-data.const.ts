import { personalDataConst } from '../personal/personal-data.const';
import { SectionDataEnum } from './section-data.enum';
import { SectionDataModel } from './section-data.model';

export const sectionDataConst: Record<SectionDataEnum, SectionDataModel> = {
  navigation: {
    id: 'navigation',
    header: {
      show: true,
      label: `${personalDataConst.lastname} ${personalDataConst.firstname}`,
    },
    route: {
      routable: false,
    },
  },
  home: {
    id: 'home',
    header: {
      show: true,
      label: 'Home',
    },
    route: {
      routable: true,
      href: '#home',
    },
  },
  aboutMe: {
    id: 'about-me',
    header: {
      show: true,
      label: 'About me',
    },
    route: {
      routable: true,
      href: '#about-me',
    },
  },
  technologies: {
    id: 'technologies',
    header: {
      show: true,
      label: 'Technologies',
    },
    route: {
      routable: true,
      href: '#technologies',
    },
  },
  skills: {
    id: 'skills',
    header: {
      show: true,
      label: 'Skills',
    },
    route: {
      routable: true,
      href: '#skills',
    },
  },
  experience: {
    id: 'experience',
    header: {
      show: true,
      label: 'Experience',
    },
    route: {
      routable: true,
      href: '#experience',
    },
  },
  resume: {
    id: 'resume',
    header: {
      show: true,
      label: 'Resume',
    },
    route: {
      routable: true,
      href: '#resume',
    },
  },
  projects: {
    id: 'projects',
    header: {
      show: true,
      label: 'Projects',
    },
    route: {
      routable: true,
      href: '#projects',
    },
  },
  education: {
    id: 'education',
    header: {
      show: true,
      label: 'Education',
    },
    route: {
      routable: true,
      href: '#education',
    },
  },
  contact: {
    id: 'contact',
    header: {
      show: true,
      label: 'Contact',
    },
    route: {
      routable: true,
      href: '#contact',
    },
  },
  copyright: {
    id: 'copyright',
    header: {
      show: false,
    },
    route: {
      routable: false,
    },
  },
};
