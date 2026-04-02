import { Component } from '@angular/core';
import { LayoutBase } from '../../base/layout.base';
import { RegisterComponent } from '../../../generator/decorator/component.decorator';
import { MainLayoutDataModel } from '../../../core/model/layout/main/main-data-layout.model';
import { MainLayoutMetadataModel } from '../../../core/model/layout/main/main-metadata-layout.model';

@Component({
  selector: 'main-layout',
  templateUrl: './main.layout.html',
  styleUrl: '../../../style/component/layout/_main.layout.scss',
  imports: LayoutBase.buildImports(),
})
@RegisterComponent({ kind: 'layout', layout: 'main' })
export class MainLayout extends LayoutBase<MainLayoutDataModel, MainLayoutMetadataModel> {
  constructor() {
    super('main');
  }
}
