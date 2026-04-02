import { TextDataControlModel } from '../../../core/model/control/text/text-data-control.model';
import { TextMetadataControlModel } from '../../../core/model/control/text/text-metadata-control.model';
import { FooterDataLayoutModel } from '../../../core/model/layout/footer/footer-data-layout.model';
import { FooterMetadataLayoutModel } from '../../../core/model/layout/footer/footer-metadata-layout.model';
import { HeaderDataLayoutModel } from '../../../core/model/layout/header/header-data-layout.model';
import { HeaderMetadataLayoutModel } from '../../../core/model/layout/header/header-metadata-layout.model';
import { MainDataLayoutModel } from '../../../core/model/layout/main/main-data-layout.model';
import { MainMetadataLayoutModel } from '../../../core/model/layout/main/main-metadata-layout.model';
import { RootDataLayoutModel } from '../../../core/model/layout/root/root-data-layout.model';
import { RootMetadataLayoutModel } from '../../../core/model/layout/root/root-metadata-layout.model';
import { SectionDataLayoutModel } from '../../../core/model/layout/section/section-data-layout.model';
import { SectionMetadataLayoutModel } from '../../../core/model/layout/section/section-metadata-layout.model';
import { FlexItemDataUtilityModel } from '../../../core/model/utility/flex-item/flex-item-data-utility.model';
import { FlexItemMetadataUtilityModel } from '../../../core/model/utility/flex-item/flex-item-metadata-utility.model';
import { FlexDataUtilityModel } from '../../../core/model/utility/flex/flex-data-utility.model';
import { FlexMetadataUtilityModel } from '../../../core/model/utility/flex/flex-metadata-utility.model';
import {
  ControlDecoratorModel,
  LayoutDecoratorModel,
  UtilityDecoratorModel,
} from '../decorator/decorator.model';

interface BaseComponentNodeModel<TData, TMetadata> {
  data: TData;
  metadata: TMetadata;
}

interface BaseControlComponentNodeModel<TData, TMetadata>
  extends ControlDecoratorModel, BaseComponentNodeModel<TData, TMetadata> {}

interface BaseLayoutComponentNodeModel<TData, TMetadata>
  extends LayoutDecoratorModel, BaseComponentNodeModel<TData, TMetadata> {}

interface BaseUtilityComponentNodeModel<TData, TMetadata>
  extends UtilityDecoratorModel, BaseComponentNodeModel<TData, TMetadata> {}

interface TextControlComponentNodeModel extends BaseControlComponentNodeModel<
  TextDataControlModel,
  TextMetadataControlModel
> {}

interface FooterLayoutComponentNodeModel extends BaseLayoutComponentNodeModel<
  FooterDataLayoutModel,
  FooterMetadataLayoutModel
> {}

interface HeaderLayoutComponentNodeModel extends BaseLayoutComponentNodeModel<
  HeaderDataLayoutModel,
  HeaderMetadataLayoutModel
> {}

interface MainLayoutComponentNodeModel extends BaseLayoutComponentNodeModel<
  MainDataLayoutModel,
  MainMetadataLayoutModel
> {}

interface RootLayoutComponentNodeModel extends BaseLayoutComponentNodeModel<
  RootDataLayoutModel,
  RootMetadataLayoutModel
> {}

interface SectionLayoutComponentNodeModel extends BaseLayoutComponentNodeModel<
  SectionDataLayoutModel,
  SectionMetadataLayoutModel
> {}

interface FlexUtilityComponentNodeModel extends BaseUtilityComponentNodeModel<
  FlexDataUtilityModel,
  FlexMetadataUtilityModel
> {}

interface FlexItemUtilityComponentNodeModel extends BaseUtilityComponentNodeModel<
  FlexItemDataUtilityModel,
  FlexItemMetadataUtilityModel
> {}

export type ComponentNodeModel =
  | TextControlComponentNodeModel
  | FooterLayoutComponentNodeModel
  | HeaderLayoutComponentNodeModel
  | MainLayoutComponentNodeModel
  | RootLayoutComponentNodeModel
  | SectionLayoutComponentNodeModel
  | FlexUtilityComponentNodeModel
  | FlexItemUtilityComponentNodeModel;
