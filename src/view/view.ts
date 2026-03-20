import { NgComponentOutlet } from '@angular/common';
import { Component } from '@angular/core';
import { StoreCore } from '../store/store.core';

@Component({
  selector: 'view',
  templateUrl: './view.html',
  imports: [NgComponentOutlet],
})
export class View extends StoreCore {
  views = this.store.selectSignal((state) => {
    return Object.values(state.group)
      .sort((prev, next) => prev.order - next.order)
      .map((item) => item.view);
  });
}
