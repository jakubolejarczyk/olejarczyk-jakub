import { SectionDataModel } from '../../../app/data/section/section-data.model';
import { BaseComponentModel } from '../base/base-component.model';
import { BaseKindModel } from '../base/base-kind.model';
import { SectionMetadataModel } from '../metadata/section-metadata.model';
import { TComponentKind } from '../type/component-kind.type';

export interface SectionComponentModel
  extends
    BaseKindModel<TComponentKind, 'section'>,
    BaseComponentModel<SectionDataModel, SectionMetadataModel> {}
