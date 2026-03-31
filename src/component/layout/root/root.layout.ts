import { Component } from '@angular/core';
import { LayoutBase } from '../../base/layout.base';
import { RegisterComponent } from '../../../generator/decorator/component.decorator';
import { RootLayoutDataModel } from '../../model/data/layout/root-layout-data.model';
import { RootLayoutMetadataModel } from '../../model/metadata/layout/root-layout-metadata.model';

@Component({
  selector: 'root-layout',
  templateUrl: './root.layout.html',
  styleUrl: '../../../style/component/layout/_root.layout.scss',
  imports: LayoutBase.buildImports(),
})
@RegisterComponent({ kind: 'layout', layout: 'root' })
export class RootLayout extends LayoutBase<RootLayoutDataModel, RootLayoutMetadataModel> {
  constructor() {
    super('root');
  }
}
