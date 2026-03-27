import { Component } from '@angular/core';
import { Generator } from '../../../generator/generator';
import { BaseGenerator } from '../../../base/base-generator';
import { RegisterComponent } from '../../../decorator/component.decorator';
import { ComponentKindEnum } from '../../../enum/component-kind.enum';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  imports: [Generator],
})
@RegisterComponent(ComponentKindEnum.header)
export class HeaderComponent extends BaseGenerator {}
