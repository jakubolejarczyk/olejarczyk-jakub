import { Component } from '@angular/core';
import { RegisterComponent } from '../../../generator/decorator/component.decorator';
import { UtilityBase } from '../../base/utility.base';
import { FlexItemDataUtilityModel } from '../../../core/model/utility/flex-item/flex-item-data-utility.model';
import { FlexItemMetadataUtilityModel } from '../../../core/model/utility/flex-item/flex-item-metadata-utility.model';

@Component({
  selector: 'flex-item-utility-component',
  templateUrl: './flex-item-utility.component.html',
  styleUrl: '../../../style/component/utility/_flex-item-utility.component.scss',
  imports: UtilityBase.buildImports(),
})
@RegisterComponent({ kind: 'utility', utility: 'flex-item' })
export class FlexItemUtilityComponent extends UtilityBase<
  FlexItemDataUtilityModel,
  FlexItemMetadataUtilityModel
> {
  constructor() {
    super('flex-item');
  }
}
