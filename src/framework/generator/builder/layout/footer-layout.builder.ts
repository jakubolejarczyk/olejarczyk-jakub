import { NodeModel } from '../../model/node.model';

export class FooterLayoutBuilder {
  private children: NodeModel[] = [];

  static builder() {
    return new FooterLayoutBuilder();
  }

  setChildren(children: NodeModel[]) {
    this.children = children;
    return this;
  }

  build(): NodeModel {
    return {
      componentNode: {
        component: 'layout',
        kind: 'footer',
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
