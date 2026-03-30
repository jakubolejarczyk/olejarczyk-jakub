import { ContactDataModel } from '../../../component/model/data/contact-data.model';
import { CopyrightDataModel } from '../../../component/model/data/copyright-data.model';
import { ContactMetadataModel } from '../../../component/model/metadata/contact-metadata.model';
import { CopyrightMetadataModel } from '../../../component/model/metadata/copyright-metadata.model';
import { LayoutType } from '../../../style/type/layout.type';
import { BaseKindModel } from '../base/base-kind.model';

interface ContactLayoutNodeModel extends BaseKindModel<LayoutType, 'contact'> {
  data: ContactDataModel;
  metadata: ContactMetadataModel;
}

interface CopyrightLayoutNodeModel extends BaseKindModel<LayoutType, 'copyright'> {
  data: CopyrightDataModel;
  metadata: CopyrightMetadataModel;
}

export type LayoutNodeModel = ContactLayoutNodeModel | CopyrightLayoutNodeModel;
