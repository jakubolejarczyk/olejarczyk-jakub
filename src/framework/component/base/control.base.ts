import { Directive } from '@angular/core';
import { ComponentBaseModel } from '../../core/model/base/component-base.model';
import { DataBaseModel } from '../../core/model/base/data-base.model';
import { MetadataBaseModel } from '../../core/model/base/metadata-base.model';
import { ComponentBase } from './component.base';
import { ControlType } from '../../core/type/control.type';
import { AnyUtilityModel } from '../../utility/model/any-utility.model';

@Directive()
export class ControlBase<
  TData extends ComponentBaseModel<DataBaseModel>,
  TMetadata extends ComponentBaseModel<MetadataBaseModel>,
> extends ComponentBase<ControlType, TData, TMetadata> {
  constructor(protected override type: ControlType) {
    super(type);
  }

  static override buildImports(): AnyUtilityModel {
    return ComponentBase.buildImports();
  }
}
