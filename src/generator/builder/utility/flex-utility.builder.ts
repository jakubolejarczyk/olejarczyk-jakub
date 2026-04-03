import { PositionType } from '../../../core/type/position.type';
import { NodeModel } from '../../model/node/node.model';

export class FlexUtilityBuilder {
  static build(
    alignItems: PositionType,
    justifyContent: PositionType,
    children: NodeModel[],
  ): NodeModel {
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
          extend: {
            alignItems,
            justifyContent,
          },
        },
      },
      children,
    };
  }
}
