import { Component } from '@angular/core';
import { NgComponentOutlet } from '@angular/common';
import { StoreCore } from '../../store/store.core';
import { GroupDataEnum } from '../../data/group/group-data.enum';
import { SectionComponent } from '../../component/section/section.component';

@Component({
  selector: 'header-view',
  templateUrl: './header.view.html',
  imports: [NgComponentOutlet, SectionComponent],
})
export class HeaderView extends StoreCore {
  sections = this.store.selectSignal((state) => {
    return Object.values(state.section)
      .filter((section) => section.group === GroupDataEnum.header)
      .sort((prev, next) => prev.order - next.order);
  });
}
