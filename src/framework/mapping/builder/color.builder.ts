import { BemUtility } from '../../utility/bem.utility';
import { ColorType } from '../constant/color.type';

export const buildColor = (block: string, modifier: ColorType) => {
  return BemUtility.build(block, 'color', modifier);
};
