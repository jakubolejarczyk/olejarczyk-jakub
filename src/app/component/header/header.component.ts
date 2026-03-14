import { Component } from '@angular/core';
import { SectionsComponent } from '../sections/sections.component';
import { SectionGroupDataEnum } from '../../../data/section/section-data.enum';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  imports: [SectionsComponent],
})
export class HeaderComponent {
  group = SectionGroupDataEnum.header;
}
