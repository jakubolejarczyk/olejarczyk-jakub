import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { TreeModel } from '../model/tree.model';

@Component({
  selector: 'base-generator',
  template: '',
  imports: [CommonModule],
})
export class BaseGenerator {
  tree = input<TreeModel>([]);
}
