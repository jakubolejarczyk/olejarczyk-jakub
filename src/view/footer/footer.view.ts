import { Component } from '@angular/core';

import { CopyrightView } from './copyright/copyright.view';
import { ContactView } from './contact/contact.view';

@Component({
  selector: 'footer-view',
  templateUrl: './footer.view.html',
  styleUrl: './footer.view.scss',
  imports: [CopyrightView, ContactView],
})
export class FooterView {}
