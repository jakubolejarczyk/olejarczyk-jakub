import { Component } from '@angular/core';
import { ContactView } from './contact/contact.view';
import { CopyrightView } from './copyright/copyright.view';

@Component({
  selector: 'footer-view',
  templateUrl: './footer.view.html',
  styleUrl: './footer.view.scss',
  imports: [ContactView, CopyrightView],
})
export class FooterView {}
