import { Component } from '@angular/core';
import { RegisterComponentUi } from '../../decorator/component-ui.decorator';
import { ComponentUiKindEnum } from '../../../model/type/component-kind.type';
import { GeneratorCore } from '../../../generator/generator-core';
import { Generator } from '../../../generator/generator';
import { MainDataModel } from '../../../model/data/main-data.model';

@Component({
  selector: 'main-ui-component',
  templateUrl: './main-ui.component.html',
  styleUrl: './main-ui.component.scss',
  imports: [Generator],
})
@RegisterComponentUi(ComponentUiKindEnum.main)
export class MainUiComponent extends GeneratorCore<MainDataModel> {}
