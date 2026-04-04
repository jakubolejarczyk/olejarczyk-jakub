import { Component } from '@angular/core';
import { ControlBase } from '../../base/control.base';
import { RegisterComponent } from '../../../generator/decorator/component.decorator';
import { TextDataControlModel } from '../../../core/model/control/text/text-data-control.model';
import { TextMetadataControlModel } from '../../../core/model/control/text/text-metadata-control.model';
import { BemLogicUtility } from '../../../utility/logic/bem-logic.utility';
import { EMPTY_SPACE } from '../../../core/const/core.const';

@Component({
  selector: 'text-control-component',
  templateUrl: './text-control.component.html',
  styleUrl: '../../../style/component/control/_text-control.component.scss',
  imports: ControlBase.buildImports(),
})
@RegisterComponent({ component: 'control', kind: 'text' })
export class TextControlComponent extends ControlBase<
  TextDataControlModel,
  TextMetadataControlModel
> {
  constructor() {
    super('text');
  }

  buildValue() {
    return this.data().extend.values.join(EMPTY_SPACE);
  }

  buildClassNames() {
    const block = this.type;
    const { color } = this.metadata().base;
    const { type } = this.metadata().extend;
    const main = BemLogicUtility.build(block);
    const mainColor = BemLogicUtility.build(block, 'color', color);
    const mainType = BemLogicUtility.build(block, type);
    return [main, mainColor, mainType];
  }
}
