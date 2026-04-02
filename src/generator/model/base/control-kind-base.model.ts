import { ControlType } from '../../../core/type/control.type';

export interface ControlKindBaseModel<TType extends ControlType> {
  control: TType;
}
