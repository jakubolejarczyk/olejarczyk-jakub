import { Directive, input } from '@angular/core';
import { ComponentBaseModel } from '../../core/model/base/component-base.model';
import { DataBaseModel } from '../../core/model/base/data-base.model';
import { MetadataBaseModel } from '../../core/model/base/metadata-base.model';
import { ComponentBase } from './component.base';
import { LayoutType } from '../../core/type/layout.type';
import { AnyUtilityModel } from '../../utility/model/any-utility.model';
import { Generator } from '../../generator/generator/generator';
import { NodeModel } from '../../generator/model/node/node.model';

@Directive()
export class LayoutBase<
  TData extends ComponentBaseModel<DataBaseModel>,
  TMetadata extends ComponentBaseModel<MetadataBaseModel>,
> extends ComponentBase<LayoutType, TData, TMetadata> {
  nodes = input.required<NodeModel[]>();

  constructor(protected override type: LayoutType) {
    super(type);
  }

  static override buildImports(): AnyUtilityModel {
    return [...ComponentBase.buildImports(), Generator];
  }
}
