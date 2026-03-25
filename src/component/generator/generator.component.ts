import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeModel } from '../../core/model/tree.model';

@Component({
  selector: 'generator-component',
  templateUrl: './generator.component.html',
  imports: [CommonModule],
})
export class GeneratorComponent {
  tree = input<TreeModel>([]);
}
