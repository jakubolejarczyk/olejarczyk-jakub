import { NodeModel } from '../../model/node.model';

export class HeaderLayoutBuilder {
  private children: NodeModel[] = [];

  static builder() {
    return new HeaderLayoutBuilder();
  }

  setChildren(children: NodeModel[]) {
    this.children = children;
    return this;
  }

  build(): NodeModel {
    return {
      componentNode: {
        component: 'layout',
        kind: 'header',
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
