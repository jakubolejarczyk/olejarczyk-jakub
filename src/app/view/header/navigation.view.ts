import { Injectable } from '@angular/core';
import { NodeModel } from '../../../generator/model/node/node.model';
import { TextControlBuilder } from '../../../generator/builder/control/text-control.builder';
import { SectionLayoutBuilder } from '../../../generator/builder/layout/section-layout.builder';

@Injectable({ providedIn: 'root' })
export class NavigationView {
  build(): NodeModel {
    return SectionLayoutBuilder.build('navigation', [
      TextControlBuilder.build('h1', 'Header 1'),
      TextControlBuilder.build('p', 'Navigation'),
    ]);
  }
}
