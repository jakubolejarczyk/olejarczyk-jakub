import { Directive, input } from '@angular/core';
import { ComponentBaseModel } from '../../core/model/base/component-base.model';
import { DataBaseModel } from '../../core/model/base/data-base.model';
import { MetadataBaseModel } from '../../core/model/base/metadata-base.model';
import { ComponentBase } from './component.base';
import { UtilityType } from '../../core/type/utility.type';
import { AnyUtilityModel } from '../../utility/model/any-utility.model';
import { Generator } from '../../generator/generator/generator';
import { NodeModel } from '../../generator/model/node/node.model';

@Directive()
export class UtilityBase<
  TData extends ComponentBaseModel<DataBaseModel>,
  TMetadata extends ComponentBaseModel<MetadataBaseModel>,
> extends ComponentBase<UtilityType, TData, TMetadata> {
  nodes = input.required<NodeModel[]>();

  constructor(protected override type: UtilityType) {
    super(type);
  }

  static override buildImports(): AnyUtilityModel {
    return [...ComponentBase.buildImports(), Generator];
  }
}
