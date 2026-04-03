import { TextType } from '../../../core/type/text.type';
import { NodeModel } from '../../model/node/node.model';

export class TextControlBuilder {
  static build(type: TextType, ...values: string[]): NodeModel {
    return {
      componentNode: {
        component: 'control',
        kind: 'text',
        data: {
          base: {},
          extend: {
            values,
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
