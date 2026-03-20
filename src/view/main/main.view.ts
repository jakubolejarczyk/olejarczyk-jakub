import { NgComponentOutlet } from '@angular/common';
import { Component } from '@angular/core';
import { StoreCore } from '../../store/store.core';
import { GroupDataEnum } from '../../data/group/group-data.enum';
import { SectionComponent } from '../../component/section/section.component';

@Component({
  selector: 'main-view',
  templateUrl: './main.view.html',
  imports: [NgComponentOutlet, SectionComponent],
})
export class MainView extends StoreCore {
  sections = this.store.selectSignal((state) => {
    return Object.values(state.section)
      .filter((section) => section.group === GroupDataEnum.main)
      .sort((prev, next) => prev.order - next.order);
  });
}
