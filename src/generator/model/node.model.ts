import { ComponentModel } from './component.model';

export interface NodeModel extends ComponentModel {
  children?: NodeModel[];
}
