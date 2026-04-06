import { BemUtility } from '../../utility/bem.utility';
import { ColorElementType, ColorModifierType } from '../constant/color.type';

export const buildColor = (
  block: string,
  element: ColorElementType,
  modifier: ColorModifierType,
) => {
  return BemUtility.build(block, element, modifier);
};
