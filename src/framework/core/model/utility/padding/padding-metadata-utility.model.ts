import { SizeType } from '../../../type/size.type';
import { ComponentBaseModel } from '../../base/component-base.model';
import { MetadataBaseModel } from '../../base/metadata-base.model';

interface InternalMetadataModel {
  size: SizeType;
}

export interface PaddingMetadataUtilityModel extends ComponentBaseModel<
  MetadataBaseModel,
  InternalMetadataModel
> {}
