import { Directive } from '@angular/core';
import { BaseModel } from '../model/base/base.model';
import { DataBaseModel } from '../model/base/data-base.model';
import { MetadataBaseModel } from '../model/base/metadata-base.model';
import { ComponentBase } from './component.base';
import { ControlType } from '../../core/type/control.type';

@Directive()
export class ControlBase<
  TDate extends BaseModel<DataBaseModel, unknown>,
  TMetadata extends BaseModel<MetadataBaseModel, unknown>,
> extends ComponentBase<ControlType, TDate, TMetadata> {
  constructor(protected override type: ControlType) {
    super(type);
  }
}
