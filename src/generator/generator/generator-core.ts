import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { NodeModel } from '../model/node.model';

@Component({
  selector: 'generator-core',
  template: '',
  imports: [CommonModule],
})
export class GeneratorCore {
  nodes = input<NodeModel[]>([]);
}
