import { LayoutType } from '../../../style/type/layout.type';

export interface LayoutKindBaseModel<TType extends LayoutType> {
  layout: TType;
}
