import { BemUtility } from '../../utility/bem.utility';
import { COLOR_BLOCK, ColorElementType, ColorModifierType } from '../constant/color.type';

export const buildColor = (element: ColorElementType, modifier: ColorModifierType) => {
  return BemUtility.build(COLOR_BLOCK, element, modifier);
};
