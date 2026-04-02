import { NodeModel } from '../../model/node/node.model';

export class FooterLayoutBuilder {
  static build(children: NodeModel[]): NodeModel {
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
            palette: 'primary',
          },
          extend: {},
        },
      },
      children,
    };
  }
}
