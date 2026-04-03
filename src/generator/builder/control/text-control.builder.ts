import { TextType } from '../../../core/type/text.type';
import { NodeModel } from '../../model/node/node.model';

export class TextControlBuilder {
  private values: string[] = [];

  static builder() {
    return new TextControlBuilder();
  }

  addText(value: string) {
    this.values.push(value);
    return this;
  }

  build(type: TextType): NodeModel {
    return {
      componentNode: {
        component: 'control',
        kind: 'text',
        data: {
          base: {},
          extend: {
            values: this.values,
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
