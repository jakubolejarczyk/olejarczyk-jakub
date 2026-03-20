import { Component, input } from '@angular/core';
import { NgComponentOutlet, CommonModule } from '@angular/common';
import { StoreCore } from '../../store/store.core';
import { SectionDataModel } from '../../data/section/section-data.model';

@Component({
  selector: 'section-component',
  templateUrl: './section.component.html',
  styleUrl: './section.component.scss',
  imports: [NgComponentOutlet, CommonModule],
})
export class SectionComponent extends StoreCore {
  section = input.required<SectionDataModel[keyof SectionDataModel]>();

  buildSectionClassList() {
    const { palette } = this.section().style;
    const sectionPalette = `section--${palette}`;
    return [sectionPalette];
  }
}
