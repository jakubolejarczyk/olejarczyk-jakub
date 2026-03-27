import { NgComponentOutlet } from '@angular/common';
import { Component, input } from '@angular/core';
import { NodeModel } from '../model/node/node.model';
import { getComponent } from '../decorator/component.decorator';

@Component({
  selector: 'generator',
  templateUrl: './generator.html',
  imports: [NgComponentOutlet],
})
export class Generator {
  nodes = input<NodeModel[]>([]);

  buildComponent(node: NodeModel) {
    return getComponent(node.component.kind);
  }

  buildInputs(node: NodeModel) {
    return {
      component: node.component,
      nodes: node.children,
    };
  }
}
