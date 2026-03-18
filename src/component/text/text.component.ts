import { Component, input } from '@angular/core';
import { NgClass } from '@angular/common';
import { TextType } from './text.type';

@Component({
  selector: 'text-component',
  templateUrl: './text.component.html',
  styleUrl: './text.component.scss',
  imports: [NgClass],
})
export class TextComponent {
  type = input.required<TextType>();

  value = input.required<string>();

  isLink = input(false);

  getTextClassName() {
    return this.isLink() ? 'text_for_link' : 'text';
  }
}
