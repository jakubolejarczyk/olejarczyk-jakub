import { ColorModifierType } from '../../../../mapping/constant/color.type';
import { FontModifierType } from '../../../../mapping/constant/font.type';
import { SizeModifierType } from '../../../../mapping/constant/size.type';
import { WeightModifierType } from '../../../../mapping/constant/weight.type';
import { ComponentBaseModel } from '../../base/component-base.model';
import { StyleBaseModel } from '../../base/style-base.model';

interface ExtendModel {
  textColor: ColorModifierType;
  textFont: FontModifierType;
  paddingSize: SizeModifierType;
  textSize: SizeModifierType;
  textWeight: WeightModifierType;
}

export interface TextStyleControlModel extends ComponentBaseModel<StyleBaseModel, ExtendModel> {}
