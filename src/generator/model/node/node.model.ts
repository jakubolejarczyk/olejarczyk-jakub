import { ComponentNodeModel } from './component-node.model';

export interface NodeModel {
  component: ComponentNodeModel;
  children?: NodeModel[];
}
