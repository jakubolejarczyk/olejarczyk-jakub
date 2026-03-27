import { TComponent } from '../type/component.type';

export interface NodeModel {
  component: TComponent;
  children?: NodeModel[];
}
