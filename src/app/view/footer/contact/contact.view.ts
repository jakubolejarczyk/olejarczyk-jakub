import { Component } from '@angular/core';
// import { TextComponent } from '../../../../generator/component/text/text.component';
import { StoreCore } from '../../../store/store.core';
import { LinkComponent } from '../../../component/link/link.component';

@Component({
  selector: 'contact-view',
  templateUrl: './contact.view.html',
  styleUrl: './contact.view.scss',
  imports: [LinkComponent],
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
