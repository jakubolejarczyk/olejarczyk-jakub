import { Component, input } from '@angular/core';
import { SectionDataEnum } from '../../data/section/section-data.enum';

@Component({
  selector: 'section-component',
  templateUrl: './section.component.html',
})
export class SectionComponent {
  type = input.required<SectionDataEnum>();
}
