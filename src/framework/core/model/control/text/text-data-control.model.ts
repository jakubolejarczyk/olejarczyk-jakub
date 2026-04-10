import { ComponentBaseModel } from '../../base/component-base.model';
import { DataBaseModel } from '../../base/data-base.model';

interface InternalDataModel {
  values: string[];
}

export interface TextDataControlModel extends ComponentBaseModel<
  DataBaseModel,
  InternalDataModel
> {}
