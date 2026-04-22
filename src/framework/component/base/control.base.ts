import { Directive } from '@angular/core';
import { ComponentBaseModel } from '../../core/model/base/component-base.model';
import { DataBaseModel } from '../../core/model/base/data-base.model';
import { MetadataBaseModel } from '../../core/model/base/metadata-base.model';
import { StyleBaseModel } from '../../core/model/base/style-base.model';
import { ComponentBase } from './component.base';
import { ControlType } from '../../core/type/control.type';

@Directive()
export class ControlBase<
  TComplex extends ComplexBaseModel<
    ComponentBaseModel<DataBaseModel>,
    ComponentBaseModel<MetadataBaseModel>,
    ComponentBaseModel<StyleBaseModel>
  >,
> extends ComponentBase<ControlType, TComplex> {
  constructor(protected override type: ControlType) {
    super(type);
  }

  static override buildImports(): any {
    return ComponentBase.buildImports();
  }
}
