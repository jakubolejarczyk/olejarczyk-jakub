import { Injectable } from '@angular/core';
import { NodeModel } from '../../../generator/model/node/node.model';
import { TextControlBuilder } from '../../../generator/builder/control/text-control.builder';
import { SectionLayoutBuilder } from '../../../generator/builder/layout/section-layout.builder';
import { PaddingUtilityBuilder } from '../../../generator/builder/utility/padding-utility.builder';

@Injectable({ providedIn: 'root' })
export class ContactView {
  build(): NodeModel {
    return SectionLayoutBuilder.builder()
      .setId('contact')
      .setChildren([
        PaddingUtilityBuilder.builder()
          .setSize('lg')
          .setChildren([
            TextControlBuilder.builder().setColor('secondary').addText('Header 3').build('h3'),
            TextControlBuilder.builder().setColor('secondary').addText('Contact').build('p'),
          ])
          .build(),
      ])
      .build();
  }
}
