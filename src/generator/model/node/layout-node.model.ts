import { CopyrightDataModel } from '../../../component/model/data/copyright-data.model';
import { CopyrightMetadataModel } from '../../../component/model/metadata/copyright-metadata.model';
import { LayoutType } from '../../../style/type/layout.type';
import { BaseKindModel } from '../base/base-kind.model';

interface CopyrightLayoutNodeModel extends BaseKindModel<LayoutType, 'copyright'> {
  data: CopyrightDataModel;
  metadata: CopyrightMetadataModel;
}

export type LayoutNodeModel = CopyrightLayoutNodeModel;
