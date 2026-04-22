import { Directive, input } from '@angular/core';
import { ComponentBaseModel } from '../../core/model/base/component-base.model';
import { DataBaseModel } from '../../core/model/base/data-base.model';
import { MetadataBaseModel } from '../../core/model/base/metadata-base.model';
import { StyleBaseModel } from '../../core/model/base/style-base.model';
import { ComponentBase } from './component.base';
import { LayoutType } from '../../core/type/layout.type';

@Directive()
export class LayoutBase<
  TComplex extends ComplexBaseModel<
    ComponentBaseModel<DataBaseModel>,
    ComponentBaseModel<MetadataBaseModel>,
    ComponentBaseModel<StyleBaseModel>
  >,
> extends ComponentBase<LayoutType, TComplex> {
  constructor(protected override type: LayoutType) {
    super(type);
  }

  static override buildImports(): any {
    return [...ComponentBase.buildImports()];
  }
}
