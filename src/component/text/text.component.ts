import { Component, input } from '@angular/core';
import { TextType } from './text.type';

@Component({
  selector: 'text-component',
  templateUrl: './text.component.html',
  styleUrl: './text.component.scss',
})
export class TextComponent {
  type = input.required<TextType>();

  value = input.required<string>();
}
