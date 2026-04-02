import { Component } from '@angular/core';
import { LayoutBase } from '../../base/layout.base';
import { RegisterComponent } from '../../../generator/decorator/component.decorator';
import { MainDataLayoutModel } from '../../../core/model/layout/main/main-data-layout.model';
import { MainMetadataLayoutModel } from '../../../core/model/layout/main/main-metadata-layout.model';

@Component({
  selector: 'main-layout-component',
  templateUrl: './main-layout.component.html',
  styleUrl: '../../../style/component/layout/_main-layout.component.scss',
  imports: LayoutBase.buildImports(),
})
@RegisterComponent({ component: 'layout', kind: 'main' })
export class MainLayoutComponent extends LayoutBase<MainDataLayoutModel, MainMetadataLayoutModel> {
  constructor() {
    super('main');
  }
}
