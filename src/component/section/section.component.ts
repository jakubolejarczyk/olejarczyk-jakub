import { Component, input } from '@angular/core';
import { NgComponentOutlet } from '@angular/common';
import { StoreCore } from '../../store/store.core';
import { SectionDataModel } from '../../data/section/section-data.model';

@Component({
  selector: 'section-component',
  templateUrl: './section.component.html',
  imports: [NgComponentOutlet],
})
export class SectionComponent extends StoreCore {
  section = input.required<SectionDataModel[keyof SectionDataModel]>();
}
