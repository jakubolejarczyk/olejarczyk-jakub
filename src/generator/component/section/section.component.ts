import { Component } from '@angular/core';
import { RegisterComponent } from '../../decorator/component.decorator';
// import { BaseComponent } from '../../base/component.base';
// import { SectionComponentModel } from '../../model/component/section-component.model';
import { Generator } from '../../generator/generator';

@Component({
  selector: 'section-component',
  templateUrl: './section.component.html',
  styleUrl: './section.component.scss',
  imports: [Generator],
})
@RegisterComponent('section')
export class SectionComponent {} //extends BaseComponent<SectionComponentModel> {}
