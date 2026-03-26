import { CommonModule, NgComponentOutlet } from '@angular/common';
import { Component, input } from '@angular/core';
import { TreeModel } from '../model/tree.model';
import { getComponent } from '../decorator/component.decorator';
import { NodeModel } from '../model/node.model';
import { BaseGenerator } from '../base/base-generator';

@Component({
  selector: 'generator',
  templateUrl: './generator.html',
  imports: [CommonModule, NgComponentOutlet],
})
export class Generator extends BaseGenerator {
  buildComponent(node: NodeModel) {
    return getComponent(node.kind);
  }

  buildInputs(node: NodeModel) {
    return {
      tree: node.children,
    };
  }
}
