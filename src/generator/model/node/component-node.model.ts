import { ContactDataModel } from '../../../component/model/data/contact-data.model';
import { TextControlDataModel } from '../../../component/model/data/control/text-control-data.model';
import { CopyrightDataModel } from '../../../component/model/data/copyright-data.model';
import { ContactMetadataModel } from '../../../component/model/metadata/contact-metadata.model';
import { TextControlMetadataModel } from '../../../component/model/metadata/control/text-control-metadata.model';
import { CopyrightMetadataModel } from '../../../component/model/metadata/copyright-metadata.model';
import { ComponentType } from '../../../style/type/component.type';
import { BaseKindModel } from '../base/base-kind.model';

interface ContactComponentNodeModel extends BaseKindModel<ComponentType, 'contact'> {
  data: ContactDataModel;
  metadata: ContactMetadataModel;
}

interface CopyrightComponentNodeModel extends BaseKindModel<ComponentType, 'copyright'> {
  data: CopyrightDataModel;
  metadata: CopyrightMetadataModel;
}

interface TextComponentNodeModel extends BaseKindModel<ComponentType, 'text'> {
  data: TextControlDataModel;
  metadata: TextControlMetadataModel;
}

export type ComponentNodeModel =
  | ContactComponentNodeModel
  | CopyrightComponentNodeModel
  | TextComponentNodeModel;
