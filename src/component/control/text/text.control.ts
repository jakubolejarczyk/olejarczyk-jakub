import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlBase } from '../../base/control.base';
import { TextControlDataModel } from '../../model/data/control/text-control-data.model';
import { TextControlMetadataModel } from '../../model/metadata/control/text-control-metadata.model';
import { BemUtility } from '../../../utility/bem.utility';
import { RegisterComponent } from '../../../generator/decorator/component.decorator';

@Component({
  selector: 'text-control',
  templateUrl: './text.control.html',
  styleUrl: '../../../style/control/_text.control.scss',
  imports: [CommonModule],
})
@RegisterComponent('text')
export class TextControl extends ControlBase<TextControlDataModel, TextControlMetadataModel> {
  constructor() {
    super('text');
  }

  protected override buildMainClassList() {
    const block = this.type;
    const { type } = this.metadata().extend;
    const mainClass = BemUtility.build(block);
    const typeClass = BemUtility.build(block, type);
    return [mainClass, typeClass];
  }
}
