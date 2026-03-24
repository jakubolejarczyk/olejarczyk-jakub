import { Component } from '@angular/core';
import { TextComponent } from '../../../component/text/text.component';
import { StoreCore } from '../../../store/store.core';

@Component({
  selector: 'navigation-view',
  templateUrl: './navigation.view.html',
  styleUrl: './navigation.view.scss',
  imports: [TextComponent],
})
export class NavigationView extends StoreCore {
  sections = this.store.selectSignal((state) => {
    return Object.values(state.section).filter((section) => section.routable.enable);
  });
}
