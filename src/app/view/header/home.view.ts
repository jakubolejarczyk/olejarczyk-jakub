import { Injectable } from '@angular/core';
import { NodeModel } from '../../../generator/model/node/node.model';
import { TextControlBuilder } from '../../../generator/builder/control/text-control.builder';
import { SectionLayoutBuilder } from '../../../generator/builder/layout/section-layout.builder';
import { PaddingUtilityBuilder } from '../../../generator/builder/utility/padding-utility.builder';

@Injectable({ providedIn: 'root' })
export class HomeView {
  build(): NodeModel {
    return SectionLayoutBuilder.builder()
      .setId('home')
      .setChildren([
        PaddingUtilityBuilder.builder()
          .setSize('lg')
          .setChildren([
            TextControlBuilder.builder().setColor('secondary').addText('Header 2').build('h2'),
            TextControlBuilder.builder().setColor('secondary').addText('Home').build('p'),
          ])
          .build(),
      ])
      .build();
  }
}
