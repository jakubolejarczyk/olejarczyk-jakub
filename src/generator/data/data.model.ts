import { ComponentUiKindEnum } from '../component/enum/component-ui-kind.enum';
import { KeyValueModel } from '../core/kind-value.model';
import { CopyrightDataModel } from './copyright-data.model';
import { FooterDataModel } from './footer-data.model';
import { HeaderDataModel } from './header-data.model';
import { MainDataModel } from './main-data.model';
import { SectionDataModel } from './section-data.model';

export type DataModel =
  | KeyValueModel<ComponentUiKindEnum, ComponentUiKindEnum.copyright, CopyrightDataModel>
  | KeyValueModel<ComponentUiKindEnum, ComponentUiKindEnum.footer, FooterDataModel>
  | KeyValueModel<ComponentUiKindEnum, ComponentUiKindEnum.header, HeaderDataModel>
  | KeyValueModel<ComponentUiKindEnum, ComponentUiKindEnum.main, MainDataModel>
  | KeyValueModel<ComponentUiKindEnum, ComponentUiKindEnum.section, SectionDataModel>;
