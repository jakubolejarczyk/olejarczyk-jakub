import { Injectable } from '@angular/core';
import { NodeModel } from '../../../generator/model/node/node.model';
import { TextControlBuilder } from '../../../generator/builder/control/text-control.builder';
import { SectionLayoutBuilder } from '../../../generator/builder/layout/section-layout.builder';
import { StoreCore } from '../../store/store.core';

@Injectable({ providedIn: 'root' })
export class CopyrightView extends StoreCore {
  firstname = this.store.selectSignal((state) => state.personal.firstname);

  lastname = this.store.selectSignal((state) => state.personal.lastname);

  build(): NodeModel {
    return SectionLayoutBuilder.build('copyright', [
      TextControlBuilder.build('h3', 'Header 3'),
      TextControlBuilder.build('p', this.firstname()),
      TextControlBuilder.build('p', this.lastname()),
    ]);
  }
}
