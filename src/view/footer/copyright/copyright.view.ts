import { Component } from '@angular/core';
import { StoreCore } from '../../../store/store.core';
import { DateUtil } from '../../../util/date.util';
import { TextComponent } from '../../../component/text/text.component';

@Component({
  selector: 'copyright-view',
  templateUrl: './copyright.view.html',
  imports: [TextComponent],
})
export class CopyrightView extends StoreCore {
  yearAndFullname = this.store.selectSignal((state) => {
    const { firstname, lastname } = state.personal;
    const year = DateUtil.getYear();
    return `${year} ${firstname} ${lastname}`;
  });
}
