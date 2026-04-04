import { Injectable } from '@angular/core';
import { NodeModel } from '../../../generator/model/node/node.model';
import { TextControlBuilder } from '../../../generator/builder/control/text-control.builder';
import { SectionLayoutBuilder } from '../../../generator/builder/layout/section-layout.builder';
import { PaddingUtilityBuilder } from '../../../generator/builder/utility/padding-utility.builder';

@Injectable({ providedIn: 'root' })
export class ResumeView {
  buildNodes(): NodeModel {
    return SectionLayoutBuilder.builder()
      .setId('resume')
      .setColor('secondary')
      .setChildren([
        PaddingUtilityBuilder.builder()
          .setSize('lg')
          .setChildren([
            TextControlBuilder.builder().setColor('accent').addText('Header 3').build('h3'),
            TextControlBuilder.builder().setColor('accent').addText('Resume').build('p'),
          ])
          .build(),
      ])
      .build();
  }
}
