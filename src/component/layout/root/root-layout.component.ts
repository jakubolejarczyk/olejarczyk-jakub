import { Component } from '@angular/core';
import { LayoutBase } from '../../base/layout.base';
import { RegisterComponent } from '../../../generator/decorator/component.decorator';
import { RootDataLayoutModel } from '../../../core/model/layout/root/root-data-layout.model';
import { RootMetadataLayoutModel } from '../../../core/model/layout/root/root-metadata-layout.model';

@Component({
  selector: 'root-layout-component',
  templateUrl: './root-layout.component.html',
  styleUrl: '../../../style/component/layout/_root-layout.component.scss',
  imports: LayoutBase.buildImports(),
})
@RegisterComponent({ component: 'layout', kind: 'root' })
export class RootLayoutComponent extends LayoutBase<RootDataLayoutModel, RootMetadataLayoutModel> {
  constructor() {
    super('root');
  }
}
