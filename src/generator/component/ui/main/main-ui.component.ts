import { Component } from '@angular/core';
import { RegisterComponentUi } from '../../decorator/component-ui.decorator';
import { ComponentUiKindEnum } from '../../enum/component-ui-kind.enum';
import { GeneratorCore } from '../../../generator/generator-core';
import { Generator } from '../../../generator/generator';
import { MainDataModel } from '../../../data/main-data.model';

@Component({
  selector: 'main-ui-component',
  templateUrl: './main-ui.component.html',
  styleUrl: './main-ui.component.scss',
  imports: [Generator],
})
@RegisterComponentUi(ComponentUiKindEnum.main)
export class MainUiComponent extends GeneratorCore<MainDataModel> {}
