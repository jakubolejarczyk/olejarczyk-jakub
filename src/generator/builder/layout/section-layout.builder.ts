import { PaletteType } from '../../../core/type/palette.type';
import { NodeModel } from '../../model/node/node.model';

export class SectionLayoutBuilder {
  private id: string = '';

  private palette: PaletteType = 'primary';

  private children: NodeModel[] = [];

  static builder() {
    return new SectionLayoutBuilder();
  }

  setId(id: string) {
    this.id = id;
    return this;
  }

  setPalette(palette: PaletteType) {
    this.palette = palette;
    return this;
  }

  setChildren(children: NodeModel[]) {
    this.children = children;
    return this;
  }

  build(): NodeModel {
    return {
      componentNode: {
        component: 'layout',
        kind: 'section',
        data: {
          base: {},
          extend: {},
        },
        metadata: {
          base: {
            palette: this.palette,
          },
          extend: {
            id: this.id,
          },
        },
      },
      children: this.children,
    };
  }
}
