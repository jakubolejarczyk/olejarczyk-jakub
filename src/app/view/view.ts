import { Component } from '@angular/core';
import { StoreCore } from '../store/store.core';
import { Generator } from '../../generator/generator/generator';
import { TreeModel } from '../../generator/model/tree.model';
import { ComponentKindEnum } from '../../generator/enum/component-kind.enum';

@Component({
  selector: 'view',
  templateUrl: './view.html',
  imports: [Generator],
})
export class View extends StoreCore {
  tree: TreeModel = [
    {
      kind: ComponentKindEnum.header,
      children: [
        {
          kind: ComponentKindEnum.section,
        },
        {
          kind: ComponentKindEnum.section,
        },
      ],
    },
    {
      kind: ComponentKindEnum.main,
      children: [
        {
          kind: ComponentKindEnum.section,
          children: [
            {
              kind: ComponentKindEnum.section,
            },
            {
              kind: ComponentKindEnum.section,
            },
            {
              kind: ComponentKindEnum.section,
            },
          ],
        },
        {
          kind: ComponentKindEnum.section,
        },
        {
          kind: ComponentKindEnum.section,
        },
        {
          kind: ComponentKindEnum.section,
        },
        {
          kind: ComponentKindEnum.section,
        },
        {
          kind: ComponentKindEnum.section,
        },
      ],
    },
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
