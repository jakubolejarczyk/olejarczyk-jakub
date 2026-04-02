import { NodeModel } from '../../model/node/node.model';

export class RootLayoutBuilder {
  static build(children: NodeModel[]): NodeModel {
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
      children,
    };
  }
}
