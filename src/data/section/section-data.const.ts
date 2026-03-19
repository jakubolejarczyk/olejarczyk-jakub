import { SectionDataModel } from './section-data.model';

export const sectionDataConst: SectionDataModel = {
  navigation: {
    id: 'navigation',
    header: {
      enable: false,
    },
    routable: {
      enable: false,
    },
    group: 'header',
    order: 0,
  },
  home: {
    id: 'home',
    header: {
      enable: false,
    },
    routable: {
      enable: true,
      href: '#home',
    },
    group: 'header',
    order: 1,
  },
  aboutMe: {
    id: 'about-me',
    header: {
      enable: true,
      label: 'About me',
    },
    routable: {
      enable: true,
      href: '#about-me',
    },
    group: 'main',
    order: 0,
  },
  technologies: {
    id: 'technologies',
    header: {
      enable: true,
      label: 'Technologies',
    },
    routable: {
      enable: true,
      href: '#technologies',
    },
    group: 'main',
    order: 1,
  },
  skills: {
    id: 'skills',
    header: {
      enable: true,
      label: 'Skills',
    },
    routable: {
      enable: true,
      href: '#skills',
    },
    group: 'main',
    order: 2,
  },
  experience: {
    id: 'experience',
    header: {
      enable: true,
      label: 'Experience',
    },
    routable: {
      enable: true,
      href: '#experience',
    },
    group: 'main',
    order: 3,
  },
  resume: {
    id: 'resume',
    header: {
      enable: true,
      label: 'Resume',
    },
    routable: {
      enable: true,
      href: '#resume',
    },
    group: 'main',
    order: 4,
  },
  projects: {
    id: 'projects',
    header: {
      enable: true,
      label: 'Projects',
    },
    routable: {
      enable: true,
      href: '#projects',
    },
    group: 'main',
    order: 5,
  },
  education: {
    id: 'education',
    header: {
      enable: true,
      label: 'Education',
    },
    routable: {
      enable: true,
      href: '#education',
    },
    group: 'main',
    order: 6,
  },
  contact: {
    id: 'contact',
    header: {
      enable: false,
    },
    routable: {
      enable: true,
      href: '#contact',
    },
    group: 'footer',
    order: 0,
  },
  copyright: {
    id: 'copyright',
    header: {
      enable: false,
    },
    routable: {
      enable: false,
    },
    group: 'footer',
    order: 1,
  },
};
