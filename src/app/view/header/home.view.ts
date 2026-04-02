import { Injectable } from '@angular/core';
import { NodeModel } from '../../../generator/model/node/node.model';
import { TextControlBuilder } from '../../../generator/builder/control/text-control.builder';
import { SectionLayoutBuilder } from '../../../generator/builder/layout/section-layout.builder';

@Injectable({ providedIn: 'root' })
export class HomeView {
  build(): NodeModel {
    return SectionLayoutBuilder.build('home', [
      TextControlBuilder.build('h2', 'Header 2'),
      TextControlBuilder.build('p', 'Home'),
    ]);
  }
}
