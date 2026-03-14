import { AboutMeComponent } from '../../view/component/about-me/about-me.component';
import { ContactComponent } from '../../view/component/contact/contact.component';
import { CopyrightComponent } from '../../view/component/copyright/copyright.component';
import { EducationComponent } from '../../view/component/education/education.component';
import { ExperienceComponent } from '../../view/component/experience/experience.component';
import { HomeComponent } from '../../view/component/home/home.component';
import { NavigationComponent } from '../../view/component/navigation/navigation.component';
import { ProjectsComponent } from '../../view/component/projects/projects.component';
import { ResumeComponent } from '../../view/component/resume/resume.component';
import { SkillsComponent } from '../../view/component/skills/skills.component';
import { TechnologiesComponent } from '../../view/component/technologies/technologies.component';
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
    component: AboutMeComponent,
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
    component: TechnologiesComponent,
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
    component: SkillsComponent,
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
    component: ContactComponent,
    order: 0,
  },
  {
    group: SectionGroupDataEnum.footer,
    id: 'copyright',
    label: 'Copyright',
    route: {
      routable: false,
    },
    component: CopyrightComponent,
    order: 1,
  },
];
