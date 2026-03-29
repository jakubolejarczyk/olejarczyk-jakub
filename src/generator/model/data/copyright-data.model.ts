import { BaseKindModel } from '../base/base-kind.model';
import { BaseModel } from '../base/base.model';
import { DataBaseModel } from '../base/data-base.model';

type YearKindType = 'current' | 'range';

interface YearCurrentModel extends BaseKindModel<YearKindType, 'current'> {}

interface YearRangeModel extends BaseKindModel<YearKindType, 'range'> {
  from: number;
  to: number | 'current';
}

type YearType = YearCurrentModel | YearRangeModel;

interface DataModel {
  symbol: string;
  year: YearType;
  ownerName: string;
  rightsStatements: string;
}

export interface CopyrightDataModel extends BaseModel<DataBaseModel, DataModel> {}
