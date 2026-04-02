import { ComponentBaseModel } from '../../base/component-base.model';
import { DataBaseModel } from '../../base/data-base.model';

interface InternalDataModel {
  value: string;
}

export interface TextDataControlModel extends ComponentBaseModel<
  DataBaseModel,
  InternalDataModel
> {}
