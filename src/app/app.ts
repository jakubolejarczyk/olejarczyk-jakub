import { Component } from '@angular/core';
import { Generator } from '../generator/generator/generator';
import { NodeModel } from '../generator/model/node/node.model';
import { ComponentUiKindEnum } from '../generator/model/type/component-kind.type';

@Component({
  selector: 'app',
  template: '<generator [nodes]="nodes"></generator>',
  imports: [Generator],
})
export class App {
  nodes: NodeModel[] = [
    {
      data: {
        kind: ComponentUiKindEnum.footer,
        value: {},
      },
      children: [
        {
          data: {
            kind: ComponentUiKindEnum.copyright,
            value: {
              symbol: '©',
              year: {
                kind: 'range',
                from: 2026,
                to: 'current',
              },
              ownerName: 'Jakub Olejarczyk',
              rightsStatement: 'All Rights Reserved.',
            },
          },
        },
      ],
    },
  ];
}
