import { Component } from '@angular/core';
import { RegisterComponentUi } from '../../decorator/component-ui.decorator';
import { ComponentUiKindEnum } from '../../../model/type/component-kind.type';
import { GeneratorCore } from '../../../generator/generator-core';
import { Generator } from '../../../generator/generator';
import { CopyrightDataModel } from '../../../model/data/copyright-data.model';

@Component({
  selector: 'copyright-ui-component',
  templateUrl: './copyright-ui.component.html',
  styleUrl: './copyright-ui.component.scss',
  imports: [Generator],
})
@RegisterComponentUi(ComponentUiKindEnum.copyright)
export class CopyrightUiComponent extends GeneratorCore<CopyrightDataModel> {}
