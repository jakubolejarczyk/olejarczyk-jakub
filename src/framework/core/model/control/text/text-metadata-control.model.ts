import { ComponentBaseModel } from '../../base/component-base.model';
import { MetadataBaseModel } from '../../base/metadata-base.model';

type TextType = 'small' | 'p' | 'h3' | 'h2' | 'h1';

interface ExtendModel {
  type: TextType;
}

export interface TextMetadataControlModel extends ComponentBaseModel<
  MetadataBaseModel,
  ExtendModel
> {}
