import { Component } from '@angular/core';
import { StoreCore } from '../store/store.core';

@Component({
  selector: 'view',
  templateUrl: './view.html',
})
export class View extends StoreCore {
  group = this.store.selectSignal((state) => {
    return Object.values(state.group).sort((prev, next) => prev.order - next.order);
  });
}
