import { Injectable } from '@angular/core';
import { NodeModel } from '../../../generator/model/node/node.model';
import { TextControlBuilder } from '../../../generator/builder/control/text-control.builder';
import { SectionLayoutBuilder } from '../../../generator/builder/layout/section-layout.builder';
import { StoreCore } from '../../store/store.core';
import { FlexUtilityBuilder } from '../../../generator/builder/utility/flex-utility.builder';
import { PaddingUtilityBuilder } from '../../../generator/builder/utility/padding-utility.builder';

@Injectable({ providedIn: 'root' })
export class CopyrightView extends StoreCore {
  firstname = this.store.selectSignal((state) => state.personal.firstname);
  lastname = this.store.selectSignal((state) => state.personal.lastname);

  build(): NodeModel {
    return SectionLayoutBuilder.builder()
      .setId('copyright')
      .setChildren([
        PaddingUtilityBuilder.builder()
          .setSize('lg')
          .setChildren([
            FlexUtilityBuilder.builder()
              .setAlignItems('center')
              .setJustifyContent('center')
              .setGap('xs')
              .setChildren([
                TextControlBuilder.builder()
                  .addText('© 2026')
                  .addText(this.firstname())
                  .addText(this.lastname().concat('.'))
                  .build('p'),
                TextControlBuilder.builder().addText('All rights reserved.').build('p'),
              ])
              .build(),
          ])
          .build(),
      ])
      .build();
  }
}
