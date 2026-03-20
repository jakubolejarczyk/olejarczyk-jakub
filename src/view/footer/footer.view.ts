import { Component } from '@angular/core';
import { StoreCore } from '../../store/store.core';
import { GroupDataEnum } from '../../data/group/group-data.enum';
import { SectionComponent } from '../../component/section/section.component';

@Component({
  selector: 'footer-view',
  templateUrl: './footer.view.html',
  imports: [SectionComponent],
})
export class FooterView extends StoreCore {
  sections = this.store.selectSignal((state) => {
    return Object.values(state.section)
      .filter((section) => section.group === GroupDataEnum.footer)
      .sort((prev, next) => prev.order - next.order);
  });
}
