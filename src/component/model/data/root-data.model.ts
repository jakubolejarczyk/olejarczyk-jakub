import { BaseModel } from '../base/base.model';
import { DataBaseModel } from '../base/data-base.model';

export interface RootDataModel extends BaseModel<DataBaseModel, {}> {}
