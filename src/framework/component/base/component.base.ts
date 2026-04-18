import { Directive, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentBaseModel } from '../../core/model/base/component-base.model';
import { DataBaseModel } from '../../core/model/base/data-base.model';
import { MetadataBaseModel } from '../../core/model/base/metadata-base.model';
import { StyleBaseModel } from '../../core/model/base/style-base.model';

@Directive()
export class ComponentBase<
  TType extends string,
  TData extends ComponentBaseModel<DataBaseModel>,
  TMetadata extends ComponentBaseModel<MetadataBaseModel>,
  TStyle extends ComponentBaseModel<StyleBaseModel>,
> {
  data = input.required<TData>();

  metadata = input.required<TMetadata>();

  style = input.required<TStyle>();

  constructor(protected readonly type: TType) {
    this.type = type;
  }

  static buildImports(): any {
    return [CommonModule];
  }
}
