import { Component, input } from '@angular/core';
import { TComponent } from '../model/type/component.type';

@Component({
  selector: 'base-component',
  template: '',
})
export class BaseComponent<TBaseComponent extends TComponent> {
  component = input.required<TBaseComponent>();
}
