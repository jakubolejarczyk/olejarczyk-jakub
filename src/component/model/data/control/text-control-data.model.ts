import { BaseModel } from '../../base/base.model';
import { DataBaseModel } from '../../base/data-base.model';

interface DataModel {
  value: string;
}

export interface TextControlDataModel extends BaseModel<DataBaseModel, DataModel> {}

// TODO: I am here
