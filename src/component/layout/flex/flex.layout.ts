import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RegisterComponent } from '../../../generator/decorator/component.decorator';
import { Generator } from '../../../generator/generator/generator';
import { LayoutBase } from '../../base/layout.base';
import { FlexDataModel } from '../../model/data/layout/flex-data.model';
import { FlexMetadataModel } from '../../model/metadata/layout/flex-metadata.model';

@Component({
  selector: 'flex-layout',
  templateUrl: './flex.layout.html',
  styleUrl: '../../../style/component/layout/_flex.layout.scss',
  imports: [CommonModule, Generator],
})
@RegisterComponent('flex')
export class FlexLayout extends LayoutBase<FlexDataModel, FlexMetadataModel> {
  constructor() {
    super('flex');
  }
}
