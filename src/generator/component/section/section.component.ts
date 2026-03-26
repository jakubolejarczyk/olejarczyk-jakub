import { Component } from '@angular/core';
import { RegisterComponent } from '../../decorator/component.decorator';
import { ComponentKindEnum } from '../../enum/component-kind.enum';
import { BaseGenerator } from '../../base/base-generator';
import { Generator } from '../../generator/generator';

@Component({
  selector: 'section-component',
  templateUrl: './section.component.html',
  styleUrl: './section.component.scss',
  imports: [Generator],
})
@RegisterComponent(ComponentKindEnum.section)
export class SectionComponent extends BaseGenerator {}
