import { ControlType } from '../../../style/type/control.type';

export interface ControlKindBaseModel<TType extends ControlType> {
  control: TType;
}
