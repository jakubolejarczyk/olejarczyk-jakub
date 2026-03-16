import { Component } from '@angular/core';
import { TextComponent } from '../../../component/text/text.component';
import { StoreCore } from '../../../core/store.core';
import { DateUtils } from '../../../utils/date.utils';

@Component({
  selector: 'copyright-view',
  templateUrl: './copyright.view.html',
  styleUrl: './copyright.view.scss',
  imports: [TextComponent],
})
export class CopyrightView extends StoreCore {
  year = DateUtils.getYear();

  fullname = this.store.selectSignal((state) => {
    const { firstname, lastname } = state.personal;
    return `${firstname} ${lastname}`;
  });
}
