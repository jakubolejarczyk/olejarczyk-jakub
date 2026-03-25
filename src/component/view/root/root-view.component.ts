import { Component, input } from '@angular/core';
import { TreeModel } from '../../../core/model/tree.model';
import { GeneratorComponent } from '../../generator/generator.component';

@Component({
  selector: 'root-view-component',
  templateUrl: './root-view.component.html',
  styleUrl: './root-view.component.scss',
  imports: [GeneratorComponent],
})
export class RootViewComponent {
  tree = input<TreeModel>([]);
}
