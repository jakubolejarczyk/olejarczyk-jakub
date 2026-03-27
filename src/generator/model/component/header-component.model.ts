import { BaseComponentModel } from '../base/base-component.model';
import { BaseKindModel } from '../base/base-kind.model';
import { HeaderDataModel } from '../data/header-data.model';
import { HeaderMetadataModel } from '../metadata/header-metadata.model';
import { TComponentKind } from '../type/component-kind.type';

export interface HeaderComponentModel
  extends
    BaseKindModel<TComponentKind, 'header'>,
    BaseComponentModel<HeaderDataModel, HeaderMetadataModel> {}
