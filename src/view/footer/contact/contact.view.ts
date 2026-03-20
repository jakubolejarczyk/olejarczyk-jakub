import { Component } from '@angular/core';
import { StoreCore } from '../../../store/store.core';

@Component({
  selector: 'contact-view',
  templateUrl: './contact.view.html',
})
export class ContactView extends StoreCore {
  fullname = this.store.selectSignal((state) => {
    const { firstname, lastname } = state.personal;
    return `${firstname} ${lastname}`;
  });

  socialMedias = this.store.selectSignal((state) => state.personal.socialMedias);

  email = this.store.selectSignal((state) => state.personal.email);

  phone = this.store.selectSignal((state) => state.personal.phone);

  location = this.store.selectSignal((state) => {
    const { country, city } = state.personal;
    return `${country}, ${city}`;
  });
}
