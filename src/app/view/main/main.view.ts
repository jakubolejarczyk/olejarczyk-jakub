import { inject, Injectable } from '@angular/core';
import { NodeModel } from '../../../generator/model/node/node.model';
import { MainLayoutBuilder } from '../../../generator/builder/layout/main-layout.builder';
import { AboutMeView } from './about-me.view';
import { TechnologiesView } from './technologies.view';
import { SkillsView } from './skills.view';
import { ExperienceView } from './experience.view';
import { ResumeView } from './resume.view';
import { ProjectsView } from './projects.view';
import { EducationView } from './education.view';

@Injectable({ providedIn: 'root' })
export class MainView {
  aboutMe = inject(AboutMeView);
  technologies = inject(TechnologiesView);
  skills = inject(SkillsView);
  experience = inject(ExperienceView);
  resume = inject(ResumeView);
  projects = inject(ProjectsView);
  education = inject(EducationView);

  buildNodes(): NodeModel {
    return MainLayoutBuilder.builder()
      .setChildren([
        this.aboutMe.buildNodes(),
        this.technologies.buildNodes(),
        this.skills.buildNodes(),
        this.experience.buildNodes(),
        this.resume.buildNodes(),
        this.projects.buildNodes(),
        this.education.buildNodes(),
      ])
      .build();
  }
}
