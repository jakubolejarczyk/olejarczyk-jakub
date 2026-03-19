import { Component } from '@angular/core';
import { EducationView } from './education/education.view';

@Component({
  selector: 'main-view',
  templateUrl: './main.view.html',
  imports: [EducationView],
})
export class MainView {}
