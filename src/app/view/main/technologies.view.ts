import { Injectable } from '@angular/core';
import { NodeModel } from '../../../generator/model/node/node.model';
import { TextControlBuilder } from '../../../generator/builder/control/text-control.builder';
import { SectionLayoutBuilder } from '../../../generator/builder/layout/section-layout.builder';

@Injectable({ providedIn: 'root' })
export class TechnologiesView {
  buildNodes(): NodeModel {
    return SectionLayoutBuilder.build('technologies', [
      TextControlBuilder.build('h3', 'Header 3'),
      TextControlBuilder.build('p', 'Technologies'),
    ]);
  }
}
