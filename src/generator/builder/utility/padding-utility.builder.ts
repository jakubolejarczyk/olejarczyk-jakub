import { SizeType } from '../../../core/type/size.type';
import { NodeModel } from '../../model/node/node.model';

export class PaddingUtilityBuilder {
  private size: SizeType = 'md';

  private children: NodeModel[] = [];

  static builder() {
    return new PaddingUtilityBuilder();
  }

  setSize(size: SizeType) {
    this.size = size;
    return this;
  }

  setChildren(children: NodeModel[]) {
    this.children = children;
    return this;
  }

  build(): NodeModel {
    return {
      componentNode: {
        component: 'utility',
        kind: 'padding',
        data: {
          base: {},
          extend: {},
        },
        metadata: {
          base: {
            color: 'primary',
          },
          extend: {
            size: this.size,
          },
        },
      },
      children: this.children,
    };
  }
}
