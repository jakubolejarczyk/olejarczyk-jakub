import { TextDataControlModel } from '../../core/model/control/text/text-data-control.model';
import { TextMetadataControlModel } from '../../core/model/control/text/text-metadata-control.model';
import { TextStyleControlModel } from '../../core/model/control/text/text-style-control.model';
import { FooterDataLayoutModel } from '../../core/model/layout/footer/footer-data-layout.model';
import { FooterMetadataLayoutModel } from '../../core/model/layout/footer/footer-metadata-layout.model';
import { FooterStyleLayoutModel } from '../../core/model/layout/footer/footer-style-layout.model';
import { HeaderDataLayoutModel } from '../../core/model/layout/header/header-data-layout.model';
import { HeaderMetadataLayoutModel } from '../../core/model/layout/header/header-metadata-layout.model';
import { HeaderStyleLayoutModel } from '../../core/model/layout/header/header-style-layout.model';
import { MainDataLayoutModel } from '../../core/model/layout/main/main-data-layout.model';
import { MainMetadataLayoutModel } from '../../core/model/layout/main/main-metadata-layout.model';
import { MainStyleLayoutModel } from '../../core/model/layout/main/main-style-layout.model';
import { SectionDataLayoutModel } from '../../core/model/layout/section/section-data-layout.model';
import { SectionMetadataLayoutModel } from '../../core/model/layout/section/section-metadata-layout.model';
import { SectionStyleLayoutModel } from '../../core/model/layout/section/section-style-layout.model';

interface BaseComponentModel<TData, TMetadata, TStyle> {
  data: TData;
  metadata: TMetadata;
  style: TStyle;
}

interface TextControlComponentModel extends BaseComponentModel<
  TextDataControlModel,
  TextMetadataControlModel,
  TextStyleControlModel
> {}

interface FooterLayoutComponentModel extends BaseComponentModel<
  FooterDataLayoutModel,
  FooterMetadataLayoutModel,
  FooterStyleLayoutModel
> {}

interface HeaderLayoutComponentModel extends BaseComponentModel<
  HeaderDataLayoutModel,
  HeaderMetadataLayoutModel,
  HeaderStyleLayoutModel
> {}

interface MainLayoutComponentModel extends BaseComponentModel<
  MainDataLayoutModel,
  MainMetadataLayoutModel,
  MainStyleLayoutModel
> {}

interface SectionLayoutComponentModel extends BaseComponentModel<
  SectionDataLayoutModel,
  SectionMetadataLayoutModel,
  SectionStyleLayoutModel
> {}

export type ComponentModel =
  | TextControlComponentModel
  | FooterLayoutComponentModel
  | HeaderLayoutComponentModel
  | MainLayoutComponentModel
  | SectionLayoutComponentModel;

// export interface NodeModel {
//   componentNode: ComponentNodeModel;
//   children?: NodeModel[];
// }
