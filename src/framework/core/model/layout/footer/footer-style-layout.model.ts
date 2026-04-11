import { ColorModifierType } from '../../../../mapping/constant/color.type';
import { SizeModifierType } from '../../../../mapping/constant/size.type';
import { ComponentBaseModel } from '../../base/component-base.model';
import { StyleBaseModel } from '../../base/style-base.model';

interface ExtendModel {
  backgroundColor: ColorModifierType;
  paddingSize: SizeModifierType;
}

export interface FooterStyleLayoutModel extends ComponentBaseModel<StyleBaseModel, ExtendModel> {}
