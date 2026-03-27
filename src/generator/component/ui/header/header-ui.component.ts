import { Component } from '@angular/core';
import { RegisterComponentUi } from '../../decorator/component-ui.decorator';
import { ComponentUiKindEnum } from '../../../model/type/component-kind.type';
import { GeneratorCore } from '../../../generator/generator-core';
import { Generator } from '../../../generator/generator';
import { HeaderDataModel } from '../../../model/data/header-data.model';

@Component({
  selector: 'header-ui-component',
  templateUrl: './header-ui.component.html',
  styleUrl: './header-ui.component.scss',
  imports: [Generator],
})
@RegisterComponentUi(ComponentUiKindEnum.header)
export class HeaderUiComponent extends GeneratorCore<HeaderDataModel> {}
