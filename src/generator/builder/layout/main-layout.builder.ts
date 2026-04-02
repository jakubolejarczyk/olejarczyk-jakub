import { PaletteType } from '../../../core/type/palette.type';
import { NodeModel } from '../../model/node/node.model';

export class MainLayoutBuilder {
  static build(palette: PaletteType, children: NodeModel[]): NodeModel {
    return {
      component: {
        kind: 'layout',
        layout: 'main',
        data: {
          base: {},
          extend: {},
        },
        metadata: {
          base: {
            palette,
          },
          extend: {},
        },
      },
      children,
    };
  }
}
