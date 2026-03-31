import { Directive, input } from '@angular/core';
import { BaseModel } from '../model/base/base.model';
import { DataBaseModel } from '../model/base/data-base.model';
import { MetadataBaseModel } from '../model/base/metadata-base.model';
import { ComponentBase } from './component.base';
import { LayoutType } from '../../style/type/layout.type';
import { Generator } from '../../generator/generator/generator';
import { NodeModel } from '../../generator/model/node/node.model';

@Directive()
export class LayoutBase<
  TDate extends BaseModel<DataBaseModel, unknown>,
  TMetadata extends BaseModel<MetadataBaseModel, unknown>,
> extends ComponentBase<LayoutType, TDate, TMetadata> {
  nodes = input<NodeModel[]>([]);

  constructor(protected override type: LayoutType) {
    super(type);
  }

  protected static override buildImports(): any[] {
    return [...ComponentBase.buildImports(), Generator];
  }
}
