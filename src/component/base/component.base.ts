import { Directive, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseModel } from '../../core/model/base/component-base.model';
import { DataBaseModel } from '../../core/model/base/data-base.model';
import { MetadataBaseModel } from '../../core/model/base/metadata-base.model';

@Directive()
export class ComponentBase<
  TType extends string,
  TData extends BaseModel<DataBaseModel, unknown>,
  TMetadata extends BaseModel<MetadataBaseModel, unknown>,
> {
  data = input.required<TData>();

  metadata = input.required<TMetadata>();

  constructor(protected readonly type: TType) {
    this.type = type;
  }

  protected static buildImports(): any[] {
    return [CommonModule];
  }

  protected buildMainClassList() {
    return [];
  }
}
