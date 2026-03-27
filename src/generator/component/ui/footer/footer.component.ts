import { Component } from '@angular/core';
import { Generator } from '../../../generator/generator';
import { BaseGenerator } from '../../../base/base-generator';
import { RegisterComponent } from '../../../decorator/component.decorator';
import { ComponentKindEnum } from '../../../enum/component-kind.enum';

@Component({
  selector: 'footer-component',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  imports: [Generator],
})
@RegisterComponent(ComponentKindEnum.footer)
export class FooterComponent extends BaseGenerator {}
