import { Directive, input } from '@angular/core';
import { BaseModel } from '../model/base/base.model';
import { DataBaseModel } from '../model/base/data-base.model';
import { MetadataBaseModel } from '../model/base/metadata-base.model';
import { BemUtility } from '../../utility/bem.utility';

@Directive()
export class ComponentBase<
  TType extends string,
  TData extends BaseModel<DataBaseModel, unknown>,
  TMetadata extends BaseModel<MetadataBaseModel, unknown>,
> {
  data = input.required<TData>();

  metadata = input.required<TMetadata>();

  constructor(protected type: TType) {
    this.type = type;
  }

  protected buildMainClassList() {
    const block = this.type;
    const { palette } = this.metadata().base;
    const mainClass = BemUtility.build(block);
    const paletteClass = BemUtility.build(block, 'palette', palette);
    return [mainClass, paletteClass];
  }
}
