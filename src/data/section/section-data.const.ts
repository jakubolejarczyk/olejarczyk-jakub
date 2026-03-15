// import { AboutMeComponent } from '../../view/main/about-me/about-me.view';
// import { ContactComponent } from '../../component/contact/contact.component';
// import { CopyrightComponent } from '../../component/copyright/copyright.component';
import { EducationComponent } from '../../component/education/education.component';
import { ExperienceComponent } from '../../component/experience/experience.component';
import { HomeComponent } from '../../component/home/home.component';
import { NavigationComponent } from '../../component/navigation/navigation.component';
import { ProjectsComponent } from '../../component/projects/projects.component';
import { ResumeComponent } from '../../component/resume/resume.component';
// import { SkillsComponent } from '../../view/main/skills/skills.view';
// import { TechnologiesComponent } from '../../view/main/technologies/technologies.view';
import { personalDataConst } from '../personal/personal-data.const';
import { SectionGroupDataEnum } from './section-data.enum';
import { SectionDataModel } from './section-data.model';

export const sectionDataConst: SectionDataModel[] = [
  {
    group: SectionGroupDataEnum.header,
    id: 'navigation',
    label: `${personalDataConst.lastname} ${personalDataConst.firstname}`,
    route: {
      routable: false,
    },
    component: NavigationComponent,
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
    component: HomeComponent,
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
    component: undefined,
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
    component: undefined,
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
    component: undefined,
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
    component: ExperienceComponent,
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
    component: ResumeComponent,
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
    component: ProjectsComponent,
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
    component: EducationComponent,
    order: 6,
  },
  {
    group: SectionGroupDataEnum.footer,
    id: 'contact',
    label: 'Contact',
    route: {
      routable: true,
      href: '#contact',
    },
    component: undefined,
    order: 0,
  },
  {
    group: SectionGroupDataEnum.footer,
    id: 'copyright',
    label: 'Copyright',
    route: {
      routable: false,
    },
    component: undefined,
    order: 1,
  },
];
