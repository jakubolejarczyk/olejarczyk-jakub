import { Component, input } from '@angular/core';
import { TextComponent } from '../text/text.component';
import { LinkType } from './link.type';

@Component({
  selector: 'link-component',
  templateUrl: './link.component.html',
  styleUrl: './link.component.scss',
  imports: [TextComponent],
})
export class LinkComponent {
  label = input.required<string>();

  url = input.required<string>();

  type = input<LinkType>('page');

  externalLink = input(false);

  onClick() {
    const path = this.url();
    if (path.startsWith('#')) {
      const element = document.getElementById(this.url());
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }

  getUrl() {
    switch (this.type()) {
      case 'page':
      case 'file':
        return this.url();
      case 'email':
        return `mailto:${this.url()}`;
      case 'phone':
        return `tel:${this.url()}`;
    }
  }
}
