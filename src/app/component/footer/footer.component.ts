import { Component } from '@angular/core';
import { SectionsComponent } from '../sections/sections.component';
import { SectionGroupDataEnum } from '../../../data/section/section-data.enum';

@Component({
  selector: 'footer-component',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  imports: [SectionsComponent],
})
export class FooterComponent {
  group = SectionGroupDataEnum.footer;
}
