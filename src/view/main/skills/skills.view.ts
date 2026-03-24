import { Component } from '@angular/core';
import { TextComponent } from '../../../component/text/text.component';
import { StoreCore } from '../../../store/store.core';

@Component({
  selector: 'skills-view',
  templateUrl: './skills.view.html',
  styleUrl: './skills.view.scss',
  imports: [TextComponent],
})
export class SkillsView extends StoreCore {
  skills = this.store.selectSignal((state) => {
    return Object.values(state.skill).sort((prev, next) => prev.order - next.order);
  });
}
