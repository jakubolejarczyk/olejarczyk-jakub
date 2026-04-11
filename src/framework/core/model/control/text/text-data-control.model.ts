import { ComponentBaseModel } from '../../base/component-base.model';
import { DataBaseModel } from '../../base/data-base.model';

interface ExtendModel {
  values: string[];
}

export interface TextDataControlModel extends ComponentBaseModel<DataBaseModel, ExtendModel> {}
