import { Component } from '@angular/core';
import { Generator } from '../../../generator/generator';
import { BaseGenerator } from '../../../base/base-generator';
import { RegisterComponent } from '../../../decorator/component.decorator';
import { ComponentKindEnum } from '../../../enum/component-kind.enum';

@Component({
  selector: 'section-component',
  templateUrl: './section.component.html',
  styleUrl: './section.component.scss',
  imports: [Generator],
})
@RegisterComponent(ComponentKindEnum.section)
export class SectionComponent extends BaseGenerator {}
