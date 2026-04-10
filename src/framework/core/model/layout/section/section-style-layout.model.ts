import { ColorModifierType } from '../../../../mapping/constant/color.type';
import { SizeModifierType } from '../../../../mapping/constant/size.type';
import { ComponentBaseModel } from '../../base/component-base.model';
import { MetadataBaseModel } from '../../base/metadata-base.model';

interface ExtendModel {
  background: ColorModifierType;
  padding: SizeModifierType;
}

export interface SectionStyleLayoutModel extends ComponentBaseModel<
  MetadataBaseModel,
  ExtendModel
> {}
