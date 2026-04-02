import { Component } from '@angular/core';
import { LayoutBase } from '../../base/layout.base';
import { RegisterComponent } from '../../../generator/decorator/component.decorator';
import { HeaderLayoutDataModel } from '../../../core/model/layout/header/header-metadata-layout.model';
import { HeaderLayoutMetadataModel } from '../../../core/model/layout/header/header-data-layout.model';

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
