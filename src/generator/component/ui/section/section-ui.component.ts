import { Component } from '@angular/core';
import { RegisterComponentUi } from '../../decorator/component-ui.decorator';
import { ComponentUiKindEnum } from '../../../model/type/component-kind.type';
import { GeneratorCore } from '../../../generator/generator-core';
import { Generator } from '../../../generator/generator';
import { SectionDataModel } from '../../../model/data/section-data.model';

@Component({
  selector: 'section-ui-component',
  templateUrl: './section-ui.component.html',
  styleUrl: './section-ui.component.scss',
  imports: [Generator],
})
@RegisterComponentUi(ComponentUiKindEnum.section)
export class SectionUiComponent extends GeneratorCore<SectionDataModel> {}
