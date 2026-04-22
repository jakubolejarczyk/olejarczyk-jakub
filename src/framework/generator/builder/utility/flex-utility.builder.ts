import { PositionType } from '../../../core/type/position.type';
import { SizeType } from '../../../core/type/size.type';
import { NodeModel } from '../../model/node.model';

export class FlexUtilityBuilder {
  private alignItems: PositionType = 'left';

  private justifyContent: PositionType = 'left';

  private gap: SizeType = 'md';

  private children: NodeModel[] = [];

  static builder() {
    return new FlexUtilityBuilder();
  }

  setAlignItems(alignItems: PositionType) {
    this.alignItems = alignItems;
    return this;
  }

  setJustifyContent(justifyContent: PositionType) {
    this.justifyContent = justifyContent;
    return this;
  }

  setGap(gap: SizeType) {
    this.gap = gap;
    return this;
  }

  setChildren(children: NodeModel[]) {
    this.children = children;
    return this;
  }

  build(): NodeModel {
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
            color: 'primary',
          },
          extend: {
            alignItems: this.alignItems,
            justifyContent: this.justifyContent,
            gap: this.gap,
          },
        },
      },
      children: this.children,
    };
  }
}
