import { NgComponentOutlet } from '@angular/common';
import { Component, input } from '@angular/core';
import { NodeModel } from '../model/node/node.model';
import { getComponent } from '../decorator/component.decorator';

@Component({
  selector: 'generator',
  templateUrl: './generator.html',
  styleUrl: './generator.scss',
  imports: [NgComponentOutlet],
})
export class Generator {
  nodes = input<NodeModel[]>([]);

  buildComponent(node: NodeModel) {
    const { kind } = node.component;
    if (kind === 'control') {
      const { control } = node.component;
      return getComponent({ kind, control });
    }
    if (kind === 'layout') {
      const { layout } = node.component;
      return getComponent({ kind, layout });
    }
  }

  buildInputs(node: NodeModel) {
    return {
      data: node.component.data,
      metadata: node.component.metadata,
      nodes: node.children,
    };
  }
}
