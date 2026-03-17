import { Component } from '@angular/core';
import { StoreCore } from '../../../core/store.core';
import { TextComponent } from '../../../component/text/text.component';

@Component({
  selector: 'contact-view',
  templateUrl: './contact.view.html',
  styleUrl: './contact.view.scss',
  imports: [TextComponent],
})
export class ContactView extends StoreCore {}
