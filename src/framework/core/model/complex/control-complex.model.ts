import { TextDataControlModel } from '../control/text/text-data-control.model';
import { TextMetadataControlModel } from '../control/text/text-metadata-control.model';
import { TextStyleControlModel } from '../control/text/text-style-control.model';

export interface TextComplexModel extends ComplexBaseModel<
  TextDataControlModel,
  TextMetadataControlModel,
  TextStyleControlModel
> {}
