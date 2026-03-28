import { Component } from '@angular/core';
// import { TextComponent } from '../../../../generator/component/text/text.component';
import { StoreCore } from '../../../store/store.core';
import { DateUtil } from '../../../util/date.util';

@Component({
  selector: 'copyright-view',
  templateUrl: './copyright.view.html',
  styleUrl: './copyright.view.scss',
  // imports: [TextComponent],
})
export class CopyrightView extends StoreCore {
  yearAndFullname = this.store.selectSignal((state) => {
    const { firstname, lastname } = state.personal;
    const year = DateUtil.getYear();
    return `${year} ${firstname} ${lastname}`;
  });
}
