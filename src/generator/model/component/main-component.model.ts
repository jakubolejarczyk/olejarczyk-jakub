import { BaseComponentModel } from '../base/base-component.model';
import { BaseKindModel } from '../base/base-kind.model';
import { MainDataModel } from '../data/main-data.model';
import { MainMetadataModel } from '../metadata/main-metadata.model';
import { TComponentKind } from '../type/component-kind.type';

export interface MainComponentModel
  extends
    BaseKindModel<TComponentKind, 'main'>,
    BaseComponentModel<MainDataModel, MainMetadataModel> {}
