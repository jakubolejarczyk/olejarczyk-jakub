import { NgComponentOutlet } from '@angular/common';
import { Component, input } from '@angular/core';
import { NodeModel } from '../model/node.model';
import { getComponentUi } from '../component/decorator/component-ui.decorator';

@Component({
  selector: 'generator',
  templateUrl: './generator.html',
  imports: [NgComponentOutlet],
})
export class Generator {
  nodes = input<NodeModel[]>([]);

  buildComponent(node: NodeModel) {
    return getComponentUi(node.data.kind);
  }

  buildInputs(node: NodeModel) {
    return {
      nodes: node.children,
      data: node.data.value,
    };
  }
}
