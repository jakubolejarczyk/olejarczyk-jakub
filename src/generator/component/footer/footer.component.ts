import { Component } from '@angular/core';
import { RegisterComponent } from '../../decorator/component.decorator';
import { ComponentKindEnum } from '../../enum/component-kind.enum';
import { BaseGenerator } from '../../base/base-generator';
import { Generator } from '../../generator/generator';

@Component({
  selector: 'footer-component',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  imports: [Generator],
})
@RegisterComponent(ComponentKindEnum.footer)
export class FooterComponent extends BaseGenerator {}
