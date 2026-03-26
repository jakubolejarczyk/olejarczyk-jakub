import { Component } from '@angular/core';
import { StoreCore } from '../store/store.core';
import { GeneratorComponent } from '../../component/generator/generator.component';

@Component({
  selector: 'view',
  templateUrl: './view.html',
  imports: [GeneratorComponent],
})
export class View extends StoreCore {
  tree: any = [];
}
