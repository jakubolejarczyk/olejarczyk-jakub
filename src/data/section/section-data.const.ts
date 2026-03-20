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
import { SectionDataEnum, SectionPaletteEnum } from './section-data.enum';
import { SectionDataModel } from './section-data.model';

export const sectionDataConst: SectionDataModel = {
  navigation: {
    id: 'navigation',
    type: SectionDataEnum.navigation,
    header: {
      enable: false,
      label: '',
    },
    routable: {
      enable: false,
    },
    group: GroupDataEnum.header,
    view: NavigationView,
    palette: SectionPaletteEnum.primary,
    order: 0,
  },
  home: {
    id: 'home',
    type: SectionDataEnum.home,
    header: {
      enable: false,
      label: '',
    },
    routable: {
      enable: true,
      href: '#home',
    },
    group: GroupDataEnum.header,
    view: HomeView,
    palette: SectionPaletteEnum.primary,
    order: 1,
  },
  aboutMe: {
    id: 'about-me',
    type: SectionDataEnum.aboutMe,
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
    palette: SectionPaletteEnum.surface,
    order: 0,
  },
  technologies: {
    id: 'technologies',
    type: SectionDataEnum.technologies,
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
    palette: SectionPaletteEnum.surface,
    order: 1,
  },
  skills: {
    id: 'skills',
    type: SectionDataEnum.skills,
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
    palette: SectionPaletteEnum.surface,
    order: 2,
  },
  experience: {
    id: 'experience',
    type: SectionDataEnum.experience,
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
    palette: SectionPaletteEnum.surface,
    order: 3,
  },
  resume: {
    id: 'resume',
    type: SectionDataEnum.resume,
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
    palette: SectionPaletteEnum.surface,
    order: 4,
  },
  projects: {
    id: 'projects',
    type: SectionDataEnum.projects,
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
    palette: SectionPaletteEnum.surface,
    order: 5,
  },
  education: {
    id: 'education',
    type: SectionDataEnum.education,
    header: {
      enable: true,
      label: 'Education',
    },
    routable: {
      enable: true,
      href: '#education',
    },
    group: GroupDataEnum.main,
    palette: SectionPaletteEnum.surface,
    view: EducationView,
    order: 6,
  },
  contact: {
    id: 'contact',
    type: SectionDataEnum.contact,
    header: {
      enable: false,
      label: '',
    },
    routable: {
      enable: true,
      href: '#contact',
    },
    group: GroupDataEnum.footer,
    view: ContactView,
    palette: SectionPaletteEnum.primary,
    order: 0,
  },
  copyright: {
    id: 'copyright',
    type: SectionDataEnum.copyright,
    header: {
      enable: false,
      label: '',
    },
    routable: {
      enable: false,
    },
    group: GroupDataEnum.footer,
    view: CopyrightView,
    palette: SectionPaletteEnum.primary,
    order: 1,
  },
};
