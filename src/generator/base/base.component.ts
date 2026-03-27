import { Component, input } from '@angular/core';
import { TComponent } from '../model/type/component.type';
import { NodeModel } from '../model/node/node.model';

@Component({
  selector: 'base-component',
  template: '',
})
export class BaseComponent<TBaseComponent extends TComponent> {
  component = input.required<TBaseComponent>();

  nodes = input<NodeModel[]>([]);
}
