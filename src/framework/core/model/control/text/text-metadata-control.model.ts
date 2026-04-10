import { TextType } from '../../../type/text.type';
import { ComponentBaseModel } from '../../base/component-base.model';
import { MetadataBaseModel } from '../../base/metadata-base.model';

interface InternalMetadataModel {
  type: TextType;
}

export interface TextMetadataControlModel extends ComponentBaseModel<
  MetadataBaseModel,
  InternalMetadataModel
> {}
