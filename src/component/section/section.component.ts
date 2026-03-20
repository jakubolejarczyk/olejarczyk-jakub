import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { TextComponent } from '../text/text.component';
import { StoreCore } from '../../store/store.core';
import { SectionDataModel } from '../../data/section/section-data.model';
import { BemUtil } from '../../util/bem.util';

@Component({
  selector: 'section-component',
  templateUrl: './section.component.html',
  styleUrl: './section.component.scss',
  imports: [CommonModule, TextComponent],
})
export class SectionComponent extends StoreCore {
  section = input.required<SectionDataModel[keyof SectionDataModel]>();

  buildSectionClassList() {
    const { palette } = this.section().style;
    const sectionPalette = BemUtil.build('section', 'palette', palette);
    return [sectionPalette];
  }
}
