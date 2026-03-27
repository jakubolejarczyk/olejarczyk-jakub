import { Component } from '@angular/core';
import { Generator } from '../../../generator/generator';
import { BaseGenerator } from '../../../base/base-generator';
import { RegisterComponent } from '../../../decorator/component.decorator';
import { ComponentKindEnum } from '../../../enum/component-kind.enum';

@Component({
  selector: 'main-component',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  imports: [Generator],
})
@RegisterComponent(ComponentKindEnum.main)
export class MainComponent extends BaseGenerator {}
