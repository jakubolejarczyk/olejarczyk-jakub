import { CommonModule, NgComponentOutlet } from '@angular/common';
import { Component, input } from '@angular/core';
import { TextComponent } from '../text/text.component';
import { StoreCore } from '../../store/store.core';
import { SectionDataModel } from '../../data/section/section-data.model';
import { BemUtil } from '../../util/bem.util';

@Component({
  selector: 'section-component',
  templateUrl: './section.component.html',
  styleUrl: './section.component.scss',
  imports: [CommonModule, TextComponent, NgComponentOutlet],
})
export class SectionComponent extends StoreCore {
  section = input.required<SectionDataModel[keyof SectionDataModel]>();

  buildSectionClassList() {
    const { palette } = this.section().style;
    const { top, right, bottom, left } = this.section().style.padding;
    const sectionPalette = BemUtil.build('section', 'palette', palette);
    const sectionPaddingTop = BemUtil.build('section', 'padding-top', top);
    const sectionPaddingRight = BemUtil.build('section', 'padding-right', right);
    const sectionPaddingBottom = BemUtil.build('section', 'padding-bottom', bottom);
    const sectionPaddingLeft = BemUtil.build('section', 'padding-left', left);
    return [
      sectionPalette,
      sectionPaddingTop,
      sectionPaddingRight,
      sectionPaddingBottom,
      sectionPaddingLeft,
    ];
  }
}
