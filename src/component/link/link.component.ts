import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinkType } from './link.type';
import { TextComponent } from '../text/text.component';
import { PaletteEnum } from '../../enum/palette.enum';
import { BemUtil } from '../../util/bem.util';

@Component({
  selector: 'link-component',
  templateUrl: './link.component.html',
  styleUrl: './link.component.scss',
  imports: [TextComponent, CommonModule],
})
export class LinkComponent {
  label = input.required<string>();

  href = input.required<string>();

  type = input.required<LinkType>();

  palette = input.required<keyof typeof PaletteEnum>();

  external = input(true);

  buildHref() {
    switch (this.type()) {
      case 'page':
        return this.href();
      case 'email':
        return 'mailto:'.concat(this.href());
      case 'phone':
        return 'tel:'.concat(this.href());
    }
  }

  buildSectionClassList() {
    const textPalette = BemUtil.build('link', 'palette', this.palette());
    return [textPalette];
  }
}
