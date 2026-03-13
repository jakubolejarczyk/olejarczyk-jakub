import { Component, input } from '@angular/core';
import { SectionDataModel } from '../../data/section/section-data.model';

@Component({
  selector: 'section-component',
  templateUrl: './section.component.html',
  styleUrl: './section.component.scss',
})
export class SectionComponent {
  section = input.required<SectionDataModel>();
}
