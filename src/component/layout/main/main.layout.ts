import { Component } from '@angular/core';
import { LayoutBase } from '../../base/layout.base';
import { RegisterComponent } from '../../../generator/decorator/component.decorator';
import { MainLayoutDataModel } from '../../model/data/layout/main-layout-data.model';
import { MainLayoutMetadataModel } from '../../model/metadata/layout/main-layout-metadata.model';

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
