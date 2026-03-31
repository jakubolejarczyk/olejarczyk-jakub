import { ContactDataModel } from '../../../component/model/data/contact-data.model';
import { TextControlDataModel } from '../../../component/model/data/control/text-control-data.model';
import { CopyrightDataModel } from '../../../component/model/data/copyright-data.model';
import { FlexDataModel } from '../../../component/model/data/layout/flex-data.model';
import { FlexItemDataModel } from '../../../component/model/data/layout/flex-item-data.model';
import { FooterDataModel } from '../../../component/model/data/layout/footer-data.model';
import { MainDataModel } from '../../../component/model/data/layout/main-data.model';
import { RootDataModel } from '../../../component/model/data/layout/root-data.model';
import { ContactMetadataModel } from '../../../component/model/metadata/contact-metadata.model';
import { TextControlMetadataModel } from '../../../component/model/metadata/control/text-control-metadata.model';
import { CopyrightMetadataModel } from '../../../component/model/metadata/copyright-metadata.model';
import { FlexItemMetadataModel } from '../../../component/model/metadata/layout/flex-item-metadata.model';
import { FlexMetadataModel } from '../../../component/model/metadata/layout/flex-metadata.model';
import { FooterMetadataModel } from '../../../component/model/metadata/layout/footer-metadata.model';
import { MainMetadataModel } from '../../../component/model/metadata/layout/main-metadata.model';
import { RootMetadataModel } from '../../../component/model/metadata/layout/root-metadata.model';
import { ComponentType } from '../../../style/type/component.type';
import { BaseKindModel } from '../base/base-kind.model';

interface RootComponentNodeModel extends BaseKindModel<ComponentType, 'root'> {
  data: RootDataModel;
  metadata: RootMetadataModel;
}

interface MainComponentNodeModel extends BaseKindModel<ComponentType, 'main'> {
  data: MainDataModel;
  metadata: MainMetadataModel;
}

interface FooterComponentNodeModel extends BaseKindModel<ComponentType, 'footer'> {
  data: FooterDataModel;
  metadata: FooterMetadataModel;
}

interface FlexComponentNodeModel extends BaseKindModel<ComponentType, 'flex'> {
  data: FlexDataModel;
  metadata: FlexMetadataModel;
}

interface FlexItemComponentNodeModel extends BaseKindModel<ComponentType, 'flex-item'> {
  data: FlexItemDataModel;
  metadata: FlexItemMetadataModel;
}

interface ContactComponentNodeModel extends BaseKindModel<ComponentType, 'contact'> {
  data: ContactDataModel;
  metadata: ContactMetadataModel;
}

interface CopyrightComponentNodeModel extends BaseKindModel<ComponentType, 'copyright'> {
  data: CopyrightDataModel;
  metadata: CopyrightMetadataModel;
}

interface TextComponentNodeModel extends BaseKindModel<ComponentType, 'text'> {
  data: TextControlDataModel;
  metadata: TextControlMetadataModel;
}

export type ComponentNodeModel =
  | RootComponentNodeModel
  | MainComponentNodeModel
  | FooterComponentNodeModel
  | FlexComponentNodeModel
  | FlexItemComponentNodeModel
  | ContactComponentNodeModel
  | CopyrightComponentNodeModel
  | TextComponentNodeModel;
