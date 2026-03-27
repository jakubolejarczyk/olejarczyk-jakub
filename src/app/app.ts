import { Component } from '@angular/core';
import { Generator } from '../generator/generator/generator';
import { NodeModel } from '../generator/model/node/node.model';

@Component({
  selector: 'app',
  template: '<generator [nodes]="nodes"></generator>',
  imports: [Generator],
})
export class App {
  nodes: NodeModel[] = [
    {
      component: {
        kind: 'footer',
        data: {},
        metadata: {},
      },
      children: [
        {
          component: {
            kind: 'copyright',
            data: {
              symbol: '©',
              year: {
                kind: 'current',
              },
              ownerName: 'Jakub Olejarczyk',
              rightsStatements: 'All Rights Reserved.',
            },
            metadata: {},
          },
        },
      ],
    },
  ];
}
