import { NodeModel } from '../../model/node/node.model';

export class FlexUtilityBuilder {
  static build(children: NodeModel[]): NodeModel {
    return {
      componentNode: {
        component: 'utility',
        kind: 'flex',
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
