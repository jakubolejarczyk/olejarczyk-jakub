import { BaseKindModel } from '../base/base-kind.model';
import { CopyrightDataModel } from '../../../component/model/data/copyright-data.model';
import { CopyrightMetadataModel } from '../../../component/model/metadata/copyright-metadata.model';
import { LayoutKindType } from '../type/layout-kind.type';

interface CopyrightLayoutNodeModel extends BaseKindModel<LayoutKindType, 'copyright'> {
  data: CopyrightDataModel;
  metadata: CopyrightMetadataModel;
}

export type LayoutNodeModel = CopyrightLayoutNodeModel;
