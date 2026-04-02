import { ComponentType } from '../../../core/type/component.type';
import { ControlType } from '../../../core/type/control.type';
import { LayoutType } from '../../../core/type/layout.type';
import { UtilityType } from '../../../core/type/utility.type';

interface BaseDecorator<TComponent, TKind, TC extends TComponent> {
  component: TC;
  kind: TKind;
}

export interface ControlDecoratorModel extends BaseDecorator<
  ComponentType,
  ControlType,
  'control'
> {}

export interface LayoutDecoratorModel extends BaseDecorator<ComponentType, LayoutType, 'layout'> {}

export interface UtilityDecoratorModel extends BaseDecorator<
  ComponentType,
  UtilityType,
  'utility'
> {}

export type DecoratorModel = ControlDecoratorModel | LayoutDecoratorModel | UtilityDecoratorModel;
