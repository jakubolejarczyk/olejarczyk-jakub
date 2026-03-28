import { Component, HostListener } from '@angular/core';
// import { TextComponent } from '../../../../generator/component/text/text.component';
import { StoreCore } from '../../../store/store.core';

@Component({
  selector: 'navigation-view',
  templateUrl: './navigation.view.html',
  styleUrl: './navigation.view.scss',
  // imports: [TextComponent],
})
export class NavigationView extends StoreCore {
  sections = this.store.selectSignal((state) => {
    return Object.values(state.section).filter((section) => section.routable.enable);
  });

  isMenu = false;

  isMobile = false;

  onClick() {
    this.isMenu = !this.isMenu;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    const screenWidth = window.innerWidth;
    if (screenWidth > 1024) {
      this.isMobile = true;
    } else {
      this.isMobile = false;
    }
  }
}
