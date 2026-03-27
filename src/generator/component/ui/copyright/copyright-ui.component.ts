import { Component } from '@angular/core';
import { RegisterComponentUi } from '../../decorator/component-ui.decorator';
import { ComponentUiKindEnum } from '../../enum/component-ui-kind.enum';
import { GeneratorCore } from '../../../generator/generator-core';
import { Generator } from '../../../generator/generator';

@Component({
  selector: 'copyright-ui-component',
  templateUrl: './copyright-ui.component.html',
  styleUrl: './copyright-ui.component.scss',
  imports: [Generator],
})
@RegisterComponentUi(ComponentUiKindEnum.copyright)
export class CopyrightUiComponent extends GeneratorCore {}
