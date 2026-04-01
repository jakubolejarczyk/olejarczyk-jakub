import { Component } from '@angular/core';
import { LayoutBase } from '../../base/layout.base';
import { RegisterComponent } from '../../../generator/decorator/component.decorator';
import { FooterLayoutDataModel } from '../../model/data/layout/footer-layout-data.model';
import { FooterLayoutMetadataModel } from '../../model/metadata/layout/footer-layout-metadata.model';

@Component({
  selector: 'footer-layout',
  templateUrl: './footer.layout.html',
  styleUrl: '../../../style/component/layout/_footer.layout.scss',
  imports: LayoutBase.buildImports(),
})
@RegisterComponent({ kind: 'layout', layout: 'footer' })
export class FooterLayout extends LayoutBase<FooterLayoutDataModel, FooterLayoutMetadataModel> {
  constructor() {
    super('footer');
  }
}
