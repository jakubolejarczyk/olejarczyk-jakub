import { FooterDataLayoutModel } from '../layout/footer/footer-data-layout.model';
import { FooterMetadataLayoutModel } from '../layout/footer/footer-metadata-layout.model';
import { FooterStyleLayoutModel } from '../layout/footer/footer-style-layout.model';
import { HeaderDataLayoutModel } from '../layout/header/header-data-layout.model';
import { HeaderMetadataLayoutModel } from '../layout/header/header-metadata-layout.model';
import { HeaderStyleLayoutModel } from '../layout/header/header-style-layout.model';
import { MainDataLayoutModel } from '../layout/main/main-data-layout.model';
import { MainMetadataLayoutModel } from '../layout/main/main-metadata-layout.model';
import { MainStyleLayoutModel } from '../layout/main/main-style-layout.model';
import { SectionDataLayoutModel } from '../layout/section/section-data-layout.model';
import { SectionMetadataLayoutModel } from '../layout/section/section-metadata-layout.model';
import { SectionStyleLayoutModel } from '../layout/section/section-style-layout.model';

export interface FooterComplexModel extends ComplexBaseModel<
  FooterDataLayoutModel,
  FooterMetadataLayoutModel,
  FooterStyleLayoutModel
> {}

export interface HeaderComplexModel extends ComplexBaseModel<
  HeaderDataLayoutModel,
  HeaderMetadataLayoutModel,
  HeaderStyleLayoutModel
> {}

export interface MainComplexModel extends ComplexBaseModel<
  MainDataLayoutModel,
  MainMetadataLayoutModel,
  MainStyleLayoutModel
> {}

export interface SectionComplexModel extends ComplexBaseModel<
  SectionDataLayoutModel,
  SectionMetadataLayoutModel,
  SectionStyleLayoutModel
> {}
