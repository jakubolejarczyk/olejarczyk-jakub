import { BaseComponentModel } from '../base/base-component.model';
import { BaseKindModel } from '../base/base-kind.model';
import { CopyrightDataModel } from '../data/copyright-data.model';
import { CopyrightMetadataModel } from '../metadata/copyright-metadata.model';
import { TComponentKind } from '../type/component-kind.type';

export interface CopyrightComponentModel
  extends
    BaseKindModel<TComponentKind, 'copyright'>,
    BaseComponentModel<CopyrightDataModel, CopyrightMetadataModel> {}
