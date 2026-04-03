import { NodeModel } from '../../model/node/node.model';

export class RootLayoutBuilder {
  private children: NodeModel[] = [];

  static builder() {
    return new RootLayoutBuilder();
  }

  setChildren(children: NodeModel[]) {
    this.children = children;
    return this;
  }

  build(): NodeModel {
    return {
      componentNode: {
        component: 'layout',
        kind: 'root',
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
