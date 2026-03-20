import { ContactView } from '../../view/footer/contact/contact.view';
import { CopyrightView } from '../../view/footer/copyright/copyright.view';
import { HomeView } from '../../view/header/home/home.view';
import { NavigationView } from '../../view/header/navigation/navigation.view';
import { AboutMeView } from '../../view/main/about-me/about-me.view';
import { EducationView } from '../../view/main/education/education.view';
import { ExperienceView } from '../../view/main/experience/experience.view';
import { ProjectsView } from '../../view/main/projects/projects.view';
import { ResumeView } from '../../view/main/resume/resume.view';
import { SkillsView } from '../../view/main/skills/skills.view';
import { TechnologiesView } from '../../view/main/technologies/technologies.view';
import { GroupDataEnum } from '../group/group-data.enum';
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
    group: GroupDataEnum.header,
    view: NavigationView,
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
    group: GroupDataEnum.header,
    view: HomeView,
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
    group: GroupDataEnum.main,
    view: AboutMeView,
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
    group: GroupDataEnum.main,
    view: TechnologiesView,
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
    group: GroupDataEnum.main,
    view: SkillsView,
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
    group: GroupDataEnum.main,
    view: ExperienceView,
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
    group: GroupDataEnum.main,
    view: ResumeView,
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
    group: GroupDataEnum.main,
    view: ProjectsView,
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
    group: GroupDataEnum.main,
    view: EducationView,
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
    group: GroupDataEnum.footer,
    view: ContactView,
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
    group: GroupDataEnum.footer,
    view: CopyrightView,
    order: 1,
  },
};
