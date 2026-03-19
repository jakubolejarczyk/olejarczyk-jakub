import { Component } from '@angular/core';
import { TextComponent } from '../../../component/text/text.component';
import { StoreCore } from '../../../store/store.core';
import { DateUtils } from '../../../utils/date.utils';

@Component({
  selector: 'copyright-view',
  templateUrl: './copyright.view.html',
  styleUrl: './copyright.view.scss',
  imports: [TextComponent],
})
export class CopyrightView extends StoreCore {
  yearAndFullname = this.store.selectSignal((state) => {
    const { firstname, lastname } = state.personal;
    const year = DateUtils.getYear();
    return `${year} ${firstname} ${lastname}`;
  });
}
