import { PaletteEnum } from '../enum/palette.enum';
import { BemUtility } from '../utility/bem.utility';
import { StringUtility } from '../utility/string.utility';

export class ComponentBase<Type> {
  constructor(protected type: Type) {
    this.type = type;
  }

  protected buildMainClassList() {
    const block = StringUtility.convertToString(this.type);
    const mainClass = BemUtility.build(block);
    const palettes = Object.values(PaletteEnum).map((palette) => {
      return BemUtility.build(block, 'palette', palette);
    });
    return [mainClass, ...palettes];
  }
}
