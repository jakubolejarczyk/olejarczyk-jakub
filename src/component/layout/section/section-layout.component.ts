import { Component } from '@angular/core';
import { LayoutBase } from '../../base/layout.base';
import { RegisterComponent } from '../../../generator/decorator/component.decorator';
import { SectionDataLayoutModel } from '../../../core/model/layout/section/section-data-layout.model';
import { SectionMetadataLayoutModel } from '../../../core/model/layout/section/section-metadata-layout.model';

@Component({
  selector: 'section-layout-component',
  templateUrl: './section-layout.component.html',
  styleUrl: '../../../style/component/layout/_section-layout.component.scss',
  imports: LayoutBase.buildImports(),
})
@RegisterComponent({ kind: 'layout', layout: 'section' })
export class SectionLayoutComponent extends LayoutBase<
  SectionDataLayoutModel,
  SectionMetadataLayoutModel
> {
  constructor() {
    super('section');
  }
}
