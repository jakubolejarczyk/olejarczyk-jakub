import { Component } from '@angular/core';
import { StoreCore } from '../../core/store.core';
import { DateUtils } from '../../utils/date.utils';

@Component({
  selector: 'copyright-component',
  templateUrl: './copyright.component.html',
  styleUrl: './copyright.component.scss',
})
export class CopyrightComponent extends StoreCore {
  year = DateUtils.getYear();

  fullname = this.store.selectSignal((state) => {
    const { firstname, lastname } = state.personal;
    return `${firstname} ${lastname}`;
  });
}
