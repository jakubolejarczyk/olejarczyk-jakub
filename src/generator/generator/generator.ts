import { NgComponentOutlet } from '@angular/common';
import { Component, input } from '@angular/core';
import { NodeModel } from '../model/node/node.model';
import { getLayout } from '../decorator/layout.decorator';

@Component({
  selector: 'generator',
  templateUrl: './generator.html',
  imports: [NgComponentOutlet],
})
export class Generator {
  nodes = input<NodeModel[]>([]);

  buildLayout(node: NodeModel) {
    return getLayout(node.layout.kind);
  }

  buildInputs(node: NodeModel) {
    return {
      data: node.layout.data,
      metadata: node.layout.metadata,
    };
  }
}
