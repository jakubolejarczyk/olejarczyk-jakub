import { Directive, input } from '@angular/core';
import { BemUtility } from '../utility/bem.utility';
import { StringUtility } from '../utility/string.utility';
import { MetadataBaseModel } from '../model/base/metadata-base.model';
import { DataBaseModel } from '../model/base/data-base.model';
import { BaseModel } from '../model/base/base.model';

@Directive()
export class ComponentBase<
  TType,
  TDate extends BaseModel<DataBaseModel>,
  TMetadata extends BaseModel<MetadataBaseModel>,
> {
  data = input.required<TDate>();

  metadata = input.required<TMetadata>();

  constructor(protected type: TType) {
    this.type = type;
  }

  protected buildMainClassList() {
    const block = StringUtility.convertToString(this.type);
    const { palette } = this.metadata().base;
    const mainClass = BemUtility.build(block);
    const paletteClass = BemUtility.build(block, 'palette', palette);
    return [mainClass, paletteClass];
  }
}
