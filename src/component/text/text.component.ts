import { Component, input } from '@angular/core';
import { NgClass } from '@angular/common';
import { ColorType, TextType } from './text.type';

@Component({
  selector: 'text-component',
  templateUrl: './text.component.html',
  styleUrl: './text.component.scss',
  imports: [NgClass],
})
export class TextComponent {
  type = input.required<TextType>();

  value = input.required<string>();

  color = input<ColorType>('primary');

  isLink = input(false);

  getTextClassName() {
    const color = `color__${this.color()}`;
    const link = this.isLink() ? `link__${this.color()}` : '';
    return [color, link];
  }
}
