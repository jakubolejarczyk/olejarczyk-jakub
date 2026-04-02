import { PaletteType } from '../../../core/type/palette.type';
import { NodeModel } from '../../model/node/node.model';

export class FooterLayoutBuilder {
  static build(palette: PaletteType, children: NodeModel[]): NodeModel {
    return {
      component: {
        kind: 'layout',
        layout: 'footer',
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
