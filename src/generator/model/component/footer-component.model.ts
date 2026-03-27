import { BaseComponentModel } from '../base/base-component.model';
import { BaseKindModel } from '../base/base-kind.model';
import { FooterDataModel } from '../data/footer-data.model';
import { FooterMetadataModel } from '../metadata/footer-metadata.model';
import { TComponentKind } from '../type/component-kind.type';

export interface FooterComponentModel
  extends
    BaseKindModel<TComponentKind, 'footer'>,
    BaseComponentModel<FooterDataModel, FooterMetadataModel> {}
