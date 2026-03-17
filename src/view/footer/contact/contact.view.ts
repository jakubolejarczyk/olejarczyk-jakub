import { Component } from '@angular/core';
import { StoreCore } from '../../../core/store.core';
import { TextComponent } from '../../../component/text/text.component';
import { LinkComponent } from '../../../component/link/link.component';

@Component({
  selector: 'contact-view',
  templateUrl: './contact.view.html',
  styleUrl: './contact.view.scss',
  imports: [TextComponent, LinkComponent],
})
export class ContactView extends StoreCore {
  socialMedias = this.store.selectSignal((state) => state.personal.socialMedias);

  email = this.store.selectSignal((state) => state.personal.email);

  phone = this.store.selectSignal((state) => state.personal.phone);

  location = this.store.selectSignal((state) => {
    const { country, city } = state.personal;
    return `${country}, ${city}`;
  });
}
