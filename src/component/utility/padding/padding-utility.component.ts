import { Component } from '@angular/core';
import { UtilityBase } from '../../base/utility.base';
import { RegisterComponent } from '../../../generator/decorator/component.decorator';
import { BemLogicUtility } from '../../../utility/logic/bem-logic.utility';
import { PaddingDataUtilityModel } from '../../../core/model/utility/padding/padding-data-utility.model';
import { PaddingMetadataUtilityModel } from '../../../core/model/utility/padding/padding-metadata-utility.model';

@Component({
  selector: 'padding-utility-component',
  templateUrl: './padding-utility.component.html',
  styleUrl: '../../../style/component/utility/_padding-utility.component.scss',
  imports: UtilityBase.buildImports(),
})
@RegisterComponent({ component: 'utility', kind: 'padding' })
export class PaddingUtilityComponent extends UtilityBase<
  PaddingDataUtilityModel,
  PaddingMetadataUtilityModel
> {
  constructor() {
    super('padding');
  }

  buildClassNames() {
    const block = this.type;
    const { size } = this.metadata().extend;
    const main = BemLogicUtility.build(block);
    const mainPadding = BemLogicUtility.build(block, 'padding', size);
    return [main, mainPadding];
  }
}
