import { TextType } from '../../../core/type/text.type';
import { NodeModel } from '../../model/node/node.model';

export class TextControlBuilder {
  static build(type: TextType, value: string): NodeModel {
    return {
      componentNode: {
        component: 'control',
        kind: 'text',
        data: {
          base: {},
          extend: {
            value,
          },
        },
        metadata: {
          base: {
            palette: 'primary',
          },
          extend: {
            type,
          },
        },
      },
      children: [],
    };
  }
}
