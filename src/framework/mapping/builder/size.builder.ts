import { BemUtility } from '../../utility/bem.utility';
import { SIZE_BLOCK, SizeElementType, SizeModifierType } from '../constant/size.type';

export const buildSize = (element: SizeElementType, modifier: SizeModifierType) => {
  return BemUtility.build(SIZE_BLOCK, element, modifier);
};
