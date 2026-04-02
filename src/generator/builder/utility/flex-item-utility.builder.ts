import { NodeModel } from '../../model/node/node.model';

export class FlexItemUtilityBuilder {
  static build(children: NodeModel[]): NodeModel {
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
      children,
    };
  }
}
