import { Injectable } from '@angular/core';
import { NodeModel } from '../../../generator/model/node/node.model';
import { TextControlBuilder } from '../../../generator/builder/control/text-control.builder';
import { SectionLayoutBuilder } from '../../../generator/builder/layout/section-layout.builder';
import { StoreCore } from '../../store/store.core';
import { FlexUtilityBuilder } from '../../../generator/builder/utility/flex-utility.builder';

@Injectable({ providedIn: 'root' })
export class CopyrightView extends StoreCore {
  firstname = this.store.selectSignal((state) => state.personal.firstname);
  lastname = this.store.selectSignal((state) => state.personal.lastname);

  build(): NodeModel {
    return SectionLayoutBuilder.build('copyright', [
      FlexUtilityBuilder.build('center', 'center', [
        TextControlBuilder.build('p', '© 2026', this.firstname(), this.lastname()),
        TextControlBuilder.build('p', 'All rights reserved.'),
      ]),
    ]);
  }
}
