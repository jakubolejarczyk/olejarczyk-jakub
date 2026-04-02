import { Component } from '@angular/core';
import { LayoutBase } from '../../base/layout.base';
import { RegisterComponent } from '../../../generator/decorator/component.decorator';
import { HeaderDataLayoutModel } from '../../../core/model/layout/header/header-data-layout.model';
import { HeaderMetadataLayoutModel } from '../../../core/model/layout/header/header-metadata-layout.model';

@Component({
  selector: 'header-layout-component',
  templateUrl: './header-layout.component.html',
  styleUrl: '../../../style/component/layout/_header-layout.component.scss',
  imports: LayoutBase.buildImports(),
})
@RegisterComponent({ component: 'layout', kind: 'header' })
export class HeaderLayoutComponent extends LayoutBase<
  HeaderDataLayoutModel,
  HeaderMetadataLayoutModel
> {
  constructor() {
    super('header');
  }
}
