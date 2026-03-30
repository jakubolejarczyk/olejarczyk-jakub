import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ControlBase } from '../../base/control.base';
import { TextControlDataModel } from '../../model/data/control/text-control-data.model';
import { TextControlMetadataModel } from '../../model/metadata/control/text-control-metadata.model';
import { BemUtility } from '../../../utility/bem.utility';

@Component({
  selector: 'text-control',
  templateUrl: './text.control.html',
  styleUrl: '../../../style/control/text.control.scss',
  imports: [CommonModule],
})
// @RegisterLayout('contact')
export class TextControl extends ControlBase<TextControlDataModel, TextControlMetadataModel> {
  constructor() {
    super('text');
  }

  buildExtraMainClassList() {
    const block = this.type;
    const { type } = this.metadata().extend;
    const textClass = BemUtility.build(block, type);
    return [...this.buildMainClassList(), textClass];
  }
}

// TODO: I am here
