import { PaletteType } from '../../../style/type/palette.type';
import { TextType } from '../../../style/type/text.type';
import { NodeModel } from '../../model/node/node.model';

export class TextControlBuilder {
  static build(palette: PaletteType, value: string, type: TextType): NodeModel {
    return {
      component: {
        kind: 'control',
        control: 'text',
        data: {
          base: {},
          extend: {
            value,
          },
        },
        metadata: {
          base: {
            palette,
          },
          extend: {
            type,
          },
        },
      },
    };
  }
}
