import { Component, input } from '@angular/core';
import { TText } from './text.type';

@Component({
  selector: 'text-component',
  templateUrl: './text.component.html',
  styleUrl: './text.component.scss',
})
export class TextComponent {
  type = input<TText>('p');

  value = input.required<string>();
}
