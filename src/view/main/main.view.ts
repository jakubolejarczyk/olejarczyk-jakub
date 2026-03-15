import { Component } from '@angular/core';

import { AboutMeView } from './about-me/about-me.view';
import { TechnologiesView } from './technologies/technologies.view';
import { SkillsView } from './skills/skills.view';

@Component({
  selector: 'main-view',
  templateUrl: './main.view.html',
  styleUrl: './main.view.scss',
  imports: [AboutMeView, TechnologiesView, SkillsView],
})
export class MainView {}
