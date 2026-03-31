import { KindBaseModel } from '../../../generator/model/base/kind-base.model';
import { BaseModel } from '../base/base.model';
import { DataBaseModel } from '../base/data-base.model';

type YearKindType = 'current' | 'range';

interface YearCurrentModel extends KindBaseModel<YearKindType, 'current'> {}

interface YearRangeModel extends KindBaseModel<YearKindType, 'range'> {
  from: number;
  to: number | 'current';
}

type YearType = YearCurrentModel | YearRangeModel;

export interface CopyrightDataModel extends BaseModel<
  DataBaseModel,
  {
    symbol: string;
    year: YearType;
    ownerName: string;
    rightsStatements: string;
  }
> {}
