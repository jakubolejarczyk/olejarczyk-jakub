import { BemUtility } from '../../utility/bem.utility';
import { SizeElementType, SizeModifierType } from '../constant/size.type';

export const buildSize = (block: string, element: SizeElementType, modifier: SizeModifierType) => {
  return BemUtility.build(block, element, modifier);
};
