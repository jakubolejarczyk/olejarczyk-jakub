import { PaletteType } from '../../../core/type/palette.type';
import { NodeModel } from '../../model/node/node.model';

export class SectionLayoutBuilder {
  static build(palette: PaletteType, id: string, children: NodeModel[]): NodeModel {
    return {
      component: {
        kind: 'layout',
        layout: 'section',
        data: {
          base: {},
          extend: {},
        },
        metadata: {
          base: {
            palette,
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
