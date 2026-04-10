import { PositionType } from '../../../type/position.type';
import { SizeType } from '../../../type/size.type';
import { ComponentBaseModel } from '../../base/component-base.model';
import { MetadataBaseModel } from '../../base/metadata-base.model';

interface InternalMetadataModel {
  alignItems: PositionType;
  justifyContent: PositionType;
  gap: SizeType;
}

export interface FlexMetadataUtilityModel extends ComponentBaseModel<
  MetadataBaseModel,
  InternalMetadataModel
> {}
