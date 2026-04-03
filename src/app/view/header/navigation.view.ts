import { Injectable } from '@angular/core';
import { NodeModel } from '../../../generator/model/node/node.model';
import { TextControlBuilder } from '../../../generator/builder/control/text-control.builder';
import { SectionLayoutBuilder } from '../../../generator/builder/layout/section-layout.builder';

@Injectable({ providedIn: 'root' })
export class NavigationView {
  build(): NodeModel {
    return SectionLayoutBuilder.builder()
      .setId('navigation')
      .setChildren([
        TextControlBuilder.builder().addText('Header 1').build('h1'),
        TextControlBuilder.builder().addText('Navigation').build('p'),
      ])
      .build();
  }
}
