import { Injectable } from '@angular/core';
import { NodeModel } from '../../../generator/model/node/node.model';
import { TextControlBuilder } from '../../../generator/builder/control/text-control.builder';
import { SectionLayoutBuilder } from '../../../generator/builder/layout/section-layout.builder';

@Injectable({ providedIn: 'root' })
export class EducationView {
  buildNodes(): NodeModel {
    return SectionLayoutBuilder.builder()
      .setId('education')
      .setChildren([
        TextControlBuilder.builder().addText('Header 3').build('h3'),
        TextControlBuilder.builder().addText('Education').build('p'),
      ])
      .build();
  }
}
