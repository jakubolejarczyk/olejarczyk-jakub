import { Component } from '@angular/core';
import { AngularGenerator } from '../generator/api/angular-generator';

@Component({
  selector: 'app',
  template: '<angular-generator></angular-generator>',
  imports: [AngularGenerator],
})
export class App {}
