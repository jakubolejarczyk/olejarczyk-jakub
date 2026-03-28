import { BaseKindModel } from '../base/base-kind.model';

type TYearKind = 'current' | 'range';

interface YearCurrentModel extends BaseKindModel<TYearKind, 'current'> {}

export interface YearRangeModel extends BaseKindModel<TYearKind, 'range'> {
  from: number;
  to: number | 'current';
}

type TYear = YearCurrentModel | YearRangeModel;

export interface CopyrightDataModel {
  symbol: string;
  year: TYear;
  ownerName: string;
  rightsStatements: string;
}
