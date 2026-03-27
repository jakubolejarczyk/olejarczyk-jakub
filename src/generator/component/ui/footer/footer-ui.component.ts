import { Component } from '@angular/core';
import { RegisterComponentUi } from '../../decorator/component-ui.decorator';
import { ComponentUiKindEnum } from '../../enum/component-ui-kind.enum';
import { GeneratorCore } from '../../../generator/generator-core';
import { Generator } from '../../../generator/generator';
import { FooterDataModel } from '../../../data/footer-data.model';

@Component({
  selector: 'footer-ui-component',
  templateUrl: './footer-ui.component.html',
  styleUrl: './footer-ui.component.scss',
  imports: [Generator],
})
@RegisterComponentUi(ComponentUiKindEnum.footer)
export class FooterUiComponent extends GeneratorCore<FooterDataModel> {}
