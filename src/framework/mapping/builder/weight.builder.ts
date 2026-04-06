import { BemUtility } from '../../utility/bem.utility';
import { WEIGHT_BLOCK, WeightElementType, WeightModifierType } from '../constant/weight.type';

export const buildWeight = (element: WeightElementType, modifier: WeightModifierType) => {
  return BemUtility.build(WEIGHT_BLOCK, element, modifier);
};
