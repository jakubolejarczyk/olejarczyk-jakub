import { Directive, input } from '@angular/core';
import { ComponentBaseModel } from '../../core/model/base/component-base.model';
import { DataBaseModel } from '../../core/model/base/data-base.model';
import { MetadataBaseModel } from '../../core/model/base/metadata-base.model';
import { StyleBaseModel } from '../../core/model/base/style-base.model';
import { ComponentBase } from './component.base';
import { LayoutType } from '../../core/type/layout.type';
import { NodeModel } from '../../../generator/model/node/node.model';
import { Generator } from '../../../generator/generator/generator';

@Directive()
export class LayoutBase<
  TData extends ComponentBaseModel<DataBaseModel>,
  TMetadata extends ComponentBaseModel<MetadataBaseModel>,
  TStyle extends ComponentBaseModel<StyleBaseModel>,
> extends ComponentBase<LayoutType, TData, TMetadata, TStyle> {
  nodes = input.required<NodeModel[]>();

  constructor(protected override type: LayoutType) {
    super(type);
  }

  static override buildImports(): any {
    return [...ComponentBase.buildImports(), Generator];
  }
}
