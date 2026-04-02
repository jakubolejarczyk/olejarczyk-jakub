import { NodeModel } from '../../model/node/node.model';

export class SectionLayoutBuilder {
  static build(id: string, children: NodeModel[]): NodeModel {
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
            id,
          },
        },
      },
      children,
    };
  }
}
