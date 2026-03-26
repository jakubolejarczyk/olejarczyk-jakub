import { Component } from '@angular/core';
import { RegisterComponent } from '../../decorator/component.decorator';
import { ComponentKindEnum } from '../../enum/component-kind.enum';
import { BaseGenerator } from '../../base/base-generator';
import { Generator } from '../../generator/generator';

@Component({
  selector: 'main-component',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  imports: [Generator],
})
@RegisterComponent(ComponentKindEnum.main)
export class MainComponent extends BaseGenerator {}
