import { Component } from '@angular/core';
import { StoreCore } from '../store/store.core';

@Component({
  selector: 'view',
  templateUrl: './view.html',
})
export class View extends StoreCore {
  tree: any = [];
}
