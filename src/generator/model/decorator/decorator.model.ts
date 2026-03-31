import { ComponentType } from '../../../style/type/component.type';
import { ControlType } from '../../../style/type/control.type';
import { LayoutType } from '../../../style/type/layout.type';
import { KindBaseModel } from '../base/kind-base.model';

interface ControlDecoratorModel extends KindBaseModel<ComponentType, 'control'> {
  control: ControlType;
}

interface LayoutDecoratorModel extends KindBaseModel<ComponentType, 'layout'> {
  layout: LayoutType;
}

export type DecoratorModel = ControlDecoratorModel | LayoutDecoratorModel;
