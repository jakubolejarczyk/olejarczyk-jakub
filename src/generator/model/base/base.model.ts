import { UnknownModel } from './unknown.model';

export interface BaseModel<TBase, TExtend extends UnknownModel = UnknownModel> {
  base: TBase;
  extend: TExtend;
}
