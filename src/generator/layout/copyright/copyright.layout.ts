import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LayoutBase } from '../../base/layout.base';
import { CopyrightDataModel } from '../../model/data/copyright-data.model';
import { CopyrightMetadataModel } from '../../model/metadata/copyright-metadata.model';

@Component({
  selector: 'copyright-layout',
  templateUrl: './copyright.layout.html',
  styleUrl: '../../style/layout/copyright.layout.scss',
  imports: [CommonModule],
})
export class CopyrightComponent extends LayoutBase<CopyrightDataModel, CopyrightMetadataModel> {
  constructor() {
    super('copyright');
  }
}
