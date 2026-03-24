import { Component, input } from '@angular/core';
import { TextType } from './text.type';
import { PaletteEnum } from '../../enum/palette.enum';
import { CommonModule } from '@angular/common';
import { BemUtil } from '../../util/bem.util';

@Component({
  selector: 'text-component',
  templateUrl: './text.component.html',
  styleUrl: './text.component.scss',
  imports: [CommonModule],
})
export class TextComponent {
  type = input.required<TextType>();

  value = input.required<string>();

  palette = input<keyof typeof PaletteEnum>('none');

  buildTextClassList() {
    if (this.palette() == 'none') return [];
    const textPalette = BemUtil.build('custom', 'palette', this.palette());
    return [textPalette];
  }
}
