import { NgComponentOutlet } from '@angular/common';
import { Component, input } from '@angular/core';
import { NodeModel } from '../model/node/node.model';
import { getComponent } from '../decorator/component.decorator';

@Component({
  selector: 'generator',
  templateUrl: './generator.html',
  styleUrl: '../../style/generator/_generator.scss',
  imports: [NgComponentOutlet],
})
export class Generator {
  nodes = input<NodeModel[]>([]);

  buildComponent(node: NodeModel) {
    const { component, kind } = node.componentNode;
    if (component === 'control') {
      return getComponent({ component, kind });
    }
    if (component === 'layout') {
      return getComponent({ component, kind });
    }
    if (component === 'utility') {
      return getComponent({ component, kind });
    }
  }

  buildInputs(node: NodeModel) {
    return {
      data: node.componentNode.data,
      metadata: node.componentNode.metadata,
      nodes: node.componentNode.component === 'control' ? [] : node.children,
    };
  }
}
