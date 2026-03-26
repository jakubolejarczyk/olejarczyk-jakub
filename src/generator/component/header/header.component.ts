import { Component } from '@angular/core';
import { RegisterComponent } from '../../decorator/component.decorator';
import { ComponentKindEnum } from '../../enum/component-kind.enum';
import { BaseGenerator } from '../../base/base-generator';
import { Generator } from '../../generator/generator';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  imports: [Generator],
})
@RegisterComponent(ComponentKindEnum.header)
export class HeaderComponent extends BaseGenerator {}
