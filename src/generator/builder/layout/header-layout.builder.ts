import { PaletteType } from '../../../core/type/palette.type';
import { NodeModel } from '../../model/node/node.model';

export class HeaderLayoutBuilder {
  static build(palette: PaletteType, children: NodeModel[]): NodeModel {
    return {
      component: {
        kind: 'layout',
        layout: 'header',
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
