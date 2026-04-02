import { ComponentBaseModel } from '../../base/component-base.model';
import { MetadataBaseModel } from '../../base/metadata-base.model';

interface InternalDataModel {
  id: string;
}

export interface SectionMetadataLayoutModel extends ComponentBaseModel<
  MetadataBaseModel,
  InternalDataModel
> {}
