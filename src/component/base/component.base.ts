import { Directive, input } from '@angular/core';
import { DataBaseModel } from '../../core/model/base/data-base.model';
import { MetadataBaseModel } from '../../core/model/base/metadata-base.model';
import { ComponentBaseModel } from '../../core/model/base/component-base.model';
import { CommonModule } from '@angular/common';
import { AnyUtilityModel } from '../../utility/model/any-utility.model';

@Directive()
export class ComponentBase<
  TType extends string,
  TData extends ComponentBaseModel<DataBaseModel>,
  TMetadata extends ComponentBaseModel<MetadataBaseModel>,
> {
  data = input.required<TData>();

  metadata = input.required<TMetadata>();

  constructor(protected readonly type: TType) {
    this.type = type;
  }

  static buildImports(): AnyUtilityModel {
    return [CommonModule];
  }
}
