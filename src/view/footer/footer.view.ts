import { NgComponentOutlet } from '@angular/common';
import { Component } from '@angular/core';
import { StoreCore } from '../../store/store.core';
import { GroupDataEnum } from '../../data/group/group-data.enum';

@Component({
  selector: 'footer-view',
  templateUrl: './footer.view.html',
  imports: [NgComponentOutlet],
})
export class FooterView extends StoreCore {
  sections = this.store.selectSignal((state) => {
    return Object.values(state.section)
      .filter((section) => section.group === GroupDataEnum.footer)
      .sort((prev, next) => prev.order - next.order)
      .map((section) => section.view);
  });
}
