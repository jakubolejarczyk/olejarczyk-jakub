import { Injectable } from '@angular/core';
import { VariableModel } from '../model/variable/variable.model';
import { NodeModel } from '../model/node/node.model';

@Injectable()
export class GeneratorApi {
  static buildVariables(variable: VariableModel) {}

  static buildStructure(nodes: NodeModel[]) {}
}
