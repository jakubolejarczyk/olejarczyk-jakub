import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RegisterComponent } from '../../../generator/decorator/component.decorator';
import { Generator } from '../../../generator/generator/generator';
import { LayoutBase } from '../../base/layout.base';
import { FooterDataModel } from '../../model/data/layout/footer-data.model';
import { FooterMetadataModel } from '../../model/metadata/layout/footer-metadata.model';

@Component({
  selector: 'footer-layout',
  templateUrl: './footer.layout.html',
  styleUrl: '../../../style/component/layout/_footer.layout.scss',
  imports: [CommonModule, Generator],
})
@RegisterComponent({ kind: 'layout', layout: 'footer' })
export class FooterLayout extends LayoutBase<FooterDataModel, FooterMetadataModel> {
  constructor() {
    super('footer');
  }
}
