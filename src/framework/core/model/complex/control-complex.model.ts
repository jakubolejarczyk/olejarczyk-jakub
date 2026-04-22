import { TextDataControlModel } from '../control/text/text-data-control.model';
import { TextMetadataControlModel } from '../control/text/text-metadata-control.model';
import { TextStyleControlModel } from '../control/text/text-style-control.model';

interface TextComplexModel extends BaseComplexModel<
  TextDataControlModel,
  TextMetadataControlModel,
  TextStyleControlModel
> {}
