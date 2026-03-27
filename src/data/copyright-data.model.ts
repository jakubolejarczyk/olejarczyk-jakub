interface YearCurrentModel {
  kind: 'current';
}

interface YearRangeModel {
  kind: 'range';
  from: number;
  to: number | 'current';
}

type YearType = YearCurrentModel | YearRangeModel;

export interface CopyrightDataModel {
  symbol: string;
  year: YearType;
  ownerName: string;
  rightsStatement: string;
}
