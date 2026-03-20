import { ColorEnum } from '../../enum/color.enum';
import { SizeEnum } from '../../enum/size.enum';
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
    header: {
      enable: false,
      label: '',
    },
    routable: {
      enable: false,
    },
    group: GroupDataEnum.header,
    view: NavigationView,
    style: {
      color: ColorEnum.primary,
      padding: {
        vertical: {
          top: SizeEnum.md,
          bottom: SizeEnum.md,
        },
        horizontal: {
          left: SizeEnum.md,
          right: SizeEnum.md,
        },
      },
    },
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
    style: {
      color: ColorEnum.primary,
      padding: {
        vertical: {
          top: SizeEnum.xl,
          bottom: SizeEnum.xl,
        },
        horizontal: {
          left: SizeEnum.md,
          right: SizeEnum.md,
        },
      },
    },
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
    style: {
      color: ColorEnum.surface,
      padding: {
        vertical: {
          top: SizeEnum.xl,
          bottom: SizeEnum.xl,
        },
        horizontal: {
          left: SizeEnum.md,
          right: SizeEnum.md,
        },
      },
    },
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
    style: {
      color: ColorEnum.surface,
      padding: {
        vertical: {
          top: SizeEnum.xl,
          bottom: SizeEnum.xl,
        },
        horizontal: {
          left: SizeEnum.md,
          right: SizeEnum.md,
        },
      },
    },
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
    style: {
      color: ColorEnum.surface,
      padding: {
        vertical: {
          top: SizeEnum.xl,
          bottom: SizeEnum.xl,
        },
        horizontal: {
          left: SizeEnum.md,
          right: SizeEnum.md,
        },
      },
    },
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
    style: {
      color: ColorEnum.surface,
      padding: {
        vertical: {
          top: SizeEnum.xl,
          bottom: SizeEnum.xl,
        },
        horizontal: {
          left: SizeEnum.md,
          right: SizeEnum.md,
        },
      },
    },
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
    style: {
      color: ColorEnum.surface,
      padding: {
        vertical: {
          top: SizeEnum.xl,
          bottom: SizeEnum.xl,
        },
        horizontal: {
          left: SizeEnum.md,
          right: SizeEnum.md,
        },
      },
    },
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
    style: {
      color: ColorEnum.surface,
      padding: {
        vertical: {
          top: SizeEnum.xl,
          bottom: SizeEnum.xl,
        },
        horizontal: {
          left: SizeEnum.md,
          right: SizeEnum.md,
        },
      },
    },
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
    style: {
      color: ColorEnum.surface,
      padding: {
        vertical: {
          top: SizeEnum.xl,
          bottom: SizeEnum.xl,
        },
        horizontal: {
          left: SizeEnum.md,
          right: SizeEnum.md,
        },
      },
    },
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
    style: {
      color: ColorEnum.primary,
      padding: {
        vertical: {
          top: SizeEnum.xl,
          bottom: SizeEnum.lg,
        },
        horizontal: {
          left: SizeEnum.md,
          right: SizeEnum.md,
        },
      },
    },
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
    style: {
      color: ColorEnum.primary,
      padding: {
        vertical: {
          top: SizeEnum.lg,
          bottom: SizeEnum.xl,
        },
        horizontal: {
          left: SizeEnum.md,
          right: SizeEnum.md,
        },
      },
    },
    order: 1,
  },
};
