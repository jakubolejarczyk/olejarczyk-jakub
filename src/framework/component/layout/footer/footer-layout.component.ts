import { Component } from '@angular/core';
import { LayoutBase } from '../../base/layout.base';
import { RegisterComponent } from '../../../decorator/component.decorator';
import { FooterDataLayoutModel } from '../../../core/model/layout/footer/footer-data-layout.model';
import { FooterMetadataLayoutModel } from '../../../core/model/layout/footer/footer-metadata-layout.model';

@Component({
  selector: 'footer-layout-component',
  templateUrl: './footer-layout.component.html',
  styleUrl: '../../../framework/style/component/layout/_footer-layout.component.scss',
  imports: LayoutBase.buildImports(),
})
@RegisterComponent({ component: 'layout', kind: 'footer' })
export class FooterLayoutComponent extends LayoutBase<
  FooterDataLayoutModel,
  FooterMetadataLayoutModel
> {
  constructor() {
    super('footer');
  }
}
