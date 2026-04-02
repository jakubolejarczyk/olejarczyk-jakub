import { TextType } from '../../../../core/type/text.type';
import { BaseModel } from '../../base/base.model';
import { MetadataBaseModel } from '../../base/metadata-base.model';

interface MetadataModel {
  type: TextType;
}

export interface TextControlMetadataModel extends BaseModel<MetadataBaseModel, MetadataModel> {}
