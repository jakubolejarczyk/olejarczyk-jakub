import { NodeModel } from '../../model/node/node.model';

export class SectionLayoutBuilder {
  private id: string = '';

  private children: NodeModel[] = [];

  static builder() {
    return new SectionLayoutBuilder();
  }

  setId(id: string) {
    this.id = id;
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
            palette: 'primary',
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
