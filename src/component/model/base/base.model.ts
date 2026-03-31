import { EmptyModel } from '../../../core/model/empty.model';

export interface BaseModel<TBase, TExtend = EmptyModel> {
  base: TBase;
  extend: TExtend;
}
