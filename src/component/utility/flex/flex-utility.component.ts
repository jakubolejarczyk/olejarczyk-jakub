import { Component } from '@angular/core';
import { UtilityBase } from '../../base/utility.base';
import { RegisterComponent } from '../../../generator/decorator/component.decorator';
import { FlexDataUtilityModel } from '../../../core/model/utility/flex/flex-data-utility.model';
import { FlexMetadataUtilityModel } from '../../../core/model/utility/flex/flex-metadata-utility.model';

@Component({
  selector: 'flex-utility-component',
  templateUrl: './flex-utility.component.html',
  styleUrl: '../../../style/component/utility/_flex-utility.component.scss',
  imports: UtilityBase.buildImports(),
})
@RegisterComponent({ kind: 'utility', utility: 'flex' })
export class FlexUtilityComponent extends UtilityBase<
  FlexDataUtilityModel,
  FlexMetadataUtilityModel
> {
  constructor() {
    super('flex');
  }
}
