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
        kind: 'contact',
        data: {
          base: {},
          extend: {
            firstName: 'Jakub',
            lastName: 'Olejarczyk',
            motto: ['I write code that works today', 'and will not fail tomorrow.'],
            socialMedias: [
              {
                label: 'LinkedIn',
                url: 'https://www.linkedin.com/in/jakub-olejarczyk',
              },
              {
                label: 'GitHub',
                url: 'https://github.com/jakubolejarczyk',
              },
              {
                label: 'LeetCode',
                url: 'https://leetcode.com/u/JakubOlejarczyk',
              },
            ],
            email: 'jakub.olejarczyk@outlook.com',
            phone: '+48 501 007 197',
            country: 'Poland',
            city: 'Kielce',
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
