import { Component } from '@angular/core';

import { AboutMeView } from './about-me/about-me.view';
import { TechnologiesView } from './technologies/technologies.view';
import { SkillsView } from './skills/skills.view';
import { ExperienceView } from './experience/experience.view';
import { ResumeView } from './resume/resume.view';
import { ProjectsView } from './projects/projects.view';
import { EducationView } from './education/education.view';

@Component({
  selector: 'main-view',
  templateUrl: './main.view.html',
  styleUrl: './main.view.scss',
  imports: [
    AboutMeView,
    TechnologiesView,
    SkillsView,
    ExperienceView,
    ResumeView,
    ProjectsView,
    EducationView,
  ],
})
export class MainView {}
