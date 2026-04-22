import { ComponentType } from '../core/type/component.type';
import { ControlType } from '../core/type/control.type';
import { LayoutType } from '../core/type/layout.type';

interface BaseDecoratorModel<T, TComponent extends T, TKind> {
  component: TComponent;
  kind: TKind;
}

export interface ControlDecoratorModel extends BaseDecoratorModel<
  ComponentType,
  'control',
  ControlType
> {}

export interface LayoutDecoratorModel extends BaseDecoratorModel<
  ComponentType,
  'layout',
  LayoutType
> {}

export type DecoratorModel = ControlDecoratorModel | LayoutDecoratorModel;
