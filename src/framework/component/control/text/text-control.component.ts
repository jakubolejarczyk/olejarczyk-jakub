import { Component } from '@angular/core';
import { ControlBase } from '../../base/control.base';
import { RegisterComponent } from '../../../decorator/component.decorator';
import { TextComplexModel } from '../../../core/model/complex/control-complex.model';
import { BemUtility } from '../../../utility/bem.utility';
import { buildColor } from '../../../mapping/builder/color.builder';
import { buildFont } from '../../../mapping/builder/font.builder';
import { buildSize } from '../../../mapping/builder/size.builder';
import { buildWeight } from '../../../mapping/builder/weight.builder';

@Component({
  selector: 'text-control-component',
  templateUrl: './text-control.component.html',
  styleUrl: '../../../../framework/style/component/control/_text-control.component.scss',
  imports: ControlBase.buildImports(),
})
@RegisterComponent({ component: 'control', kind: 'text' })
export class TextControlComponent extends ControlBase<TextComplexModel> {
  constructor() {
    super('text');
  }

  buildValue() {
    return this.complex().data.extend.values.join(' ');
  }

  buildClassNames() {
    const { style } = this.complex();
    const block = this.type;
    const main = BemUtility.build(block);
    const textColor = buildColor('text', style.extend.textColor);
    const textFont = buildFont('text', style.extend.textFont);
    const paddingSize = buildSize('padding', style.extend.paddingSize);
    const textSize = buildSize('text', style.extend.textSize);
    const textWeight = buildWeight('text', style.extend.textWeight);
    return [main, textColor, textFont, paddingSize, textSize, textWeight];
  }
}
