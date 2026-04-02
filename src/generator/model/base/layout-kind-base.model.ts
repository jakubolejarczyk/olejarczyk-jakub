import { LayoutType } from '../../../core/type/layout.type';

export interface LayoutKindBaseModel<TType extends LayoutType> {
  layout: TType;
}
