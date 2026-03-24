import { PaletteEnum } from '../../enum/palette.enum';
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
import { SectionDataEnum } from './section-data.enum';
import { SectionDataModel } from './section-data.model';

export const sectionDataConst: SectionDataModel = {
  navigation: {
    id: 'navigation',
    type: SectionDataEnum.navigation,
    routable: {
      enable: false,
    },
    group: GroupDataEnum.header,
    view: NavigationView,
    style: {
      palette: PaletteEnum.primary,
    },
    enabled: true,
    label: 'Navigation',
    order: 0,
  },
  home: {
    id: 'home',
    type: SectionDataEnum.home,
    routable: {
      enable: true,
      href: '#home',
    },
    group: GroupDataEnum.header,
    view: HomeView,
    style: {
      palette: PaletteEnum.primary,
    },
    enabled: false,
    label: 'Home',
    order: 1,
  },
  aboutMe: {
    id: 'about-me',
    type: SectionDataEnum.aboutMe,
    routable: {
      enable: true,
      href: '#about-me',
    },
    group: GroupDataEnum.main,
    view: AboutMeView,
    style: {
      palette: PaletteEnum.main,
    },
    enabled: true,
    label: 'About me',
    order: 0,
  },
  technologies: {
    id: 'technologies',
    type: SectionDataEnum.technologies,
    routable: {
      enable: true,
      href: '#technologies',
    },
    group: GroupDataEnum.main,
    view: TechnologiesView,
    style: {
      palette: PaletteEnum.surface,
    },
    enabled: true,
    label: 'Technologies',
    order: 1,
  },
  skills: {
    id: 'skills',
    type: SectionDataEnum.skills,
    routable: {
      enable: true,
      href: '#skills',
    },
    group: GroupDataEnum.main,
    view: SkillsView,
    style: {
      palette: PaletteEnum.surface,
    },
    enabled: true,
    label: 'Skills',
    order: 2,
  },
  experience: {
    id: 'experience',
    type: SectionDataEnum.experience,
    routable: {
      enable: true,
      href: '#experience',
    },
    group: GroupDataEnum.main,
    view: ExperienceView,
    style: {
      palette: PaletteEnum.main,
    },
    enabled: false,
    label: 'Experience',
    order: 3,
  },
  resume: {
    id: 'resume',
    type: SectionDataEnum.resume,
    routable: {
      enable: true,
      href: '#resume',
    },
    group: GroupDataEnum.main,
    view: ResumeView,
    style: {
      palette: PaletteEnum.main,
    },
    enabled: false,
    label: 'Resume',
    order: 4,
  },
  projects: {
    id: 'projects',
    type: SectionDataEnum.projects,
    routable: {
      enable: true,
      href: '#projects',
    },
    group: GroupDataEnum.main,
    view: ProjectsView,
    style: {
      palette: PaletteEnum.main,
    },
    enabled: false,
    label: 'Projects',
    order: 5,
  },
  education: {
    id: 'education',
    type: SectionDataEnum.education,
    routable: {
      enable: true,
      href: '#education',
    },
    group: GroupDataEnum.main,
    style: {
      palette: PaletteEnum.main,
    },
    enabled: true,
    view: EducationView,
    label: 'Education',
    order: 6,
  },
  contact: {
    id: 'contact',
    type: SectionDataEnum.contact,
    routable: {
      enable: true,
      href: '#contact',
    },
    group: GroupDataEnum.footer,
    view: ContactView,
    style: {
      palette: PaletteEnum.primary,
    },
    enabled: true,
    label: 'Contact',
    order: 0,
  },
  copyright: {
    id: 'copyright',
    type: SectionDataEnum.copyright,
    routable: {
      enable: false,
    },
    group: GroupDataEnum.footer,
    view: CopyrightView,
    style: {
      palette: PaletteEnum.primary,
    },
    enabled: true,
    label: 'Copyright',
    order: 1,
  },
};
