import { Component } from '@angular/core';
import { LayoutBase } from '../../base/layout.base';
import { RegisterComponent } from '../../../generator/decorator/component.decorator';
import { SectionLayoutDataModel } from '../../model/data/layout/section-layout-data.model';
import { SectionLayoutMetadataModel } from '../../model/metadata/layout/section-layout-metadata.model';

@Component({
  selector: 'section-layout',
  templateUrl: './section.layout.html',
  styleUrl: '../../../style/component/layout/_section.layout.scss',
  imports: LayoutBase.buildImports(),
})
@RegisterComponent({ kind: 'layout', layout: 'section' })
export class SectionLayout extends LayoutBase<SectionLayoutDataModel, SectionLayoutMetadataModel> {
  constructor() {
    super('section');
  }
}
