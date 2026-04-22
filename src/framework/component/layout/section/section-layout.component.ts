import { Component } from '@angular/core';
import { LayoutBase } from '../../base/layout.base';
import { RegisterComponent } from '../../../decorator/component.decorator';
import { SectionDataLayoutModel } from '../../../core/model/layout/section/section-data-layout.model';
import { SectionMetadataLayoutModel } from '../../../core/model/layout/section/section-metadata-layout.model';
import { BemLogicUtility } from '../../../framework/utility/bem.utility';

@Component({
  selector: 'section-layout-component',
  templateUrl: './section-layout.component.html',
  styleUrl: '../../../framework/style/component/layout/_section-layout.component.scss',
  imports: LayoutBase.buildImports(),
})
@RegisterComponent({ component: 'layout', kind: 'section' })
export class SectionLayoutComponent extends LayoutBase<
  SectionDataLayoutModel,
  SectionMetadataLayoutModel
> {
  constructor() {
    super('section');
  }

  buildClassNames() {
    const block = this.type;
    const { color } = this.metadata().base;
    const main = BemLogicUtility.build(block);
    const mainColor = BemLogicUtility.build(block, 'color', color);
    return [main, mainColor];
  }
}
