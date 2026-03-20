import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class BemUtil {
  static build(block: string, element: string, modifier: string) {
    if (block !== '' && element === '' && modifier === '') {
      return block;
    }
    if (block !== '' && element !== '' && modifier === '') {
      return `${block}__${element}`;
    }
    return `${block}__${element}--${modifier}`;
  }
}
