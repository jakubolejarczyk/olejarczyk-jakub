import { StringLogicUtility } from './string-logic.utility';

export class BemLogicUtility {
  static build(block: string, element?: string, modifier?: string) {
    if (
      StringLogicUtility.isNotEmpty(block) &&
      StringLogicUtility.isNotEmpty(element) &&
      StringLogicUtility.isNotEmpty(modifier)
    ) {
      return `${block}__${element}--${modifier}`;
    }
    if (
      StringLogicUtility.isNotEmpty(block) &&
      StringLogicUtility.isNotEmpty(element) &&
      StringLogicUtility.isEmpty(modifier)
    ) {
      return `${block}__${element}`;
    }
    if (
      StringLogicUtility.isNotEmpty(block) &&
      StringLogicUtility.isEmpty(element) &&
      StringLogicUtility.isNotEmpty(modifier)
    ) {
      return `${block}--${modifier}`;
    }
    if (
      StringLogicUtility.isNotEmpty(block) &&
      StringLogicUtility.isEmpty(element) &&
      StringLogicUtility.isEmpty(modifier)
    ) {
      return block;
    }
    throw new Error('Failed to build BEM class name!');
  }
}
