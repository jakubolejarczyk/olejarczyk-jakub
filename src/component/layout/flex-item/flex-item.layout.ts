import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RegisterComponent } from '../../../generator/decorator/component.decorator';
import { Generator } from '../../../generator/generator/generator';
import { LayoutBase } from '../../base/layout.base';
import { FlexItemDataModel } from '../../model/data/layout/flex-item-data.model';
import { FlexItemMetadataModel } from '../../model/metadata/layout/flex-item-metadata.model';

@Component({
  selector: 'flex-item-layout',
  templateUrl: './flex-item.layout.html',
  styleUrl: '../../../style/component/layout/_flex-item.layout.scss',
  imports: [CommonModule, Generator],
})
@RegisterComponent('flex-item')
export class FlexItemLayout extends LayoutBase<FlexItemDataModel, FlexItemMetadataModel> {
  constructor() {
    super('flex-item');
  }
}
