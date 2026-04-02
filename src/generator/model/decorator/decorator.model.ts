import { ComponentType } from '../../../core/type/component.type';
import { ControlType } from '../../../core/type/control.type';
import { LayoutType } from '../../../core/type/layout.type';
import { KindBaseModel } from '../base/kind-base.model';

interface ControlDecoratorModel extends KindBaseModel<ComponentType, 'control'> {
  control: ControlType;
}

interface LayoutDecoratorModel extends KindBaseModel<ComponentType, 'layout'> {
  layout: LayoutType;
}

export type DecoratorModel = ControlDecoratorModel | LayoutDecoratorModel;
