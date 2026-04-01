import { BaseModel } from '../../base/base.model';
import { MetadataBaseModel } from '../../base/metadata-base.model';

interface MetadataModel {
  id: string;
}

export interface SectionLayoutMetadataModel extends BaseModel<MetadataBaseModel, MetadataModel> {}
