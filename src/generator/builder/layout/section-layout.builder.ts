import { ColorType } from '../../../core/type/color.type';
import { NodeModel } from '../../model/node/node.model';

export class SectionLayoutBuilder {
  private id: string = '';

  private color: ColorType = 'primary';

  private children: NodeModel[] = [];

  static builder() {
    return new SectionLayoutBuilder();
  }

  setId(id: string) {
    this.id = id;
    return this;
  }

  setColor(color: ColorType) {
    this.color = color;
    return this;
  }

  setChildren(children: NodeModel[]) {
    this.children = children;
    return this;
  }

  build(): NodeModel {
    return {
      componentNode: {
        component: 'layout',
        kind: 'section',
        data: {
          base: {},
          extend: {},
        },
        metadata: {
          base: {
            color: this.color,
          },
          extend: {
            id: this.id,
          },
        },
      },
      children: this.children,
    };
  }
}
