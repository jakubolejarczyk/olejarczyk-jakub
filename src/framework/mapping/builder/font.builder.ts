import { BemUtility } from '../../utility/bem.utility';
import { FontElementType, FontModifierType, FONT_BLOCK } from '../constant/font.type';

export const buildFont = (element: FontElementType, modifier: FontModifierType) => {
  return BemUtility.build(FONT_BLOCK, element, modifier);
};
