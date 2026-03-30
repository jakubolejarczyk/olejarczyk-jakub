import { StringUtility } from './string.utility';

export class BemUtility {
  static build(block: string, element?: string, modifier?: string) {
    if (
      StringUtility.isNotEmpty(block) &&
      StringUtility.isNotEmpty(element) &&
      StringUtility.isNotEmpty(modifier)
    ) {
      return `${block}__${element}--${modifier}`;
    }
    if (
      StringUtility.isNotEmpty(block) &&
      StringUtility.isNotEmpty(element) &&
      StringUtility.isEmpty(modifier)
    ) {
      return `${block}__${element}`;
    }
    if (
      StringUtility.isNotEmpty(block) &&
      StringUtility.isEmpty(element) &&
      StringUtility.isNotEmpty(modifier)
    ) {
      return `${block}--${modifier}`;
    }
    if (
      StringUtility.isNotEmpty(block) &&
      StringUtility.isEmpty(element) &&
      StringUtility.isEmpty(modifier)
    ) {
      return block;
    }
    throw new Error('Failed to build BEM class name!');
  }
}
