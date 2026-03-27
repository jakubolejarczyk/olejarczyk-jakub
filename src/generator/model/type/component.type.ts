import { CopyrightComponentModel } from '../component/copyright-component.model';
import { FooterComponentModel } from '../component/footer-component.model';
import { HeaderComponentModel } from '../component/header-component.model';
import { MainComponentModel } from '../component/main-component.model';
import { SectionComponentModel } from '../component/section-component.model';

export type TComponent =
  | CopyrightComponentModel
  | FooterComponentModel
  | HeaderComponentModel
  | MainComponentModel
  | SectionComponentModel;
