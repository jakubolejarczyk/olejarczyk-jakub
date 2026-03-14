import { Component, input } from '@angular/core';
import { NgComponentOutlet } from '@angular/common';
import { SectionDataModel } from '../../../data/section/section-data.model';

@Component({
  selector: 'section-component',
  templateUrl: './section.component.html',
  styleUrl: './section.component.scss',
  imports: [NgComponentOutlet],
})
export class SectionComponent {
  section = input.required<SectionDataModel>();

  getComponent() {
    return this.section().component;
  }
}
