import { Component } from '@angular/core';
import { Generator } from '../generator/generator/generator';
import { TreeModel } from '../generator/model/tree.model';
import { ComponentKindEnum } from '../generator/enum/component-kind.enum';

@Component({
  selector: 'app',
  template: '<generator [tree]="tree"></generator>',
  imports: [Generator],
})
export class App {
  tree: TreeModel = [
    {
      kind: ComponentKindEnum.footer,
      children: [
        {
          kind: ComponentKindEnum.section,
        },
        {
          kind: ComponentKindEnum.section,
        },
      ],
    },
  ];
}
