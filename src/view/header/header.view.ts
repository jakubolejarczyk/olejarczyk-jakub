import { Component } from '@angular/core';
import { StoreCore } from '../../store/store.core';
import { GroupDataEnum } from '../../data/group/group-data.enum';
import { SectionComponent } from '../../component/section/section.component';

@Component({
  selector: 'header-view',
  templateUrl: './header.view.html',
  imports: [SectionComponent],
})
export class HeaderView extends StoreCore {
  sections = this.store.selectSignal((state) => {
    return Object.values(state.section)
      .filter((section) => section.group === GroupDataEnum.header)
      .filter((section) => section.enabled)
      .sort((prev, next) => prev.order - next.order);
  });
}
