import { NgComponentOutlet } from '@angular/common';
import { Component } from '@angular/core';
import { GeneratorCore } from './generator-core';
import { NodeModel } from '../model/node.model';
import { getComponentUi } from '../component/decorator/component-ui.decorator';

@Component({
  selector: 'generator',
  templateUrl: './generator.html',
  imports: [NgComponentOutlet],
})
export class Generator extends GeneratorCore {
  buildComponent(node: NodeModel) {
    return getComponentUi(node.kind);
  }

  buildInputs(node: NodeModel) {
    return {
      nodes: node.children,
    };
  }
}
