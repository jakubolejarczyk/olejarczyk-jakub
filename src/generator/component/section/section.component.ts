import { Component } from '@angular/core';
import { RegisterComponent } from '../../decorator/component.decorator';
import { BaseComponent } from '../../base/base.component';
import { SectionComponentModel } from '../../model/component/section-component.model';

@Component({
  selector: 'section-component',
  templateUrl: './section.component.html',
  styleUrl: './section.component.scss',
})
@RegisterComponent('section')
export class SectionComponent extends BaseComponent<SectionComponentModel> {}
