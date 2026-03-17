import { Component, input } from '@angular/core';
import { TextComponent } from '../text/text.component';
import { CommonModule } from '@angular/common';
import { LinkType } from './link.type';

@Component({
  selector: 'link-component',
  templateUrl: './link.component.html',
  styleUrl: './link.component.scss',
  imports: [TextComponent, CommonModule],
})
export class LinkComponent {
  href = input.required<string>();

  label = input.required<string>();

  newTab = input(false);

  type = input<LinkType>('link');

  getHref() {
    switch (this.type()) {
      case 'link':
      case 'file':
        return this.href();
      case 'email':
        return `mailto:${this.href()}`;
      case 'phone':
        return `tel:${this.href()}`;
    }
  }

  getTarget() {
    return this.newTab() ? '_blank' : '_self';
  }

  getDownload() {
    return this.type() === 'file';
  }
}
