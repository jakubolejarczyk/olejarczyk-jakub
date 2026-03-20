import { Component, input } from '@angular/core';
import { NgComponentOutlet, CommonModule } from '@angular/common';
import { StoreCore } from '../../store/store.core';
import { SectionDataModel } from '../../data/section/section-data.model';
import { Bem } from '../../util/bem.util';
import { TextComponent } from '../text/text.component';

@Component({
  selector: 'section-component',
  templateUrl: './section.component.html',
  styleUrl: './section.component.scss',
  imports: [NgComponentOutlet, CommonModule, TextComponent],
})
export class SectionComponent extends StoreCore {
  section = input.required<SectionDataModel[keyof SectionDataModel]>();

  buildSectionClassList() {
    const { color, padding } = this.section().style;
    const { vertical, horizontal } = padding;
    const sectionColor = Bem.build('section', 'color', color);
    const sectionPaddingTop = Bem.build('section', 'padding', `top-${vertical.top}`);
    const sectionPaddingBottom = Bem.build('section', 'padding', `bottom-${vertical.bottom}`);
    const sectionPaddingLeft = Bem.build('section', 'padding', `left-${horizontal.left}`);
    const sectionPaddingRight = Bem.build('section', 'padding', `right-${horizontal.right}`);
    return [
      sectionColor,
      sectionPaddingTop,
      sectionPaddingBottom,
      sectionPaddingLeft,
      sectionPaddingRight,
    ];
  }
}
