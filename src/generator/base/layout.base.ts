import { ComponentBase } from './component.base';
import { LayoutType } from '../type/layout.type';

export class LayoutBase extends ComponentBase<LayoutType> {
  constructor(protected override type: LayoutType) {
    super(type);
  }
}
