import { Component } from '@angular/core';
import { Generator } from '../../generator/generator';
import { RegisterComponent } from '../../decorator/component.decorator';
import { ComponentKindEnum } from '../../enum/component-kind.enum';
import { BaseGenerator } from '../../base/base-generator';

@Component({
  selector: 'copyright-component',
  templateUrl: './copyright.component.html',
  styleUrl: './copyright.component.scss',
  imports: [Generator],
})
@RegisterComponent(ComponentKindEnum.copyright)
export class CopyrightComponent extends BaseGenerator {}
