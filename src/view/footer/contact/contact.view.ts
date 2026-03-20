import { Component } from '@angular/core';
import { TextComponent } from '../../../component/text/text.component';
import { StoreCore } from '../../../store/store.core';

@Component({
  selector: 'contact-view',
  templateUrl: './contact.view.html',
  styleUrl: './contact.view.scss',
  imports: [TextComponent],
})
export class ContactView extends StoreCore {
  contact = this.store.selectSignal((state) => {
    const { firstname, lastname, email, phone, city, country, socialMedias } = state.personal;
    const fullname = `${firstname} ${lastname}`;
    const location = `${country}, ${city}`;
    return {
      fullname,
      email,
      phone,
      location,
      socialMedias,
    };
  });
}
