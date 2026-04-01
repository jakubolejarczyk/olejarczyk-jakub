import { Component } from '@angular/core';
import { LayoutBase } from '../../base/layout.base';
import { RegisterComponent } from '../../../generator/decorator/component.decorator';
import { HeaderLayoutDataModel } from '../../model/data/layout/header-layout-data.model';
import { HeaderLayoutMetadataModel } from '../../model/metadata/layout/header-layout-metadata.model';

@Component({
  selector: 'header-layout',
  templateUrl: './header.layout.html',
  styleUrl: '../../../style/component/layout/_header.layout.scss',
  imports: LayoutBase.buildImports(),
})
@RegisterComponent({ kind: 'layout', layout: 'header' })
export class HeaderLayout extends LayoutBase<HeaderLayoutDataModel, HeaderLayoutMetadataModel> {
  constructor() {
    super('header');
  }
}
