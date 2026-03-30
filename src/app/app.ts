import { Component } from '@angular/core';
import { Generator } from '../generator/generator/generator';
import { GeneratorApi } from '../generator/api/generator.api';

@Component({
  selector: 'app',
  template: '<generator [nodes]="[]"></generator>',
  imports: [Generator],
})
export class App {
  constructor() {
    GeneratorApi.buildVariables({
      personal: {
        firstname: 'Jakub',
        lastname: 'Olejarczyk',
      },
    });
    GeneratorApi.buildStructure([
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
              ownerName: '%personal.firstname% %personal.lastname%',
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
      },
    ]);
  }
}
