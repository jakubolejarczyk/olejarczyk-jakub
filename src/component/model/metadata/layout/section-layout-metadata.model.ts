import { BaseModel } from '../../../../core/model/base/component-base.model';
import { MetadataBaseModel } from '../../../../core/model/base/metadata-base.model';

interface MetadataModel {
  id: string;
}

export interface SectionLayoutMetadataModel extends BaseModel<MetadataBaseModel, MetadataModel> {}
