import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutBase } from '../../base/layout.base';
import { CopyrightDataModel } from '../../model/data/copyright-data.model';
import { CopyrightMetadataModel } from '../../model/metadata/copyright-metadata.model';
import { CopyrightService } from './copyright.service';
import { RegisterComponent } from '../../../generator/decorator/component.decorator';

@Component({
  selector: 'copyright-layout',
  templateUrl: './copyright.layout.html',
  styleUrl: '../../../style/layout/copyright.layout.scss',
  imports: [CommonModule],
  providers: [CopyrightService],
})
@RegisterComponent({ kind: 'layout', layout: 'copyright' })
export class CopyrightLayout extends LayoutBase<CopyrightDataModel, CopyrightMetadataModel> {
  service = inject(CopyrightService);

  constructor() {
    super('copyright');
  }
}
