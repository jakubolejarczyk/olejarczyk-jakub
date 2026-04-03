import { NodeModel } from '../../model/node/node.model';

export class FlexItemLayoutBuilder {
  private children: NodeModel[] = [];

  static builder() {
    return new FlexItemLayoutBuilder();
  }

  setChildren(children: NodeModel[]) {
    this.children = children;
    return this;
  }

  build(children: NodeModel[]): NodeModel {
    return {
      componentNode: {
        component: 'utility',
        kind: 'flex-item',
        data: {
          base: {},
          extend: {},
        },
        metadata: {
          base: {
            palette: 'primary',
          },
          extend: {},
        },
      },
      children: this.children,
    };
  }
}
