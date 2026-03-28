import { Component } from '@angular/core';
// import { TextComponent } from '../../../../generator/component/text/text.component';
import { StoreCore } from '../../../store/store.core';

@Component({
  selector: 'about-me-view',
  templateUrl: './about-me.view.html',
  styleUrl: './about-me.view.scss',
  // imports: [TextComponent],
})
export class AboutMeView extends StoreCore {
  descriptions = this.store.selectSignal((state) => state.aboutMe.description);
}
