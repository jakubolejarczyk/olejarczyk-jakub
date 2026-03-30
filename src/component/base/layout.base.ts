import { Directive } from '@angular/core';
import { BaseModel } from '../model/base/base.model';
import { DataBaseModel } from '../model/base/data-base.model';
import { MetadataBaseModel } from '../model/base/metadata-base.model';
import { ComponentBase } from './component.base';
import { LayoutType } from '../../style/type/layout.type';

@Directive()
export class LayoutBase<
  TDate extends BaseModel<DataBaseModel, unknown>,
  TMetadata extends BaseModel<MetadataBaseModel, unknown>,
> extends ComponentBase<LayoutType, TDate, TMetadata> {
  constructor(protected override type: LayoutType) {
    super(type);
  }
}
