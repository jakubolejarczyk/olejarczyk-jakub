import { Component } from '@angular/core';
import { EducationView } from './education/education.view';

@Component({
  selector: 'main-view',
  templateUrl: './main.view.html',
  styleUrl: './main.view.scss',
  imports: [EducationView],
})
export class MainView {}
