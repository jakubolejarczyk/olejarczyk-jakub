import { Component } from '@angular/core';
import { RegisterComponentUi } from '../../decorator/component-ui.decorator';
import { ComponentUiKindEnum } from '../../enum/component-ui-kind.enum';
import { GeneratorCore } from '../../../generator/generator-core';
import { Generator } from '../../../generator/generator';

@Component({
  selector: 'section-ui-component',
  templateUrl: './section-ui.component.html',
  styleUrl: './section-ui.component.scss',
  imports: [Generator],
})
@RegisterComponentUi(ComponentUiKindEnum.section)
export class SectionUiComponent extends GeneratorCore {}
