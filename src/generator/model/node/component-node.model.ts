import { ContactDataModel } from '../../../component/model/data/contact-data.model';
import { TextControlDataModel } from '../../../component/model/data/control/text-control-data.model';
import { CopyrightDataModel } from '../../../component/model/data/copyright-data.model';
import { FlexDataModel } from '../../../component/model/data/layout/flex-data.model';
import { FlexItemDataModel } from '../../../component/model/data/layout/flex-item-data.model';
import { FooterLayoutDataModel } from '../../../core/model/layout/footer/footer-data-layout.model';
import { HeaderLayoutDataModel } from '../../../core/model/layout/header/header-metadata-layout.model';
import { MainLayoutDataModel } from '../../../core/model/layout/main/main-data-layout.model';
import { RootLayoutDataModel } from '../../../core/model/layout/root/root-data-layout.model';
import { SectionLayoutDataModel } from '../../../core/model/layout/section/section-data-layout.model';
import { ContactMetadataModel } from '../../../component/model/metadata/contact-metadata.model';
import { TextControlMetadataModel } from '../../../component/model/metadata/control/text-control-metadata.model';
import { CopyrightMetadataModel } from '../../../component/model/metadata/copyright-metadata.model';
import { FlexItemMetadataModel } from '../../../component/model/metadata/layout/flex-item-metadata.model';
import { FlexMetadataModel } from '../../../component/model/metadata/layout/flex-metadata.model';
import { FooterLayoutMetadataModel } from '../../../core/model/layout/footer/footer-metadata-layout.model';
import { HeaderLayoutMetadataModel } from '../../../core/model/layout/header/header-data-layout.model';
import { MainLayoutMetadataModel } from '../../../core/model/layout/main/main-metadata-layout.model';
import { RootLayoutMetadataModel } from '../../../core/model/layout/root/root-metadata-layout.model';
import { SectionLayoutMetadataModel } from '../../../core/model/layout/section/section-metadata-layout.model';
import { ComponentType } from '../../../core/type/component.type';
import { ControlKindBaseModel } from '../base/control-kind-base.model';
import { KindBaseModel } from '../base/kind-base.model';
import { LayoutKindBaseModel } from '../base/layout-kind-base.model';

interface RootComponentNodeModel
  extends KindBaseModel<ComponentType, 'layout'>, LayoutKindBaseModel<'root'> {
  data: RootLayoutDataModel;
  metadata: RootLayoutMetadataModel;
}

interface HeaderComponentNodeModel
  extends KindBaseModel<ComponentType, 'layout'>, LayoutKindBaseModel<'header'> {
  data: HeaderLayoutDataModel;
  metadata: HeaderLayoutMetadataModel;
}

interface MainComponentNodeModel
  extends KindBaseModel<ComponentType, 'layout'>, LayoutKindBaseModel<'main'> {
  data: MainLayoutDataModel;
  metadata: MainLayoutMetadataModel;
}

interface FooterComponentNodeModel
  extends KindBaseModel<ComponentType, 'layout'>, LayoutKindBaseModel<'footer'> {
  data: FooterLayoutDataModel;
  metadata: FooterLayoutMetadataModel;
}

interface SectionComponentNodeModel
  extends KindBaseModel<ComponentType, 'layout'>, LayoutKindBaseModel<'section'> {
  data: SectionLayoutDataModel;
  metadata: SectionLayoutMetadataModel;
}

interface FlexComponentNodeModel
  extends KindBaseModel<ComponentType, 'layout'>, LayoutKindBaseModel<'flex'> {
  data: FlexDataModel;
  metadata: FlexMetadataModel;
}

interface FlexItemComponentNodeModel
  extends KindBaseModel<ComponentType, 'layout'>, LayoutKindBaseModel<'flex-item'> {
  data: FlexItemDataModel;
  metadata: FlexItemMetadataModel;
}

interface ContactComponentNodeModel
  extends KindBaseModel<ComponentType, 'layout'>, LayoutKindBaseModel<'contact'> {
  data: ContactDataModel;
  metadata: ContactMetadataModel;
}

interface CopyrightComponentNodeModel
  extends KindBaseModel<ComponentType, 'layout'>, LayoutKindBaseModel<'copyright'> {
  data: CopyrightDataModel;
  metadata: CopyrightMetadataModel;
}

interface TextComponentNodeModel
  extends KindBaseModel<ComponentType, 'control'>, ControlKindBaseModel<'text'> {
  data: TextControlDataModel;
  metadata: TextControlMetadataModel;
}

export type ComponentNodeModel =
  | RootComponentNodeModel
  | HeaderComponentNodeModel
  | MainComponentNodeModel
  | FooterComponentNodeModel
  | SectionComponentNodeModel
  | FlexComponentNodeModel
  | FlexItemComponentNodeModel
  | ContactComponentNodeModel
  | CopyrightComponentNodeModel
  | TextComponentNodeModel;
