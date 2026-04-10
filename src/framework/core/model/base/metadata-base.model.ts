import { ColorElementType, ColorModifierType } from '../../../mapping/constant/color.type';
import { FontElementType, FontModifierType } from '../../../mapping/constant/font.type';
import { SizeElementType, SizeModifierType } from '../../../mapping/constant/size.type';
import { WeightElementType, WeightModifierType } from '../../../mapping/constant/weight.type';

export interface MetadataBaseModel {
  color: Record<ColorElementType, ColorModifierType>;
  font: Record<FontElementType, FontModifierType>;
  size: Record<SizeElementType, SizeModifierType>;
  weight: Record<WeightElementType, WeightModifierType>;
}
