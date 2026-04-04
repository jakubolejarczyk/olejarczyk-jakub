import { StringUtility } from './string.utility';

export class BemUtility {
  static build(block: string, element: string, modifier: string) {
    const hasBlock = StringUtility.isNotEmpty(block);
    const hasElement = StringUtility.isNotEmpty(element);
    const hasModifier = StringUtility.isNotEmpty(modifier);

    if (hasBlock && hasElement && hasModifier) {
      return `${block}__${element}--${modifier}`;
    }
    if (hasBlock && hasElement && !hasModifier) {
      return `${block}__${element}`;
    }
    if (hasBlock && !hasElement && hasModifier) {
      return `${block}--${modifier}`;
    }
    if (hasBlock && !hasElement && !hasModifier) {
      return block;
    }
    throw new Error('Failed to build BEM class name!');
  }
}
