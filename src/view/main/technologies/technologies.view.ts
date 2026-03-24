import { Component } from '@angular/core';
import { TextComponent } from '../../../component/text/text.component';
import { StoreCore } from '../../../store/store.core';

@Component({
  selector: 'technologies-view',
  templateUrl: './technologies.view.html',
  styleUrl: './technologies.view.scss',
  imports: [TextComponent],
})
export class TechnologiesView extends StoreCore {
  groups = this.store.selectSignal((state) => {
    return Object.values(state.technologyGroup)
      .sort((prev, next) => prev.order - next.order)
      .map((group) => ({
        group,
        technologies: Object.values(state.technology)
          .filter((technology) => technology.group === group.group)
          .sort((prev, next) => prev.order - next.order),
      }));
  });
}
