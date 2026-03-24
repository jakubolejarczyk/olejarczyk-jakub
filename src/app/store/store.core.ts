import { inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { StoreType } from './store.type';

export class StoreCore {
  protected readonly store: Store<StoreType> = inject(Store);
}
