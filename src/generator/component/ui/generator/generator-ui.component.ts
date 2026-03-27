import { Component, input } from '@angular/core';
import { Generator } from '../../../generator/generator';
import { RegisterComponentUi } from '../../decorator/component-ui.decorator';
import { ComponentUiKindEnum } from '../../enum/component-ui-kind.enum';
import { TreeModel } from '../../../model/tree.model';

@Component({
  selector: 'generator-ui-component',
  templateUrl: './generator-ui.component.html',
  styleUrl: './generator-ui.component.scss',
  imports: [Generator],
})
@RegisterComponentUi(ComponentUiKindEnum.generator)
export class GeneratorUiComponent {
  tree = input<TreeModel>([]);
}
