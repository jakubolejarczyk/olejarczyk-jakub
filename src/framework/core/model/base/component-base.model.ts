import { EmptyUtilityModel } from '../../../utility/model/empty-utility.model';

export interface ComponentBaseModel<TBase, TExtend = EmptyUtilityModel> {
  base: TBase;
  extend: TExtend;
}
