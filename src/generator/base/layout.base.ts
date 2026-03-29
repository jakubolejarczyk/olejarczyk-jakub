import { Directive } from '@angular/core';
import { ComponentBase } from './component.base';
import { LayoutType } from '../type/layout.type';
import { DataBaseModel } from '../model/base/data-base.model';
import { MetadataBaseModel } from '../model/base/metadata-base.model';
import { BaseModel } from '../model/base/base.model';

@Directive()
export class LayoutBase<
  TDate extends BaseModel<DataBaseModel>,
  TMetadata extends BaseModel<MetadataBaseModel>,
> extends ComponentBase<LayoutType, TDate, TMetadata> {
  constructor(protected override type: LayoutType) {
    super(type);
  }
}
