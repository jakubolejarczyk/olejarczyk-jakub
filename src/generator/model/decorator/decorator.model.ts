import { ComponentType } from '../../../core/type/component.type';
import { ControlType } from '../../../core/type/control.type';
import { LayoutType } from '../../../core/type/layout.type';
import { UtilityType } from '../../../core/type/utility.type';
import { KindBaseModel } from '../base/kind-base.model';

interface ControlDecoratorModel extends KindBaseModel<ComponentType, 'control'> {
  control: ControlType;
}

interface LayoutDecoratorModel extends KindBaseModel<ComponentType, 'layout'> {
  layout: LayoutType;
}

interface UtilityDecoratorModel extends KindBaseModel<ComponentType, 'utility'> {
  utility: UtilityType;
}

export type DecoratorModel = ControlDecoratorModel | LayoutDecoratorModel | UtilityDecoratorModel;
