import { ComponentNodeModel } from './component-node.model';

export interface NodeModel {
  componentNode: ComponentNodeModel;
  children?: NodeModel[];
}
