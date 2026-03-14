import { Component, inject, input } from '@angular/core';
import { SectionComponent } from '../section/section.component';
import { Store } from '@ngrx/store';
import { SectionGroupDataEnum } from '../../../data/section/section-data.enum';
import { SectionDataModel } from '../../../data/section/section-data.model';

@Component({
  selector: 'sections-component',
  templateUrl: './sections.component.html',
  styleUrl: './sections.component.scss',
  imports: [SectionComponent],
})
export class SectionsComponent {
  private readonly store: Store<{ section: SectionDataModel[] }> = inject(Store);

  group = input.required<SectionGroupDataEnum>();

  sections = this.store.selectSignal((state) => {
    return state.section
      .filter((section) => section.group == this.group())
      .sort((left, right) => left.order - right.order);
  });
}
