import { Component } from '@angular/core';
import { UtilityBase } from '../../base/utility.base';
import { RegisterComponent } from '../../../generator/decorator/component.decorator';
import { FlexDataUtilityModel } from '../../../core/model/utility/flex/flex-data-utility.model';
import { FlexMetadataUtilityModel } from '../../../core/model/utility/flex/flex-metadata-utility.model';
import { BemLogicUtility } from '../../../utility/logic/bem-logic.utility';

@Component({
  selector: 'flex-utility-component',
  templateUrl: './flex-utility.component.html',
  styleUrl: '../../../framework/style/component/utility/_flex-utility.component.scss',
  imports: UtilityBase.buildImports(),
})
@RegisterComponent({ component: 'utility', kind: 'flex' })
export class FlexUtilityComponent extends UtilityBase<
  FlexDataUtilityModel,
  FlexMetadataUtilityModel
> {
  constructor() {
    super('flex');
  }

  buildClassNames() {
    const block = this.type;
    const { alignItems, justifyContent, gap } = this.metadata().extend;
    const main = BemLogicUtility.build(block);
    const mainAlignItems = BemLogicUtility.build(block, 'align-items', alignItems);
    const mainJustifyContent = BemLogicUtility.build(block, 'justify-content', justifyContent);
    const mainGap = BemLogicUtility.build(block, 'gap', gap);
    return [main, mainAlignItems, mainJustifyContent, mainGap];
  }
}
