import { Injectable } from '@angular/core';
import { NodeModel } from '../../../generator/model/node/node.model';
import { TextControlBuilder } from '../../../generator/builder/control/text-control.builder';
import { SectionLayoutBuilder } from '../../../generator/builder/layout/section-layout.builder';

@Injectable({ providedIn: 'root' })
export class TechnologiesView {
  buildNodes(): NodeModel {
    return SectionLayoutBuilder.builder()
      .setId('technologies')
      .setChildren([
        TextControlBuilder.builder().addText('Header 3').build('h3'),
        TextControlBuilder.builder().addText('Technologies').build('p'),
      ])
      .build();
  }
}
