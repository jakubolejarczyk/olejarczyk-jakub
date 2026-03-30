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
      layout: {
        kind: 'copyright',
        data: {
          base: {},
          extend: {
            symbol: '©',
            year: {
              kind: 'current',
            },
            ownerName: 'Jakub Olejarczyk',
            rightsStatements: 'All rights reserved.',
          },
        },
        metadata: {
          base: {
            palette: 'primary',
          },
          extend: {},
        },
      },
      children: [],
    },
  ];
}
