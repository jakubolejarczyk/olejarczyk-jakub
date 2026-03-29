import { LayoutNodeModel } from './layout-node.model';

export interface NodeModel {
  layout: LayoutNodeModel;
  children?: NodeModel[];
}
