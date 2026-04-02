import { NodeModel } from '../../model/node/node.model';

export class HeaderLayoutBuilder {
  static build(children: NodeModel[]): NodeModel {
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
            palette: 'primary',
          },
          extend: {},
        },
      },
      children,
    };
  }
}
