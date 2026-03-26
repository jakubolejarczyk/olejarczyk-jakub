import { NodeKindEnum } from '../enum/node-kind.enum';

export interface NodeModel {
  kind: NodeKindEnum;
  children: NodeModel[];
}
