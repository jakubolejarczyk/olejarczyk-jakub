import { NodeModel } from '../../model/node.model';

export class MainLayoutBuilder {
  private children: NodeModel[] = [];

  static builder() {
    return new MainLayoutBuilder();
  }

  setChildren(children: NodeModel[]) {
    this.children = children;
    return this;
  }

  build(): NodeModel {
    return {
      componentNode: {
        component: 'layout',
        kind: 'main',
        data: {
          base: {},
          extend: {},
        },
        metadata: {
          base: {
            color: 'primary',
          },
          extend: {},
        },
      },
      children: this.children,
    };
  }
}
